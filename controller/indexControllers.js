

let users = [];

export const createUser = (req, res) =>{
    const user = {
        id: users.length +1,
        username: req.body.username,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password, 
    };
    users.push(user);
    res.status(201).json(user);
}

export const getUser = (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ id: user.id, username: user.username, age: user.age });
}
export const updateUser = (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (req.body.username) user.username = req.body.username;
    if (req.body.age) user.age = req.body.age;
    res.json(user);
  };