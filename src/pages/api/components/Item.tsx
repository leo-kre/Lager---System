import DropDown from "./DropDown";

export default function Item(props: ItemProps) {
      return (
            <div className="bg-background border-2 border-border rounded-md m-1 flex flex-col justify-between items-center px-1 py-0.5 sm:flex-row">
                  <h1 className="text-black w-24 text-3xl">{props.item.name}</h1>
                  <DropDown color={"orange"} text={props.item.hall}></DropDown>
                  <DropDown color={"purple"} text={`Ebene ${props.item.layer}-${props.item.index}`}></DropDown>
                  <h1 className="text-black w-14 text-right text-3xl">{props.item.count}</h1>
            </div>
      );
}

type ItemProps = {
      item: Item;
};

type Item = {
      name: string;
      hall: string;
      layer: string;
      index: number;
      container: string;
      count: number;
};
