import Image from "next/image";
import layerSVG from "../../../../public/layer.svg";
import countSVG from "../../../../public/count.svg";
import containerSVG from "../../../../public/container.svg";

import editSVG from "../../../../public/edit.svg";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Item(props: ItemProps) {
      const router = useRouter();

      console.log(props.item);

      /*
                                    <Button
                                    src={editSVG}
                                    action={() => {
                                          router.replace("/itemEdit?uuid=" + props.item.uuid);
                                    }}
                                    uuid={props.item.uuid}
                              ></Button> */

      return (
            <div className="m-5 h-fit border border-border bg-card rounded-2xl flex flex-col">
                  <div className="flex justify-between items-center bg-background_light rounded-t-2xl p-2">
                        <h1 className="text-text_1 text-4xl md:text-5xl pb-2 w-full text-left">{props.item.name}</h1>
                        <div className="w-10 h-10">
                              <Button
                                    src={editSVG}
                                    action={() => {
                                          router.replace("/itemEdit?uuid=" + props.item.uuid);
                                    }}
                                    uuid={props.item.uuid}
                              ></Button>
                        </div>
                  </div>
                  <div className="m-3 ">
                        <div className="flex justify-between mb-2">
                              <div className="flex items-center">
                                    <Image src={layerSVG} alt="layer icon" className="w-8"></Image>
                                    <h2 className="text-2xl ml-2 text-text_2">{props.item.layer}</h2>
                              </div>

                              <div className="flex items-center">
                                    <Image src={countSVG} alt="count icon" className="w-8"></Image>
                                    <h2 className="text-2xl ml-2 text-text_2">{props.item.count + "x"}</h2>
                              </div>
                        </div>

                        <div className="flex">
                              <Image src={containerSVG} alt="container icon" className="w-8 h-8"></Image>
                              <h2 className="text-2xl ml-2 text-text_2">{props.item.container}</h2>
                        </div>
                  </div>
            </div>
      );
}

type ItemProps = {
      item: Item;
};

type Item = {
      uuid: string;
      name: string;
      hall: string;
      layer: string;
      container: string;
      count: number;
};
