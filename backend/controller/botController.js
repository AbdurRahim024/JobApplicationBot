
const getBot = async (req,res) => {
    try {
        res.status(200).json({message: 'this is a bot message'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

module.exports = {
    getBot
}