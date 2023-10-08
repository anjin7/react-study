import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;
const Title = styled.h1`
  font-size: 24px;
`;

function NowPlaying() {
  return (
    <Wrapper>
      <Title>Now Playing</Title>
    </Wrapper>
  );
}

export default NowPlaying;
