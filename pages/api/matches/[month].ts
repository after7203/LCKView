import type { NextApiRequest, NextApiResponse } from "next";
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
