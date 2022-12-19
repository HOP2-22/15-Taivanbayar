const randomName = () => String(name.map((word) => (name = word)));
const users = [
  {
    name: 'dudee',
    id: 1,
  },
  {
    name: "dude",
    id: 2,
  },
  {
    name: "dud",
    id: 3,
  },
  {
    name: "dde",
    id: 4,
  },
];
const name = ["d", "d", "e", "e", "e"];

exports.getUsers = (req, res) => {
  res.status(200).json({
    users: users,
  });
};

exports.createUsers = (req, res) => {
  users.push({ id: user.length, name: randomName()  }); //randomName
  console.log(...req.body);
  res.status(200).json(users);
};

exports.updateUsers = (req, res) => {
  users.map(
    (el) => {
      el.id++
    }
  )
  res.status(200).json(users);
};

exports.deleteUser = (req, res) => {
  if (!req.body.ind) {
    res.status(400).json("no user found");
  }
  users = users.filter((user) => user.index !== req.body.ind);
  res.status(200).json(`user with ${req.body.ind} was deleted`);
};
