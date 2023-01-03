const Link = require("../model/links");

exports.createLink = async (req, res) => {
    try {
        const url = req.body;
        await Link.create(url)
    } catch (error) {
        res.status(404).send({message: "Wrong URL"})
    }
}