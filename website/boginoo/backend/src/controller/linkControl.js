const Link = require("../model/links");

exports.createLink = async (req, res) => {
    try {
        const url = req.body;
       const link =  await Link.create(url);
       res.send(link);
    } catch (error) {
        res.status(404).send({message: "Wrong URL"})
    }
}

exports.getLink = async (req, res) => {
    try {
        const url = await Link.find();
        res.send(url);
    } catch (error) {
        res.status(404).send({message: "Failed to get link"})
    }
} 