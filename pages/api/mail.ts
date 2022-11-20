// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New email from gamisonia.com",
      html: ` <p><strong>Name:</strong> ${body.name}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
              <p><strong>Message:</strong> ${body.message}</p>`,
    });

    res.status(200).json({ message: "Good" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: (err as Error).message });
  }
}

const email = process.env.NODEMAILER_EMAIL;
const password = process.env.NODEMAILER_PASS;
const receiverEmail = process.env.NODEMAILER_RECEIVER_EMAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

const mailOptions = {
  from: email,
  to: receiverEmail,
};
