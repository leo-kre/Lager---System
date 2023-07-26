"use client";

import Item from "@/pages/api/components/Item";
import SearchBar from "@/pages/api/components/Searchbar";
import { useEffect, useState } from "react";

export default function Home() {
      const [list, setList] = useState([]);
      const [searchInput, setSearchInput] = useState("");

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
            if (item.name.toLowerCase().includes(searchInput.toLowerCase())) content.push(<Item item={item}></Item>);
      });

      return (
            <main className="min-h-screen bg-background">
                  <SearchBar
                        action={(text: string) => {
                              setSearchInput(text);
                        }}
                  ></SearchBar>

                  <div className="grid 3xl:grid-cols-4 2.5xl:grid-cols-3 0.5xl:grid-cols-2 grid-cols-1 justify-items-center">{content}</div>
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
