import styled from "styled-components";
import Timer from '../components/Timer';


const Wrapper = styled.div`
  width: 100vw;
  text-align: center;
`;
const Title = styled.h1`
  min-width: 480px;
  font-size: 36px;
  font-weight: 700;
  margin-top: 30px;
`;

function Home() {

  return (
    <Wrapper>
      <Title>Pomodoro</Title>
      <Timer />
    </Wrapper>
  );
};

export default Home;