import { toGoState } from "../atoms";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import CreateToGo from "./CreateToGo";
import ToGo from "./ToGo";

const Container = styled.div`
  display: column;
  min-width: 400px;
  margin: 10px;
`;
const Title = styled.h2`
  font-weight: 700;
  font-size: 22px;
  color: white;
  margin: 20px;
`;

export default function ToGoList() {
  const toGos = useRecoilValue(toGoState);
  return (
    <Container>
      <Title>내가 가고싶은 나라들</Title>
      <CreateToGo />
      <ul>
        {toGos
          .filter((toGo) => toGo.category === "TO_GO")
          .map((toGo) => (
            <ToGo key={toGo.id} {...toGo} />
          ))}
      </ul>
      <hr />
      <Title>내가 가본 나라들</Title>
      <ul>
        {toGos
          .filter((toGo) => toGo.category === "BEEN")
          .map((toGo) => (
            <ToGo key={toGo.id} {...toGo} />
          ))}
      </ul>
      <hr />
      <Title>내가 좋아하는 나라들</Title>
      <ul>
        {toGos
          .filter((toGo) => toGo.category === "LIKE")
          .map((toGo) => (
            <ToGo key={toGo.id} {...toGo} />
          ))}
      </ul>
    </Container>
  );
}
