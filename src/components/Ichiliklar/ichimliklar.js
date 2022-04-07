import React, { useState } from "react";
import pepsi from "../../asets/ichimliklar/171-1718746_pepsi-drink.jpg";

export function Ichimliklar() {
  const [ichimlikbaza, setIchimlikBaza] = useState([
    { id: 13, nomi: "fanta", narxi: 9000, soni: 0, img: pepsi },
    { id: 14, nomi: "fanta", narxi: 9000, soni: 0, img: pepsi },
    { id: 15, nomi: "fanta", narxi: 9000, soni: 0, img: pepsi },
    { id: 16, nomi: "fanta", narxi: 9000, soni: 0, img: pepsi },
    { id: 17, nomi: "fanta", narxi: 9000, soni: 0, img: pepsi },
    { id: 18, nomi: "fanta", narxi: 9000, soni: 0, img: pepsi },
    { id: 19, nomi: "fanta", narxi: 9000, soni: 0, img: pepsi },
    { id: 20, nomi: "fanta", narxi: 9000, soni: 0, img: pepsi },
    { id: 21, nomi: "fanta", narxi: 9000, soni: 0, img: pepsi },
  ]);

  function Ichimliklar(param) {
    return param.map((item) => {
      return (
        <div>
          <div className="menyular">
            <img src={item.img} alt="" />
            <div className="plus_minus">
              <button onClick={() => hendelDecrement(item.id)}>-</button>
              <div className="soni">{item.soni}</div>
              <button onClick={() => hendelIecrement(item.id)}>+</button>
            </div>
          </div>
        </div>
      );
    });
  }

  const hendelDecrement = (card_id) => {
    setIchimlikBaza(
      ichimlikbaza.map((item) =>
        card_id === item.id
          ? { ...item, soni: item.soni - (item.soni > 0 ? 1 : 0) }
          : item
      )
    );
  };

  const hendelIecrement = (card_id) => {
    setIchimlikBaza(
      ichimlikbaza.map((item) =>
        card_id === item.id ? { ...item, soni: item.soni + 1 } : item
      )
    );
  };

  return <div className="contenir">{Ichimliklar(ichimlikbaza)}</div>;
}
