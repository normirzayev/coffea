import React, { useContext} from "react";
import "./main.css";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";

import { DemoData } from "../Data/Data";

import { Hamburger} from "../FastFood/FastFood";
import { Ichimliklar } from "../Ichiliklar/ichimliklar";
import { Shirinliklar } from "../Shirinliklar/shirinliklar";
import logo from "../../asets/logo/istockphoto-1205449806-170667a.jpg";
import DasturHaqida from "../dasturHaqida";
import hotdook from "../../asets/icons/burger.png";
import ichimlik from "../../asets/icons/softdrinks.png";
import shirinlik from "../../asets/icons/cake.png";
import dasturimg from "../../asets/icons/icons8-info2.svg";


export function Main() {
  const [hamburgerBaza, setHamburgerBaza] = useContext(DemoData);
  let s = 0, i = 0;

  function opshixisob(param){
    return param.map((e)=>
    s = s + e.narxi * e.soni
    )
  }

  function Xisob(param) {
    return param.map((e) => {
      

      // console.log(S);
      
      return (
        <div key={e.id} id="HisobStyle">
          <p>{e.soni === 0 ? "" : ++i }</p>
          <p>{e.soni === 0 ? "" : e.nomi }</p>
          <p>{e.soni === 0 ? "" : e.narxi * e.soni}</p>
          <p className="opshisuma">{s=s+e.narxi*e.soni}</p>
        </div>
      );
    });
  }

  return (

    <Router>
      <div className="wrapper">
        <div className="left_section">
          <div className="left_top">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <NavLink activeclassname="active" className="tanlash_tugma" to="">
              <img src={hotdook} alt="" /> Hamburger
            </NavLink>
            <NavLink
              activeclassname="active"
              className="tanlash_tugma"
              to="ichimliklar"
            >
              <img src={ichimlik} alt="" />
              ichimliklar
            </NavLink>
            <NavLink
              activeclassname="active"
              className="tanlash_tugma"
              to="shirinliklar"
            >
              <img src={shirinlik} alt="" />
              shirinliklar
            </NavLink>
          </div>
          <NavLink
            activeclassname="active"
            className="tanlash_tugma about"
            to="dasturxaqida"
          >
            <img src={dasturimg} alt="" />
            dastur-xaqida
          </NavLink>
        </div>
        <div className="right_section">
          <div className="rezultat">
            <Routes>
              <Route exact path="" element={<Hamburger />} />
              <Route path="/ichimliklar" element={<Ichimliklar />} />
              <Route path="/shirinliklar" element={<Shirinliklar />} />
              <Route path="/dasturxaqida" element={<DasturHaqida />} />
            </Routes>
          </div>
          <div className="royxat">
            <div className="xisoblash">{Xisob(hamburgerBaza)}</div>
            <div className="suma">
              <p>
                zakas nomer: <span>60</span>
              </p>
              <span>
                xisob: <span id="narx">{s}</span> so'm
              </span>
            </div>
            <div className="knopka">
              <button className="delete">
                delete
              </button>
              <button className="zakaz">zakas</button>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
