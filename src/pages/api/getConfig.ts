import type { NextApiRequest, NextApiResponse } from "next";
import { config, load } from "./database";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
      load();
      res.status(200).json(config);
}
