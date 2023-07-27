import type { NextApiRequest, NextApiResponse } from "next";
import { data, load } from ".//database";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
      const uuid = req.query.uuid;

      if (data.length == 0) {
            load();
      }

      data.forEach((item) => {
            if (item.uuid == uuid) {
                  console.log(item);
                  res.json(item);
            }
      });
}
