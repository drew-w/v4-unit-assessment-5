const bcrypt = require("brcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password, profilePicture } = req.body;
    const db = req.app.get("db");
    const result = await db.user.find_user_by_username([username]);
    if (result[0]) {
      return res.status(409).send("Username Taken");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const createUser = await db.user.create_user([
      username,
      hash,
      profilePicture,
    ]);
    const user = createUser[0];
    req.session.user = {
      username: user.username,
      password: user.password,
      profile_pic: user.profile_pic,
    };
    return res.status(201).send(req.session.user);
  },

  login: async (req, res) => {},
  logout: async (req, res) => {
      req.session.destroy();
      res.sendStatus(200)
  },
  getUser: async (req, res) => {},
};
