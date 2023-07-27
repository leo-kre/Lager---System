import type { NextApiRequest, NextApiResponse } from "next";

export const data: Array<Item> = [
      {
            uuid: "qzsq6-87jfb-zwt9f-dxc1i-uexwz",
            name: "Feldbett",
            hall: "MTF-Halle",
            layer: "B",
            index: 3,
            container: "Box 1",
            count: 240,
      },
      {
            uuid: "null",
            name: "Grill",
            hall: "MTF-Halle",
            layer: "A",
            index: 0,
            container: "4",
            count: 1,
      },
      {
            uuid: "null",
            name: "Theke",
            hall: "LF-Halle",
            layer: "D",
            index: 3,
            container: "Rote Box",
            count: 10,
      },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
      index: number;
      container: string;
      count: number;
};

function generateUUID(): string {
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
