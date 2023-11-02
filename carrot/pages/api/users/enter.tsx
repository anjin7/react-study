import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import useMutation from "../libs/client/useMutation";
import { cls } from "../libs/client/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(401).end();
  }
  console.log(req.body);
  res.status(200).end();
}