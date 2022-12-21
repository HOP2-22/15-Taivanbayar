
const lists = [
  {
    title: "something",
    detail: ["get item", "move out"],
    isDone: false,
  },
];

exports.showLists = async (req, res) => {
  res.status(200).send({
    lists: lists,
  });
}; //get
exports.createLists = async (req, res) => {
  const lists = lists.push(req.body);
  res.status(200).send({ lists: lists });
}; //post

exports.deleteItems = async (req, res) => {
  const { id } = req.body;
  const NewLists = lists.filter((_list, index) => index !== id);
  res.send({ lists: NewLists });
}; //delete

exports.updateItems = async (req, res) => {
  const { id } = req.body; 
  lists[id].isDone = true;
  res.send({ lists: lists });
} //put
