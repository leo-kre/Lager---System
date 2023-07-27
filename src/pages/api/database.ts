const fs = require("fs");

const jsonFile = "./data.json";

export let data: Array<Item> = [];

export function load() {
      const dataString = fs.readFileSync(jsonFile, "utf8");
      data = JSON.parse(dataString);
}

export function save() {
      const dataString = JSON.stringify(data);

      fs.writeFileSync(jsonFile, dataString, "utf8", (err: Error) => {
            if (err) {
                  return console.log(err);
            }
      });
}

type Item = {
      uuid: string;
      name: string;
      hall: string;
      layer: string;
      container: string;
      count: number;
};
