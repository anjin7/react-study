import styled from "styled-components";
import ToGoList from './Components/ToGoList';


const Wrapper = styled.div`
  display: flex;
  max-width: 600px;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

export default function App() {
  return (
    <Wrapper>
      <ToGoList />
    </Wrapper>
  );
}
