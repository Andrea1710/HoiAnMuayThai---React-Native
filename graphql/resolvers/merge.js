const Class = require("../../models/class");
const User = require("../../models/user");
const DataLoader = require("dataloader");

const classLoader = new DataLoader(classIds => {
  return classes(classIds);
});

const userLoader = new DataLoader(userIds => {
  return User.find({ _id: { $in: userIds } });
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

const user = async userEmail => {
  try {
    const user = await userEmail.toString();
    return {
      ...user._doc,
      email: user.email
    };
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

const transformJoining = joining => {
  return {
    ...joining._doc,
    _id: joining.id,
    userId: joining.userId,
    userEmail: joining.userEmail,
    user: user.bind(this, joining._doc.user),
    mtclass: singleClass.bind(this, joining._doc.mtclass)
  };
};

exports.transformClass = transformClass;
exports.transformJoining = transformJoining;

// exports.user = user;
// exports.classess = classess;
// exports.singleClass = singleClass;
