const Users = require("./models/userModel.js");
const hashedString = require('../utilities/services.js')

export const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  // check if the fileds are validate
  if (!(firstName || lastName || email || password)) {
    next("Provide Require Fields!");
    return;
  }
  try {
    const userExist = await Users.findOne({ email });

    if (userExist) {
      next("Email already exists");
    }
    const hashedPassword = await hashedString(password);

    // create the user
    const user = await Users.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
    });

    //Sent verification email
    sendVerificationEmail(user, res)
  } catch (error) {
    console.log(error);
    res.status(404).json({});
  }
};
