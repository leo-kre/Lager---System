export default function SearchBar(props: SearchBarProps) {
      return (
            <div className="bg-white w-fit rounded border-2 border-border">
                  <input
                        type="text"
                        placeholder="Suchen"
                        className="text-2xl px-1 bg-transparent text-black"
                        onInput={(obj) => {
                              let o: any = obj as any;
                              props.action(o.target.value);
                        }}
                  ></input>
            </div>
      );
}

type SearchBarProps = {
      action: Function;
};
