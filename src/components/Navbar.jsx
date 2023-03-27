import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
    `;

const Container = styled.div`
    display: flex;
    width: 1040px;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
`;

const Links = styled.div`
    display: flex;
    align-items : center;
    gap: 50px;
`;

const Icons = styled.div`
    display: flex;
    align-items : center;
    gap: 20px;
`;

const Logo = styled.img`
    width: 100px;
    height: 50px;
`;

const List = styled.ul`
    display: flex;
    gap: 25px;
    list-style: none;
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icon = styled.img`
    height: 20px;    
    color: white;
    width: 20px;
    cursor: pointer;
    /* background-color: transparent !important; */
    /* background-color: aliceblue; */
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #c03da4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="./img/logo.png"/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Studio</ListItem>
                    <ListItem>Works</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}
