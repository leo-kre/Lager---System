const fs = require("fs");

const jsonFile = "./data.json";
const configFile = "./config.json";

export let data: Array<Item> = [];

export let config: Config;

export function load() {
      const dataString = fs.readFileSync(jsonFile, "utf8");
      data = JSON.parse(dataString);

      const configString = fs.readFileSync(configFile, "utf8");
      config = JSON.parse(configString);
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

type Config = {
      halls: Array<string>;
      layers: Array<string>;
};
