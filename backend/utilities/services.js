const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

export const hashString = async (useValue) => {
    const salt = await bcrypt.genSalt(10);

    const hashedpassword = await bcrypt.hash(useValue, salt);
    return hashedpassword;

}

export const compareString = async (userPassword, password) {
    const isMatch = await bcrypt.compare(userPassword, password);
    return isMatch;
}

//Create JWT
export function createJWT(id) {
    return JWT.sign({userId: id}, process.env.JWT_SECRET_KEY, {
        expireIn: "1d"
    })
}