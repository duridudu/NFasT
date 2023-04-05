import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import FloatingCards from "./FloatingCards";
import { mainAction } from "../../redux/actions/mainAction";
import { getSequence } from "../../storage/Cookie";

const FloatingAnimation = keyframes`
0% {
  transform: translateY(0%);	
}
50% {
  transform: translateY(6%);	
}	
100% {
  transform: translateY(0%);
}	
`;

const Wrapper = styled.div``;

const Floating = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Cards = styled.div`
  width: 50%;
  height: 100vh;
  display: ${(props) => props.isDisplay};
`;

const Btn = styled.button`
  background-color: #5b5299;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50px;
  position: fixed;
  bottom: 60px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${FloatingAnimation} 2s linear infinite;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black */
  display: ${(props) => props.isDisplay};
`;

function FloatingBtn() {
  const [floating, setFloating] = useState("none");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (floating === "none") {
      dispatch(mainAction.getFloatingNfast(getSequence()));
      setFloating("auto");
    } else {
      setFloating("none");
    }
  };

  const floatingCards =
    floating === "none" ? (
      <div>
        <div>예정된 nft 카드가</div>
        <div>존재하지 않습니다.</div>
      </div>
    ) : (
      <FloatingCards />
    );

  return (
    <Wrapper>
      <Overlay isDisplay={floating} />
      <p>뭔데뭔데</p>
      <Floating>
        <Cards isDisplay={floating}>{floatingCards}</Cards>
      </Floating>
      <Btn type="button" onClick={handleClick}>
        <ConfirmationNumberIcon fontSize="large" style={{ color: "white" }} />
      </Btn>
    </Wrapper>
  );
}

export default FloatingBtn;
