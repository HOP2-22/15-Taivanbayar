const List = require("../model/lists");

exports.createList = async (req, res) => {
    try {
        const list = req.body;
        await List.create(list);
        res.send(list);
    } catch (error) {
        res.send(error);
    }
}

exports.getList = async (req, res) => {
    try {
        const list = List.find();
        res.send(list);
    } catch (error) {
        res.send(error);
    }
}

exports.deleteList = async (req, res) => {
    try {
        await List.deleteOne()
    } catch (error) {
        console.log(error)
    }
}