const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

admin.initializeApp();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().mail.user,
        pass: functions.config().mail.pass
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const dest = functions.config().mail.dest // req.query.dest;

    const mailOptions = {
        from: `Daniel Kamar <${functions.config().mail.user}>`,
        to: dest,
        subject: 'New Message [koitoror.ml]',
        html: `<p style="font-size: 16px;">You have a new message</p>
            <br />
            <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />`
    };

    return transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.error(error.toString());
            return res.send(error.toString());
        }
        console.log('Successful');
        return res.send('Email Sent');
    });
  });
});

// exports.dbCharge = functions.firestore.document('/contactUs')
//     .onWrite((doc, context) => {
//         console.log("Daniel Kamar");
//         const payment = doc.after.data();
// });
