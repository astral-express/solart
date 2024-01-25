import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  if (!body.name || !body.email) {
    return res
      .status(400)
      .json({ error: "Oops! You missed some required fields." });
  }
  return res.status(200).json({ data: body });
}
