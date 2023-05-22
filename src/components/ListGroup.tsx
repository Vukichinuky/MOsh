import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <div className="bg-balck">
            <h1 className="text-4xl p-4 font-medium">{heading}</h1>
            {items.length === 1 && <p>1 item found</p>}
            <ul className=" text-xl">
                {items.map((item, index) =>
                (<li
                    className={
                        selectedIndex === index
                            ? 'bg-blue-500 p-4'
                            : 'p-4 border border-gray-300'
                    }
                    key={item}
                    onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item);
                    }}>
                    {item}
                </li>))}
            </ul>
        </div>
    )


}

export default ListGroup;