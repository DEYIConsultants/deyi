import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(request) {
  const { name, email, message } = await request.json();

  // Create a transporter object using Gmail's SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for port 465, false for port 587
    auth: {
      user: process.env.EMAIL_USER, // your Gmail address from .env file
      pass: process.env.EMAIL_PASS, // your Gmail app password from .env file
    },
  });

  // Set up email data with unicode symbols
  let mailOptions = {
    from: `"Your Name" <${process.env.EMAIL_USER}>`, // sender address
    to: process.env.RECEIVER_EMAIL, // receiver email address from .env file
    subject: 'New Contact Form Submission', // Subject line
    text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
  };

  // Send mail with defined transport object
  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error); // Log the error to the console
    return new Response(
      JSON.stringify({ message: 'Error sending email', error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

// import nodemailer from 'nodemailer';
// import { google } from 'googleapis';
// import dotenv from 'dotenv';

// dotenv.config();

// // OAuth2 client setup
// const oAuth2Client = new google.auth.OAuth2(
//   process.env.OAUTH_CLIENT_ID,
//   process.env.OAUTH_CLIENT_SECRET,
//   process.env.OAUTH_REDIRECT_URL
// );

// oAuth2Client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN });

// export async function POST(request) {
//   const { name, email, message } = await request.json();

//   try {
//     // Get the access token from the OAuth2 client
//     const accessToken = await oAuth2Client.getAccessToken();

//     // Create a transporter object using Gmail's OAuth2 transport
//     let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: process.env.EMAIL_USER, // your Gmail address from .env file
//         clientId: process.env.OAUTH_CLIENT_ID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//         accessToken: accessToken.token, // access token obtained from OAuth2 client
//       },
//     });

//     // Set up email data with unicode symbols
//     let mailOptions = {
//       from: `"Your Name" <${process.env.EMAIL_USER}>`, // sender address
//       to: process.env.RECEIVER_EMAIL, // receiver email address from .env file
//       subject: 'New Contact Form Submission', // Subject line
//       text: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
//     };

//     // Send mail with defined transport object
//     await transporter.sendMail(mailOptions);
//     return new Response(
//       JSON.stringify({ message: 'Email sent successfully' }),
//       {
//         status: 200,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//   } catch (error) {
//     console.error('Error sending email:', error); // Log the error to the console
//     return new Response(
//       JSON.stringify({ message: 'Error sending email', error: error.message }),
//       {
//         status: 500,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//   }
// }
