/*
    BotService:
        - Input: UserData, Job
        - Fills form
        - Takes screenshots
        - Submits application if autoSubmit on
        - Generates session URL of saved application if autoSubmit off
        - Creates Application object and stores in DB
*/
class BotService {
    #userData;
    #job;

    constructor(userData, job) {
        console.log('bot service constructor')
    }
}