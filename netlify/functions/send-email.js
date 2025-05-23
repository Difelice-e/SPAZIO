const nodemailer = require("nodemailer");
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);
  const { email, message, lang } = data;

  if (!email || !message) {
    return { statusCode: 400, body: "Missing fields" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `<${email}>`,
    to: process.env.GMAIL_USER,
    subject: `Nuovo messaggio da ${email} (${lang || "lingua non specificata"})`,
    text: `Hai ricevuto un nuovo messaggio dal sito.\n\nEmail: ${email}\nLingua: ${lang}\n\nMessaggio:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Errore nell'invio t " + process.env.GMAIL_USER + ' ' + process.env.GMAIL_PASS, details: error.message }),
    };
  }
};
