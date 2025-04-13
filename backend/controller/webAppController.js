
const getWebApp = async (req,res) => {
    try {
        res.status(200).json({message: 'this is a web app message'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getWebApp
}