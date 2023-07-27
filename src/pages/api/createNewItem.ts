import { NextApiRequest, NextApiResponse } from "next";
import { data, save } from "./database";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
      const reqData = req.body;
      const jsonData: any = JSON.parse(reqData);
      const item: Item = jsonData.item;

      data.push(item);

      save();
}

type Item = {
      uuid: string;
      name: string;
      hall: string;
      layer: string;
      container: string;
      count: number;
};
