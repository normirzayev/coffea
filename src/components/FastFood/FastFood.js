import React, { useContext } from "react";
import "./FastFood.css";
import { DemoData } from "../Data/Data";

export function Hamburger() {
  const [hamburgerBaza, setHamburgerBaza] = useContext(DemoData);

  function Hamburger(param) {
    return param.map((item) => {
      return (
        <div key={item.id}>
          <div className="menyular ">
            <div className="narxi">
              Narxi:
              {item.soni === 0 ? item.narxi : item.narxi * item.soni}
              <div className="soni">
                <p>{item.nomi}</p>
              </div>
              <div className="soni">soni:{item.soni}</div>
              <div>
                {item.narxi}
              </div>
            </div>
            <img src={item.img} alt="" />

            <div className="plus_minus">
              <button onClick={() => hendelDecrement(item.id)}>-</button>
              <button onClick={() => hendelIecrement(item.id)}>+</button>
            </div>
          </div>
        </div>
      );
    });
  }

  const hendelDecrement = (card_id) => {
    setHamburgerBaza(
      hamburgerBaza.map((item) =>
        card_id === item.id
          ? { ...item, soni: item.soni - (item.soni > 0 ? 1 : 0) }
          : item
      )
    );
  };
  const hendelIecrement = (card_id) => {
    setHamburgerBaza(
      hamburgerBaza.map((item) =>
        card_id === item.id ? { ...item, soni: item.soni + 1 } : item
      )
    );
  };

  return <div className="contenir">{Hamburger(hamburgerBaza)}</div>;
}
