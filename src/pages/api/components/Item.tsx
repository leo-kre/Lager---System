import Image from "next/image";
import hallSVG from "../../../../public/hall.svg";
import layerSVG from "../../../../public/layer.svg";
import countSVG from "../../../../public/count.svg";
import containerSVG from "../../../../public/container.svg";

import editSVG from "../../../../public/edit.svg";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Item(props: ItemProps) {
      const router = useRouter();

      return (
            <div className="my-5 max-w-[80%]">
                  <div className="bg-white h-fit px-3 py-3 rounded-xl flex flex-col justify-center items-center">
                        <div className="flex justify-between w-full items-center">
                              <h1 className="text-black text-5xl font-semibold pb-2 w-full text-left">{props.item.name}</h1>
                              <Button
                                    src={editSVG}
                                    action={() => {
                                          router.replace("/itemEdit?uuid=" + props.item.uuid);
                                    }}
                                    uuid={props.item.uuid}
                              ></Button>
                        </div>

                        <div className="bg-white w-96 max-w-[99%] text-gray font-semibold text-2xl border-border border-2 rounded-md py-3 px-3 flex flex-col gap-1">
                              <div className="flex w-full justify-between gap-3 flex-col 0.5sm:flex-row">
                                    <div className="flex gap-1 items-center justify-left">
                                          <Image src={hallSVG} alt="hall icon" className="w-8 mr-1"></Image>
                                          <h1 className="text-black">Lagerhalle:</h1>
                                    </div>
                                    <h1>{props.item.hall}</h1>
                              </div>

                              <div className="flex w-full justify-between gap-3 flex-col 0.5sm:flex-row">
                                    <div className="flex gap-1 items-center justify-left">
                                          <Image src={layerSVG} alt="layer icon" className="w-8 mr-1"></Image>
                                          <h1 className="text-black">Ebene:</h1>
                                    </div>
                                    <h1>{props.item.layer + "-" + props.item.index}</h1>
                              </div>

                              <div className="flex w-full justify-between gap-3 flex-col 0.5sm:flex-row">
                                    <div className="flex gap-1 items-center justify-left">
                                          <Image src={countSVG} alt="count icon" className="w-8 mr-1"></Image>
                                          <h1 className="text-black">Anzahl:</h1>
                                    </div>
                                    <h1>{props.item.count}</h1>
                              </div>

                              <div className="flex w-full justify-between gap-3 flex-col 0.5sm:flex-row">
                                    <div className="flex gap-1 items-center justify-left">
                                          <Image src={containerSVG} alt="container icon" className="w-8 mr-1"></Image>
                                          <h1 className="text-black">Container:</h1>
                                    </div>
                                    <h1>{props.item.container}</h1>
                              </div>
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
      index: number;
      container: string;
      count: number;
};
