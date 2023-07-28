"use client";

import { useState } from "react";

export default function InputField(props: InputFieldProps) {
      const [value, setValue] = useState("");

      props.action(value);

      return (
            <input
                  className="bg-card border border-border rounded-md pl-2 text-xl text-text_2 focus:outline-none"
                  placeholder={props.placeholder}
                  type={props.type}
                  onInput={(obj) => {
                        const o: any = obj as any;
                        setValue(o.target.value);
                  }}
            ></input>
      );
}

type InputFieldProps = {
      type: string;
      placeholder: string;
      action: Function;
};
