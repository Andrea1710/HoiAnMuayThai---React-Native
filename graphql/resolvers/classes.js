const Class = require("../../models/class");
const { transformClass } = require("./merge");

module.exports = {
  classes: async () => {
    try {
      const classes = await Class.find();
      return classes.map(mtclass => {
        return transformClass(mtclass);
      });
    } catch (err) {
      throw err;
    }
  },

  createClass: async (args, req) => {
    const mtclass = new Class({
      title: args.classInput.title,
      description: args.classInput.description,
      date: args.classInput.date,
      time: args.classInput.time
    });
    let createdClass;
    try {
      const result = await mtclass.save();
      createdClass = transformClass(result);
      return createdClass;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  deleteClass: async (args, req) => {
    try {
      const mtclass = await Class.findById(args.classId);
      if (!mtclass) {
        throw new Error("Class not found");
      }

      await Class.deleteOne({ _id: args.classId });

      return mtclass;
    } catch (err) {
      throw err;
    }
  }
};
