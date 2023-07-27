"use client";

import { useState } from "react";

export default function AddItem() {
      const [name, setName] = useState("name");
      const [hall, setHall] = useState("Dachboden");
      const [layer, setLayer] = useState("D-4");
      const [container, setContainer] = useState("Gitterkiste");
      const [count, setCount] = useState(12);

      const callApi = () => {
            const item: Item = {
                  uuid: "null",
                  name: name,
                  hall: hall,
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

      return (
            <main className="w-full min-h-screen bg-background">
                  <h1
                        onClick={() => {
                              callApi();
                        }}
                  >
                        create Item
                  </h1>
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
