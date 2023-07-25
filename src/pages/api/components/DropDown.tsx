export default function DropDown(props: DropDownProps) {
      console.log(props.color);

      return (
            <div className={`bg-${props.color} rounded-md p-0.5 w-[160px]`}>
                  <h1 className="text-3xl text-center">{props.text}</h1>
            </div>
      );
}

type DropDownProps = {
      text: string;
      color: string;
};
