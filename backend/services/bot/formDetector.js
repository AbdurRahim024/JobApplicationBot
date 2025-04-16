
async function getFormFields(page, jobUrl) { 

    await page.goto(jobUrl, { waitUntil: 'networkidle' });

    let context = page; //we're gonna assume it's not in an iframe initially
    let iframeFound = false;

    const iframeElementHandle = await page.$('iframe');

    if (iframeElementHandle) {
        const frame = await iframeElementHandle.contentFrame();
        if (frame) {
        context = frame;
        iframeFound = true;
        console.log('Found iframe, extracting form fields from inside it');
        } else {
        console.warn('Found iframe element, but could not access its content (may be cross-origin).');
        }
    } else {
        console.log('No iframe found, extracting form fields from main page');
    }


    const formFields = await context.evaluate(() => {
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


module.exports = getFormFields;