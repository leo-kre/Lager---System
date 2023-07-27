import Image from "next/image";

export default function Button(props: ButtonProps) {
      return (
            <Image
                  className="w-9 h-9 hover:bg-gray p-1 rounded-md transition duration-75"
                  src={props.src}
                  alt="button"
                  onClick={() => {
                        props.action();
                  }}
            ></Image>
      );
}

type ButtonProps = {
      src: HTMLImageElement;
      action: Function;
      uuid: string;
};
