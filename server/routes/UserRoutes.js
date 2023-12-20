import { Router } from "express";
import { UserModel } from "../models/UserModel.js";
import bcrypt from "bcrypt";

const router = Router();

router.post("/get-user", async (req, res) => {
  const { userID } = req.body;
  const user = await UserModel.findById(userID);
  res.json(user);
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const encriptedPassword = await bcrypt.hash(password, 10);
  const newUser = await new UserModel({
    username,
    password: encriptedPassword,
  });
  await newUser.save();
  res.send(newUser);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });
  if (!user) return res.json({ message: "Username not found" });

  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) return res.json({ message: "Incorrect password" });

  res.json({ userID: user._id });
});

export { router as UserRoutes };
