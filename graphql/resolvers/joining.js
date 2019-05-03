const Class = require("../../models/class");
const Joining = require("../../models/joining");
const User = require("../../models/user");
const { transformJoining, transformClass } = require("./merge");

module.exports = {
  joinings: async (args, req) => {
    console.log("Args:", args);
    try {
      const joiningsUser = await Joining.find({
        $or: [{ userEmail: args.userEmail }, { userId: args.userId }]
      });

      console.log("Join:", joiningsUser);

      return joiningsUser.map(joining => {
        return transformJoining(joining);
      });
    } catch (err) {
      throw err;
    }
  },

  joinClass: async (args, req) => {
    const fetchedClass = await Class.findOne({ _id: args.classId });
    const fetchedUser = await User.findOne({ userId: args.userId });

    console.log("Fetched User:", fetchedUser);

    const joining = new Joining({
      userId: fetchedUser.userId,
      mtclass: fetchedClass,
      userEmail: args.userEmail
    });
    const result = await joining.save();
    return transformJoining(result);
  }
};
