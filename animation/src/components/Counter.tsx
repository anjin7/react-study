import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 40px auto;
  width: 500px;
  display: grid;
  gap: 80px;
  grid-template-columns: 210px 210px;
  justify-items: center;
  align-items: center;
`;
const TextBox = styled.div`
  width: 210px;
  display: grid;
  gap: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const Text = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: #fff;
`;
const Count = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
`;

function Counter() {
  const [roundCount, setRoundCount] = useState(0);
  const [goalCount, setGoalCount] = useState(0);
  return (
    <Container>
      <TextBox>
        <Count>{roundCount} / 4</Count>
        <Text>ROUND</Text>
      </TextBox>
      <TextBox>
        <Count>{goalCount} / 12</Count>
        <Text>GOAL</Text>
      </TextBox>
    </Container>
  );
}
export default Counter;
