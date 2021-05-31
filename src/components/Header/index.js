import React, { useState } from "react";
import * as S from "./styles";
import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <S.Container>
      <a href="/">
        <img src="/images/logo.svg" alt="Logo in the header" />
      </a>

      <S.Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="/">
              {car}
            </a>
          ))}
      </S.Menu>

      <S.RightMenu>
        <a href="/">Shop</a>
        <a href="/">Tesla Account</a>
        <S.CustomMenu onClick={() => setBurgerStatus(true)} />
      </S.RightMenu>

      <S.BurgerNav show={burgerStatus}>
        <S.CloseWrapper>
          <S.CustomClose onClick={() => setBurgerStatus(false)} />
        </S.CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="/">{car}</a>
            </li>
          ))}
        <li>
          <a href="/">Existing Inventory</a>
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">Trade-in</a>
        </li>
        <li>
          <a href="/">Cybertruck</a>
        </li>
        <li>
          <a href="/">Roadaster</a>
        </li>
      </S.BurgerNav>
    </S.Container>
  );
}

export default Header;
