import { useState } from "react";

export default function SearchBar(props: SearchBarProps) {
      const [value, setValue] = useState("");
      props.action(value);
      return (
            <div className="bg-white w-fit rounded-xl border-2 border-gray">
                  <input
                        placeholder="Suchen"
                        className="text-2xl px-1 pl-2 bg-transparent text-black"
                        onInput={(obj) => {
                              let o: any = obj as any;
                              setValue(o.target.value);
                        }}
                  ></input>
            </div>
      );
}

type SearchBarProps = {
      action: Function;
};
