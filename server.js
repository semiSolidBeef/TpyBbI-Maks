const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/send-email", async (req, res) => {
  console.log(req.body);
  const { name, phone, message, email } = req.body;

  const transporter = nodemailer.createTransport({
    host: "in-v3.mailjet.com",
    port: 587,
    auth: {
      user: "9af919c6a92174646112fb9dc009fece",
      pass: "315fbce1728980c26ae6c550b927a760",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "metalsmtp1@gmail.com",
      subject: "Новое сообщение с вашего сайта",
      text: `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`,
    });
    res.json({ status: 'success', message: 'Сообщение успешно отправлено!' });
  } catch (error) {
    console.error(error);
    res.json({ status: 'error', message: 'Ошибка при отправке сообщения.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


