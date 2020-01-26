const axios = require("axios");

module.exports = {
  async index(req, res) {
    const { user, password } = req.body;

    const { data } = await axios.get("https://api.myjson.com/bins/kj4aq");

    const exists = data.some(usr => usr.user === user);

    let error = [];
    let f = false;

    if (exists) {
      data.forEach(u => {
        if (u.user === user && u.password === password) {
          f = true;
        }
      });
      if (!f) error = "Palavra Passe errada";
    } else {
      error = "User não encontrado";
    }

    if (!f) return res.status(404).json({ exists: exists, error });

    return res.json({ user, password });
  }
};
