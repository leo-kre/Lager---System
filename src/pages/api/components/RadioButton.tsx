export default function RadioButton(props: RadioButtonProps) {
      let styling: string;

      if (props.text != props.currentSelectedButton) {
            styling = "border-2 border-gray";
      } else {
            styling = "border-4 border-blue";
      }

      return (
            <div className="flex items-center transition duration-75">
                  <div
                        className={"bg-transparent rounded-full h-5 w-5 transition duration-75 " + styling}
                        onClick={() => {
                              if (props.text != props.currentSelectedButton) {
                                    props.action(props.text);
                              }
                        }}
                  ></div>
                  <h1 className="text-black text-xl ml-2">{props.text}</h1>
            </div>
      );
}

type RadioButtonProps = {
      text: string;
      action: Function;
      currentSelectedButton: string;
};
