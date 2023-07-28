"use client";
import Item from "@/pages/api/components/Card";
import RadioButton from "@/pages/api/components/RadioButton";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const halls = ["MTF-Halle", "LF-Halle"];

export default function ItemEdit() {
      const [item, setItem] = useState<Item>();
      const [selectedHall, setSelectedHall] = useState("MTF-Halle");

      const searchParams = useSearchParams();
      const uuid = searchParams?.get("uuid");

      useEffect(() => {
            const getData = async () => {
                  const data = await fetch("api/getItemFromUUID?uuid=" + uuid);
                  const item: Item = await data.json();
                  setSelectedHall(item.hall);
                  setItem(item);
            };

            getData();
      }, []);

      if (item == undefined) {
            return (
                  <main className="w-full h-[100vh] bg-black flex justify-center items-center">
                        <h1 className="font-semibold text-3xl">Item not available</h1>
                  </main>
            );
      }

      let radioButtons: Array<any> = [];

      halls.forEach((hall) => {
            radioButtons.push(<RadioButton text={hall} action={(text: string) => setSelectedHall(text)} currentSelectedButton={selectedHall}></RadioButton>);
      });

      return (
            <main className="min-h-screen bg-white">
                  <h1 className="text-black font-semibold text-5xl">{item.name}</h1>
                  {radioButtons}
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
