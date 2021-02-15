const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const profile_pic = `https://robohash.org/${username}.png`;
    const db = req.app.get("db");
    const result = await db.user.find_user_by_username([username]);
    if (result[0]) {
      return res.status(409).send("Username Taken");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const createUser = await db.user.create_user([username, hash, profile_pic]);
    const user = createUser[0];
    req.session.user = {
      username: user.username,
      password: user.password,
      profile_pic: user.profile_pic,
    };
    return res.status(201).send(req.session.user);
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    const userExisting = await db.user.find_user_by_username([username]);
    const user = userExisting[0];
    if (!user) {
      return res.status(401).send("username does not exist");
    }
    const authentication = bcrypt.compareSync(password, user.hash);
    if (!authentication) {
      return res.status(403).send("Incorrect Password");
    }
    req.session.user = {
      username: user.username,
      password: user.password,
      profile_pic: user.profile_pic,
    };
    return res.send(req.session.user);
  },
  logout: async (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  getUser: async (req, res) => {
    if (req.session.user) {
      return res.status(200).send(req.session.user);
    } else {
      return sendStatus(404);
    }
  },
};
