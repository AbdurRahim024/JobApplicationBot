
const getDummy = async (req,res) => {
    res.json({mssg: 'this is a dummy message'})
}

module.exports = {
    getDummy
}