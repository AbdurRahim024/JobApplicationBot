const { application } = require('express');
const BotService = require('../services/bot/botService')


const getBot = async (req,res) => {
    try {
        res.status(200).json({message: 'this is a dummy bot message'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

const apply = async (req,res) => {
    try {
        const { jobUrl } = req.body
        // const { userId, jobId } = req.body
        
        // const userData = await UserData.findOne({ userId })
        // if (!userData) {
        //     return res.status(404).json({error: 'User profile was not found.'})
        // }

        // const job = await Jobs.findOne({ jobId })
        // if (!job) {
        //     return res.status(404).json({error: 'Job was not found.'})
        // }

        // const botService = new BotService(userData, job)
        // botService.apply()
        // const application = botService.saveApplication()

        // const newApplication = await application.create(application)
        // if (!newApplication) {
        //     return res.status(500).json({error: 'Application creation has failed.'})
        // }

        // res.status(200).json({
        //     message: 'Application was created successfully.',
        //     application: newApplication
        // })

        const botService = new BotService(jobUrl)
        botService.apply()
        const applicationId = botService.saveApplication()

        res.status(200).json({
            applicationId: applicationId
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getBot,
    apply
}