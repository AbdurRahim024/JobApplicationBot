const { chromium } = require('playwright');
const FormDetector = require('./formDetector')
const FormFiller = require('./formFiller')

class BotService {
    #userData;
    #job;
    #applicationId
    #formDetector
    #formFiller
    #jobUrl

    // constructor(userData, job) {
    //     console.log('bot service constructor')
    //     this.userData = userData
    //     this.job = job
    // }

    constructor(jobUrl) {
        console.log('job service constructor 2')
        this.jobUrl = jobUrl
    }

    async apply() {
        console.log('applying to: ', this.jobUrl)

        try {
            const browser = await chromium.launch({ headless: false });
            const context = await browser.newContext();
            const page = await context.newPage();

            const formDetector = new FormDetector(page, this.jobUrl);
            const formFound = await formDetector.isFormFound();

            if(!formFound) {
                console.log('no form found')
                throw new Error('No form found on this page')
            }

        } catch(error) {
            console.error('Error applying to job:', error)
            throw new Error('Failed to apply to job: ' + error.message)
        }

    }

    saveApplication() {
        console.log('creating and saving application..')
        return 'app-12345'
    }
}

module.exports = BotService