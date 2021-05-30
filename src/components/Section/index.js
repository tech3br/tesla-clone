import React from "react";
import * as S from "./styles";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <S.Wrap bgImage={backgroundImg}>
      <S.ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </S.ItemText>

      <S.Buttons>
        <S.ButtonGroup>
          <S.LeftButton>{leftBtnText}</S.LeftButton>
          {rightBtnText && <S.RightButton>{rightBtnText}</S.RightButton>}
        </S.ButtonGroup>
        <S.DownArrow src="/images/down-arrow.svg" />
      </S.Buttons>
    </S.Wrap>
  );
}

export default Section;
