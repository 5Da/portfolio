import React from 'react'
import styled from 'styled-components';
import Map from './Map';

const Section = styled.div`
   height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  color: #979595;
  border-radius: 5px;
  border: none;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border-radius: 5px;
  border: none;
  color: #979595;
`;

const Button = styled.button`
  background-color: #c03da4;
  border: none;
  border-radius: 5px;
  /* height: 30px; */
  padding: 14px;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;

const Right = styled.div`
  flex: 1;
`;

export const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder='Name'/>
            <Input placeholder='Email'/>
            <TextArea placeholder='Write your message' rows={10}></TextArea>
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}
