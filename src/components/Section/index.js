import React from "react";
import * as S from "./styles";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <S.Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <S.ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </S.ItemText>
      </Fade>
      <S.Buttons>
        <Fade bottom>
          <S.ButtonGroup>
            <S.LeftButton>{leftBtnText}</S.LeftButton>
            {rightBtnText && <S.RightButton>{rightBtnText}</S.RightButton>}
          </S.ButtonGroup>
        </Fade>
        <S.DownArrow src="/images/down-arrow.svg" />
      </S.Buttons>
    </S.Wrap>
  );
}

export default Section;
