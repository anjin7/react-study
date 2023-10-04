import styled from "styled-components";



const Wrapper = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  min-width: 480px;
  font-size: 36px;
  font-weight: 700;
  margin-top: 30px;
  color:#FFF;
`;

function Home() {

  return (
    <Wrapper>
      <Title>Home</Title>
    </Wrapper>
  );
};

export default Home;