import React from 'react'
import styled from 'styled-components'
import { Navbar } from './Navbar';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    /* width: 98%; */
    width: 1250px;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    /* background-color: antiquewhite; */
    /* gap: 200px; */
    `;

const Left = styled.div`
    /* background-color: aliceblue; */
    display: flex;
    flex: 2;
    gap: 20px;
    /* gap: 20px; */
    flex-direction: column;
    justify-content: center;
    /* left: 2%; */
    `;

const Title = styled.h1`
    font-size: 74px;
`;

const WhatWeDo = styled.div`
      display: flex;
      align-items: center;
      gap: 10px;
      `;

const Line = styled.img`
      /* overflow: hidden; */
      height: 5px;
      width: 20px;
      /* background-color: aquamarine; */
`;

const Subtitle = styled.h2`
      color: #c03da4;
`;

const Desc = styled.p`
      font-size: 24px;
      color: lightgray;
`;

const Button = styled.button`
   background-color: #c03da4;
   color: white;
   font-weight: 500;
   width: 100px;
   padding: 10px;
   border: none;
   border-radius: 5px;
   cursor: pointer;
   `;


const Right = styled.div`
    position: relative;
    flex: 3;
    /* background-color: azure; */
    /* justify-content: space-between; */
    gap: 20px;
    `;

    const Img = styled.img`
        width: 500px;
        height: 600px;
        object-fit: contain;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        animation: animate 2s infinite ease alternate;

        @keyframes animate {
            to{
                transform: translateY(20px);
            }    
        }
    `;

export const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
            <Left>
                <Title>Think, Make, Solve</Title>
                <WhatWeDo>
                    <Line src="./img/line.png"/>
                    <Subtitle>What we Do</Subtitle>
                </WhatWeDo>
                <Desc>we enjoy sreating delightful, human-centered digital experience</Desc>
                <Button>Learn More</Button>
            </Left>
            <Right>
                <Img src="./img/moon.png"/>
            </Right>
        </Container>
    </Section>
  )
}
