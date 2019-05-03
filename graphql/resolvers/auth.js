const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

module.exports = {
  createUser: async args => {
    try {
      const existingUser = await User.findOne({
        email: args.userInput.email
      });

      if (existingUser) {
        return;
      }

      const user = new User({
        userId: args.userInput.userId,
        name: args.userInput.name,
        email: args.userInput.email
      });

      const result = await user.save();
      return { ...result._doc, _id: result.id };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error("User does not exist");
    }

    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("Password is incorrect");
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "somesupersecretkey",
      {
        expiresIn: "1h"
      }
    );

    return {
      userId: user.id,
      name: user.name,
      email: user.email,
      birthday: user.birthday
    };
  }
};
