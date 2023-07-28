"use client";

import Item from "@/pages/api/components/Card";
import SearchBar from "@/pages/api/components/Searchbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
      const router = useRouter();

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
      let results: Array<any> = [];

      let resultCount = 0;

      list.forEach((item: Item) => {
            if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
                  results.push(<Item item={item}></Item>);
                  resultCount++;
            }
      });

      if (resultCount == 0) {
            content.push(<h1 className="text-center text-6xl w-full">No result</h1>);
      } else {
            content.push(<div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center">{results}</div>);
      }

      return (
            <main className="min-h-screen bg-background flex flex-col items-center">
                  <div className="flex justify-between m-5 w-[98%] items-center">
                        <SearchBar
                              action={(text: string) => {
                                    setSearchInput(text);
                              }}
                        ></SearchBar>

                        <Link className="h-10 w-10 rounded-full bg-blue hover:bg-darkBlue transition duration-100 ease-in-out flex justify-center items-center rotate-45 hover:rotate-90" href={"/addItem"}>
                              <div className="bg-white h-1 w-5 rounded-xl"></div>
                              <div className="bg-white h-1 w-5 rotate-90 absolute rounded-xl"></div>
                        </Link>
                  </div>
                  <div className="m-5 flex flex-col items-center gap-10 mt-8 ">{content}</div>
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
