import React, { useState, createContext } from "react";

import america from "../../asets/fastfood/images (5).jpg";
import canada from "../../asets/fastfood/images (2).jpg";
import ikkitalik from "../../asets/fastfood/Без названия (1).jpg";
import ortacha from "../../asets/fastfood/images (6).jpg";
import turkcha from "../../asets/fastfood/images (7).jpg";
import bonus from "../../asets/fastfood/images (8).jpg";
import sirli from "../../asets/fastfood/Без названия (2).jpg";
import sirli_ikkilik from "../../asets/fastfood/Без названия.jpg";

export const DemoData = createContext();

export const HamburgerData = ({ children }) => {
  const [hamburgerBaza, setHamburgerBaza] = useState([
    { id: 1, nomi: "america", narxi: 6000, soni: 0, img: america },
    { id: 2, nomi: "canada", narxi: 12000, soni: 0, img: canada },
    { id: 3, nomi: "ikkitalik", narxi: 16000, soni: 0, img: ikkitalik },
    { id: 4, nomi: "ortacha", narxi: 10000, soni: 0, img: ortacha },
    { id: 5, nomi: "turkcha", narxi: 12000, soni: 0, img: turkcha },
    { id: 6, nomi: "bonus", narxi: 16000, soni: 0, img: bonus },
    { id: 7, nomi: "sirli", narxi: 10000, soni: 0, img: sirli },
    { id: 8, nomi: "sirli_ikkilik", narxi: 10000, soni: 0, img: sirli_ikkilik },
  ]);

  // console.log(fastBaza[0].narxi * fastBaza[0].soni);

  return (
    <DemoData.Provider value={[hamburgerBaza, setHamburgerBaza]}>
      {children}
    </DemoData.Provider>
  );
};
