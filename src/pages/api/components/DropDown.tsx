export default function DropDown(props: DropDownProps) {
      switch (props.color) {
            case "orange":
                  return (
                        <div className={`bg-orange rounded-md p-0.5 w-[160px]`}>
                              <h1 className="text-3xl text-center">{props.text}</h1>
                        </div>
                  );
            case "purple":
                  return (
                        <div className={`bg-purple rounded-md p-0.5 w-[160px]`}>
                              <h1 className="text-3xl text-center">{props.text}</h1>
                        </div>
                  );
            default:
                  return (
                        <div className={`bg-black rounded-md p-0.5 w-[160px]`}>
                              <h1 className="text-3xl text-center">{props.text}</h1>
                        </div>
                  );
      }
}

type DropDownProps = {
      text: string;
      color: string;
};
