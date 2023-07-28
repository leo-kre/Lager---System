import type { NextApiRequest, NextApiResponse } from "next";
import { data, load } from "./database";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
      if (data.length == 0) {
            load();
      }

      data.forEach((item: Item) => {
            if (item.uuid == "null") {
                  item.uuid = generateUUID();
            }
      });

      res.status(200).json(data);
}

type Item = {
      uuid: string;
      name: string;
      hall: string;
      layer: string;
      container: string;
      count: number;
};

export function generateUUID(): string {
      const charString = "abcdefghijklmnopqrstuvwxyz0123456789";
      const length = charString.length;

      let finalUUID = "";

      let foundValidUUID = false;

      while (!foundValidUUID) {
            let generatedUUID = "";
            for (let i = 0; i < 5; i++) {
                  if (i >= 1) {
                        generatedUUID = generatedUUID + "-";
                  }
                  for (let j = 0; j < 5; j++) {
                        generatedUUID = generatedUUID + charString[Math.floor(Math.random() * length)];
                  }
            }

            if (data.find((e) => e.uuid === generatedUUID)) {
                  continue;
            } else {
                  finalUUID = generatedUUID;
                  foundValidUUID = true;
            }
      }

      return finalUUID;
}
