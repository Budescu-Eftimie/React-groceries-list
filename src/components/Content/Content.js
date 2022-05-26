import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted",
        },
        {
            id: 2,
            checked: false,
            item: "Item 2",
        },
        {
            id: 3,
            checked: false,
            item: "Item 3",
        },
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
        localStorage.setItem("shopingList", JSON.stringify(listItems));
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem("shopingList", JSON.stringify(listItems));
    };

    return (
        <main>
            {!items.length && (
                <p style={{ marginTop: "2rem" }}>Your List is empty</p>
            )}
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleCheck(item.id)}
                        />
                        <label
                            style={
                                item.checked
                                    ? { textDecoration: "line-through" }
                                    : null
                            }
                            onDoubleClick={() => handleCheck(item.id)}
                        >
                            {item.item}
                        </label>
                        <FaTrashAlt
                            onClick={() => handleDelete(item.id)}
                            role="button"
                            tabIndex="0"
                        />
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Content;
