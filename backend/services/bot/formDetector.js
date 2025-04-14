
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

    async findInputFields() {
        //find and return all input fields with their type, name, label, id, required or not..
    }

    async getSubmitButton() {
        //find and return submit button
    }

    async getForm() {
        //call findInputFields
        //map through input fields and add a selector to each
        //return form with fields and submitButton
    }

}

module.exports = FormDetector