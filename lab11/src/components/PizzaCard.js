import React, { useState } from "react";

export default function PizzaCard(props) {
    const [count, setCount] = useState(1);

    function increaseCount() {
        setCount(count + 1);
    }
    function decreaseCount() {
        setCount(count - 1);
    }
    function alertCurrentCount() {
        alert("Количество заказанного товара: " + count);
    }

    return (
        <div className="card">
            <img src={props.image} alt={props.title} />

            <h3 className="title">{props.title}</h3>

            <p className="description">{props.subtitle}</p>

            <select name="size" className="size_selector">
                <optgroup label="Диаметр" />
                <option label="Ø 33 см Тонкая" value="Ø 33 см Тонкая">Ø 33 см Тонкая</option>
                <option label="Ø 40 см Тонкая" value="Ø 40 см Тонкая">Ø 40 см Тонкая</option>
                <option label="Ø 37 см Пышная" value="Ø 37 см Пышная">Ø 37 см Пышная</option>
            </select>
            <br />

            <span className="price">{props.price * count}₽</span>

            <div className="count_box">
                <input type="button" value="-" className="decrease" onClick={decreaseCount} disabled={count <= 1}/>
                <input type="text" value={count} className="count" readOnly="readonly" />
                <input type="button" value="+" className="increase" onClick={increaseCount} />
                <input type="button" value="🛒" className="purchase" onClick={alertCurrentCount} />
            </div>

        </div>
    );
}