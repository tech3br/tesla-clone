import React from "react";
import * as S from "./styles";

function Section() {
  return (
    <S.Wrap>
      <S.ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </S.ItemText>

      <S.ButtonGroup>

        <S.LeftButton>
          Custom Order
        </S.LeftButton>

        <S.RightButton>
          Existing Inventory
        </S.RightButton>

      </S.ButtonGroup>

    </S.Wrap>
  );
}

export default Section;
