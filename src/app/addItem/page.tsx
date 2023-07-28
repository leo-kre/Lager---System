"use client";

import Counter from "@/pages/api/components/Counter";
import DropDown from "@/pages/api/components/DropDown";
import InputField from "@/pages/api/components/InputField";
import RadioButton from "@/pages/api/components/RadioButton";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AddItem() {
      const router = useRouter();

      const [config, setConfig] = useState<Config>({ halls: [], layers: [] });

      const [name, setName] = useState("name");
      const [selectedHall, setSelectedHall] = useState("");
      const [layer, setLayer] = useState("D-4");
      const [container, setContainer] = useState("Gitterkiste");
      const [count, setCount] = useState(12);

      useEffect(() => {
            const getData = async () => {
                  const data = await fetch("api/getConfig");
                  const config: Config = await data.json();

                  console.log(config);

                  setConfig(config);
            };

            getData();
      }, []);

      const requestItemCreation = () => {
            const item: Item = {
                  uuid: "null",
                  name: name,
                  hall: selectedHall,
                  layer: layer,
                  container: container,
                  count: count,
            };

            fetch("/api/createNewItem", {
                  method: "POST",
                  body: JSON.stringify({
                        item,
                  }),
                  headers: {
                        "content-type": "item/json",
                  },
            }).catch((e) => console.log(e));
      };

      let hallSelect: Array<any> = [];

      config.halls.forEach((hall) => {
            hallSelect.push(<RadioButton text={hall} action={(text: string) => setSelectedHall(text)} currentSelectedButton={selectedHall}></RadioButton>);
      });

      return (
            <main className="w-full min-h-screen bg-background flex justify-center">
                  <div className="w-[80%] sm:mt-32 mt-10 pr-[10%] ">
                        <input
                              placeholder="Name"
                              className="placeholder:text-text_2 border-b-2 max-w-[85%] w-96 border-border bg-transparent text-text_1 focus:outline-none text-5xl mb-5"
                              onInput={(obj) => {
                                    const o: any = obj as any;
                                    setName(o.target.value);
                              }}
                        ></input>

                        <div className="w-full">
                              <h1 className="w-1/2 text-xl">Halle</h1>
                              <div className="flex flex-col items-end w-1/4 ">{hallSelect}</div>
                        </div>

                        <div className="flex flex-col gap-3">
                              <div className="flex flex-col sm:flex-row">
                                    <h1 className="w-36 text-xl">Ebene</h1>
                                    <DropDown
                                          value="A-0"
                                          action={(text: string) => {
                                                setLayer(text);
                                          }}
                                          options={config.layers}
                                    ></DropDown>
                              </div>

                              <div className="flex flex-col sm:flex-row">
                                    <h1 className="w-36 text-xl">Container</h1>
                                    <InputField
                                          placeholder="Container"
                                          type="text"
                                          action={(text: string) => {
                                                setContainer(text);
                                          }}
                                    ></InputField>
                              </div>

                              <div className="flex flex-col sm:flex-row">
                                    <h1 className="w-36 text-xl">Stückzahl</h1>
                                    <Counter
                                          min={0}
                                          max={999}
                                          value={0}
                                          action={(value: number) => {
                                                setCount(value);
                                          }}
                                    ></Counter>
                              </div>
                        </div>

                        <button
                              className="px-5 py-2 mt-10 bg-blue hover:bg-darkBlue rounded-3xl transition duration-100 ease-in-out"
                              onClick={() => {
                                    requestItemCreation();
                                    router.back();
                              }}
                        >
                              Erstellen
                        </button>
                  </div>
            </main>
      );
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
