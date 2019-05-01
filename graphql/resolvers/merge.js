const Class = require("../../models/class");
const DataLoader = require("dataloader");

const classLoader = new DataLoader(classIds => {
  return classes(classIds);
});

const classes = async classIds => {
  try {
    const classes = await Class.find({ _id: { $in: classIds } });
    classes.sort((a, b) => {
      return (
        classIds.indexOf(b._id.toString()) - classIds.indexOf(a._id.toString())
      );
    });

    return classes.map(mtclass => {
      return transformClass(mtclass);
    });
  } catch (err) {
    throw err;
  }
};

const singleClass = async classId => {
  try {
    const mtclass = await classLoader.load(classId.toString());
    return mtclass;
  } catch (err) {
    throw err;
  }
};

const transformClass = mtclass => {
  return {
    ...mtclass._doc,
    _id: mtclass.id
  };
};

exports.transformClass = transformClass;

// exports.user = user;
// exports.classess = classess;
// exports.singleClass = singleClass;
