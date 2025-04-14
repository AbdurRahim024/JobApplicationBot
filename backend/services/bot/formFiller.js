
class FormFiller {
    #autoSubmit
    #userData
    #form
    #screenshotsFolder
    #applicationId
    #page
    #jobUrl

    constructor(autoSubmit, userData, form) {
        this.autoSubmit = autoSubmit
        this.userData = userData
        this.form = form
        this.applicationId = `app-${Date.now()}`;
        this.screenshotFolder = path.join(__dirname, '../../screenshots', applicationId);

        if (!fs.existsSync(screenshotFolder)) {
            fs.mkdirSync(screenshotFolder, { recursive: true });
        }

    }

    async pageInit(jobUrl) {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto(jobUrl, { waitUntil: 'networkidle' });
    }

    async fillForm() {
        //iterate through form.fields
        try {
            //const value = matchFieldToUserData(inputField)
            //take screenshot
        } catch (error) {
            console.error(`Error filling field: `, error)
            //take screenshot
        }
    }

    async matchFieldToUserData(inputField) {

    }

    async submitForm() {
        //use form.submitButton
    }



    async takeScreenshot(filePath) {
        await page.screenshot({ path: filePath, fullPage: true });
        return filePath;
    }


}