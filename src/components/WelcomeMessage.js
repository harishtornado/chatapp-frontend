import React, { useState, useEffect } from "react";
import styled from "styled-components";

const WelcomeMessage = () => {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <h3>Please select a chat to Start messaging!</h3>
    </Container>
  );
}

export default WelcomeMessage;

const Container = styled.div`
  background: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  span {
    color: #4e0eff;
  }
`;
