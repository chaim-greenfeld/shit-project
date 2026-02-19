import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const PASSWORD_ADMIN = process.env.PASSWORD_ADMIN;
const secret = process.env.JWT_SECRET;

export const adminLogin = async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: "password are required" });
    }

    if (Number(password) != Number(PASSWORD_ADMIN)) {
      return res.status(401).json({ error: "password is not good" });
    }

    const token = jwt.sign({ role: "admin" }, secret, { expiresIn: "1h" });

    res.send(token);
  } catch (err) {
    console.log(err);
  }
};

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, secret);
    req.user = verified;
    next();
  } catch (err) {
    res.status(403).send("Invalid Token");
  }
};
