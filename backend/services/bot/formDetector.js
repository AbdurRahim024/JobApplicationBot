
class FormDetector {
    #page
    #jobUrl
    #inputFields


    constructor(page, jobUrl) {
        this.page = page
        this.jobUrl = jobUrl
    }

    async isFormFound() {
        let isFormFound = false

        await this.page.goto(this.jobUrl, { waitUntil: 'networkidle' });

        // Check if the form is inside an iframe
        const iframe = this.page.frameLocator('iframe');
        isFormFound = await iframe.locator('form').count() > 0;
        console.log('form found in iframe: ', isFormFound);

        // If not in iframe, check the main page
        if (!isFormFound) {
            await this.page.waitForSelector('form', { timeout: 10000 });
            isFormFound = await this.page.locator('form').count() > 0;
            console.log('form found on main page: ', isFormFound);
        }

        return isFormFound;
    }

    async getForm() { //TODO: this assumes form is inside an iframe, handle case where form is not in iframe
        await this.page.goto(this.jobUrl, { waitUntil: 'networkidle' });

        const iframe = this.page.frameLocator('iframe');
        const isFormFound = await iframe.locator('form').count() > 0;
        if(!isFormFound) {
            console.log('No form found in iframe');
            throw new Error('No form found in iframe');
        }

        const iframeElementHandle = await this.page.waitForSelector('iframe');
        const frame = await iframeElementHandle.contentFrame();

        if (!frame) {
            console.error('Unable to access iframe content (may be cross-origin)');
            throw new Error('Cross-origin iframe access is not allowed');
        }

        const formFields = await frame.evaluate(() => {
            const fields = Array.from(document.querySelectorAll('input, textarea, select, button'));

            return fields.map(field => {

                let selector = '';
                if (field.id) {
                    selector = `#${field.id}`;
                } else if (field.name) {
                    selector = `[name="${field.name}"]`;
                }

                return {
                    tag: field.tagName.toLowerCase(),
                    type: field.type || null,
                    name: field.name || null,
                    id: field.id || null,
                    required: field.required || false,
                    selector: selector,
                    label: field.labels ? Array.from(field.labels).map(label => label.innerText).join(', ') : null,
                    options: field.tagName.toLowerCase() === 'select'
                    ? Array.from(field.options).map(opt => ({ value: opt.value, label: opt.label }))
                    : undefined
                };
            });
        });

        console.log('form fields:');
        for (const field of formFields) {
            console.log('field:', field);
        }
        return formFields;
    }

}

module.exports = FormDetector