import React from "react";
import styled from "styled-components";
import LoginButton from "./LogIn/LoginButton";
import image from "../assets/sign-in-image.jpg";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const SignIn = () => {
  console.log("taco");
  return (
    <Wrapper>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -700))}>
            <Title>BenchMates</Title>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator
            animation={batch(
              Fade(),
              Sticky(),
              MoveIn(0, 700),
              MoveOut(0, -700)
            )}
          >
            <SubText>Become ONE with the fantasy Gods.</SubText>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), Sticky(), MoveIn(0, 700))}>
            <LoginButton />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #0b223e 0%, transparent 100%) 0% 0%
      no-repeat padding-box,
    url(${image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0; */
`;

// const ImageWrapper = styled.div`
//   position: relative;
//   background-image: url(${image});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-attachment: fixed;
// `;

const Title = styled.h1`
  color: #fff;
  font-size: 9rem;
  font-family: var(--font-family);
`;

const SubText = styled.h1`
  font-size: 6rem;
  color: #fff;
  font-family: var(--font-family);
  width: 100vw;
  text-align: center;
`;

export default SignIn;
