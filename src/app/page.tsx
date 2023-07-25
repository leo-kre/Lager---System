"use client";

import Item from "@/pages/api/components/Item";
import { useEffect, useState } from "react";

export default function Home() {
      const [list, setList] = useState([]);

      useEffect(() => {
            const getData = async () => {
                  const data = await fetch("api/getStorageItems");
                  const dataArray = await data.json();
                  setList(dataArray);
            };

            getData();
      }, []);

      let content: Array<any> = [];

      list.forEach((item: Item) => {
            content.push(<Item item={item}></Item>);
      });

      return (
            <main className="min-h-screen bg-white">
                  <h1 className="text-red text-5xl">Home</h1>
                  {content}
            </main>
      );
}

type Item = {
      name: string;
      hall: string;
      layer: string;
      index: number;
      container: string;
      count: number;
};
