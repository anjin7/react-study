import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

function NotFound() {
  return (
    <Container>
      <Title>404 NOT FOUND</Title>
    </Container>
  )
}

export default NotFound;