"use client";

import { useState } from "react";

export default function DropDown(props: DropDownProps) {
      const [value, setValue] = useState(props.value);
      const [isOpen, setIsOpen] = useState(false);

      props.action(value);

      let list: Array<any> = [];
      let dropDown: Array<any> = [];

      let crossStyle: string = "";
      let lineStyle: string = "";

      if (isOpen) {
            props.options.forEach((option: string) => {
                  list.push(
                        <button
                              onClick={() => {
                                    setValue(option);
                                    setIsOpen(false);
                              }}
                              className="text-xl text-text_1"
                        >
                              {option}
                        </button>
                  );
            });

            dropDown.push(<div className="mt-2 w-full bg-card border border-border rounded-lg flex flex-col items-center">{list}</div>);
      } else {
            crossStyle = "rotate-90";
            lineStyle = "bg-border";
      }

      return (
            <div
                  className="w-fit"
                  onClick={() => {
                        setIsOpen(!isOpen);
                  }}
            >
                  <button className="bg-card border border-border rounded-lg px-2 w-fit flex justify-center items-center">
                        <h1 className="text-text_1 text-xl">{value}</h1>

                        <div className={"flex justify-center items-center w-5 h-5 ml-2 rotate-45 transition duration-75 " + crossStyle}>
                              <div className={"w-5 h-1 bg-red rounded-lg transition duration-75 " + lineStyle}></div>
                              <div className={"w-5 h-1 bg-red rounded-lg rotate-90 absolute transition duration-75 " + lineStyle}></div>
                        </div>
                  </button>

                  {dropDown}
            </div>
      );
}

type DropDownProps = {
      value: string;
      options: Array<string>;
      action: Function;
};
