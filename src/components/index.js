/* eslint-disable import/no-extraneous-dependencies */
import { config, https } from 'firebase-functions';
import { initializeApp } from 'firebase-admin';
import { createTransport } from 'nodemailer';
const cors = require('cors')({ origin: true });

initializeApp();

const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  service: 'gmail',
  auth: {
    user: config().mail.user,
    pass: config().mail.pass
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
});

export const sendMail = https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    // eslint-disable-next-line prefer-destructuring
    const dest = config().mail.dest; // req.query.dest;

    const mailOptions = {
      from: `Daniel Kamar <${config().mail.user}>`,
      to: dest,
      subject: 'New Message [koitoror.ml]',
      html: `<p style="font-size: 16px;">You have a new message</p>
            <br />
            <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />`
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.error(error.toString());
        return res.send(error.toString());
      }
      // eslint-disable-next-line no-console
      console.log('Successful');
      // eslint-disable-next-line vars-on-top
      // eslint-disable-next-line no-var
      // eslint-disable-next-line no-shadow
      // let mailOptions = JSON.stringify(mailOptions);
      return res.send('Email Sent');
    //   return res.send(`Sent! ${mailOptions}`);
    });
  });
});

// exports.dbCharge = functions.firestore.document('/contactUs')
//     .onWrite((doc, context) => {
//         console.log("Daniel Kamar");
//         const payment = doc.after.data();
// });
