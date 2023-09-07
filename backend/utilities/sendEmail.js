import { hashString } from './services';

const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const {v4: uuidv4} = require('uuid')



dotenv.config();


const { AUTH_EMAIL, AUTH_PASSWORD, APP_URL} = process.env

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    auth: {
        user: AUTH_EMAIL,
        pass: AUTH_PASSWORD
    }
})

//send email
export const sendVerificationEmail = async (user, res) => {
    const { _id, email, lastName } = user;
    const token = _id + uuidv4();

    const link = APP_URL + "users/verify/" + _id + "/" + token;

    // mail option
    const mailoptions = {
        from: AUTH_EMAIL,
        to: email,
        subject: "Email Verification",
        html: <div>Please verify your email address
            <a href={link}>Email Address</a>
        </div>
    };

    try {
        const hashedToken = await hashString(token);
    } catch (error) {
        
    }
}