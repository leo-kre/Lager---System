import { useState } from "react";

export default function SearchBar(props: SearchBarProps) {
      const [value, setValue] = useState("");

      props.action(value);

      return (
            <div className="bg-card w-fit rounded-xl border border-border flex items-center justify-center ml-2 lg:ml-0">
                  <input
                        placeholder="Suchen"
                        className="max-w-[80vw] p-1 text-3xl text-left bg-transparent text-white select-none focus:outline-none placeholder-text_2"
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
