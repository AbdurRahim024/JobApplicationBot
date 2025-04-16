const { chromium } = require('playwright');
const getFormFields = require('./formDetector')
const FormFiller = require('./formFiller')

class BotService {
    #user;
    #job;

    constructor(job, user) {
        console.log('job service constructor 2')
        this.#job = job
        this.#user = user
    }

    async apply() {
        console.log('applying to: ', this.#job.url)

        try {
            const browser = await chromium.launch({ headless: false });
            const context = await browser.newContext();
            const page = await context.newPage();

            const fields = await getFormFields(page, this.#job.url)

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