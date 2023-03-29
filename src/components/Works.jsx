import React from 'react'
import styled from 'styled-components';

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
   height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1250px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  /* color: green; */
  -webkit-text-stroke: 1px white;
  position: relative;
  transition: 0.5s linear both;

  ::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #c03da4;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    ::after{
      animation: move 0.5s linear both;

      @keyframes move {
       to{
        width: 100%;
       } 
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

export const Works = () => {
  return (
    <Section>
      <Container>
            <Left>
                <List>
                  {data.map((item) => (
                    <ListItem key={item} text={item}>{item}</ListItem>
                  ))}
                </List>
            </Left>
            <Right>
                
            </Right>
        </Container>
    </Section>
  )
}
