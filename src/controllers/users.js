const { readFile, writeFile } = require("../utils/fs");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

const userRegstrGet = (req, res) => {
  try {
    const allUser = readFile("users");

    res.json(allUser);
  } catch (error) {
    console.log(error);
  }
};

const userRegstrPost = (req, res) => {
  try {
    const { username, email, password } = req.body;
    const allUser = readFile("users");

    if (!username && !email && !password) {
      return res.sendStatus(400).send("required all data");
    }

    const userId = uuid.v4();
    const hashPassword = bcrypt.hashSync(password, +process.env.BCRYPT_SALT);
    const createdAt = new Date();

    const foundUser = allUser.find(
      (user) => user.username == username && user.email == email
    );

    if (foundUser) {
      return res.status(400).json({
        status: 400,
        massage: "User already regstered",
      });
    }

    const user = {
      userId,
      username,
      email,
      hashPassword,
      createdAt,
      updateAt: null,
    };

    writeFile("users", [...allUser, user]);

    res.sendStatus(200).send("success");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userRegstrGet, userRegstrPost };
