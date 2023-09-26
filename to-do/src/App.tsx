import { useForm } from "react-hook-form";
import { toGoState } from "./atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import CreateToGo from './Components/CreateToGo';

const Wrapper = styled.div`
  display: column;
  max-width: 480px;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;
const Title = styled.h2`
  font-weight: 700;
  color: white;
  margin: 20px;
`;

export default function App() {
  const [toGos, setToGos] = useRecoilState(toGoState);
  return (
    <Wrapper>
      <Title>내가 가고싶은 나라들</Title>
      {Object.keys(toGos).map((boardId) => (
            <CreateToGo toGos={toGos[boardId]} boardId={boardId} key={boardId} />
          ))}
      
    </Wrapper>
  );
}
