import React, { useState } from "react";
import perojni from "../../asets/shrinliklar/perojni.jpg";

export function Shirinliklar() {
  const [shirinBaza, setShirinBaza] = useState([
    { id: 22, nomi: "Hootdoc", narxi: 6000, soni: 0, img: perojni },
    { id: 23, nomi: "Donar", narxi: 12000, soni: 0, img: perojni },
    { id: 24, nomi: "Lavash", narxi: 16000, soni: 0, img: perojni },
    { id: 25, nomi: "Hamburger", narxi: 10000, soni: 0, img: perojni },
    { id: 26, nomi: "Donar", narxi: 12000, soni: 0, img: perojni },
    { id: 27, nomi: "Lavash", narxi: 16000, soni: 0, img: perojni },
    { id: 28, nomi: "Hamburger", narxi: 10000, soni: 0, img: perojni },
    { id: 29, nomi: "Hamburger", narxi: 10000, soni: 0, img: perojni },
  ]);

  function Shirinliklar(param) {
    return param.map((item) => {
      return (
        <div>
          <div className="menyular ">
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
    setShirinBaza(
      shirinBaza.map((item) =>
        card_id === item.id
          ? { ...item, soni: item.soni - (item.soni > 0 ? 1 : 0) }
          : item
      )
    );
  };
  const hendelIecrement = (card_id) => {
    setShirinBaza(
      shirinBaza.map((item) =>
        card_id === item.id ? { ...item, soni: item.soni + 1 } : item
      )
    );
  };

  return <div className="contenir">{Shirinliklar(shirinBaza)}</div>;
}
