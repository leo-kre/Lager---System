import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "./getStorageItems";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
      const uuid = req.query.uuid;

      console.log(uuid);

      data.forEach((item) => {
            if (item.uuid == uuid) {
                  console.log(item);
                  res.json(item);
            }
      });
}

type Item = {
      uuid: string;
      name: string;
      hall: string;
      layer: string;
      index: number;
      container: string;
      count: number;
};
