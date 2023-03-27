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
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
   
`;

const Right = styled.div`

`;

export const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
            <Left></Left>
            <Right></Right>
        </Container>
    </Section>
  )
}