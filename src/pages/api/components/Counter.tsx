"use client";
import { useState } from "react";

export default function Counter(props: CounterProps) {
      const [count, setCount] = useState(props.value);

      if (count < props.min) {
            setCount(props.min);
      }

      if (count > props.max) {
            setCount(props.max);
      }

      props.action(count);

      return (
            <div className="bg-card border border-border rounded-lg flex p-1 justify-center items-center gap-3 w-28">
                  <button
                        onClick={() => {
                              setCount(count - 1);
                        }}
                        className="w-5 h-5"
                  >
                        <div className="w-5 h-1 bg-red rounded-lg"></div>
                  </button>
                  <input
                        type="number"
                        className="w-7 text-center bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        value={count}
                        onInput={(obj) => {
                              const o: any = obj as any;
                              setCount(o.target.value);
                        }}
                  ></input>
                  <button
                        onClick={() => {
                              setCount(count + 1);
                        }}
                        className="flex justify-center items-center w-5 h-5"
                  >
                        <div className="w-5 h-1 bg-green rounded-lg"></div>
                        <div className="w-5 h-1 bg-green rounded-lg absolute rotate-90"></div>
                  </button>
            </div>
      );
}

type CounterProps = {
      value: number;
      max: number;
      min: number;
      action: Function;
};
