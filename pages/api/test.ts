import { NextApiRequest, NextApiResponse } from "next";

export default function test(req: NextApiRequest, resp: NextApiResponse) {
  resp.status(200).json({
    message: "Here is the message",
  });
}
