import type { NextApiRequest, NextApiResponse } from "next";

const data: Array<Item> = [
      {
            name: "Feldbett",
            hall: "MTF-Halle",
            layer: "B",
            index: 3,
            container: "3",
            count: 240,
      },
      {
            name: "Grill",
            hall: "MTF-Halle",
            layer: "A",
            index: 0,
            container: "4",
            count: 1,
      },
      {
            name: "Theke",
            hall: "LF-Halle",
            layer: "D",
            index: 3,
            container: "Rote Box",
            count: 10,
      },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
      res.status(200).json(data);
}

type Item = {
      name: string;
      hall: string;
      layer: string;
      index: number;
      container: string;
      count: number;
};
