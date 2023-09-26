import React from "react";
import { useSetRecoilState } from "recoil";
import { IToGo, toGoState } from "../atoms";
import styled from "styled-components";

const Text = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin: 10px;
`;

function ToGo({ text, category, id }: IToGo) {
  const setToGos = useSetRecoilState(toGoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name }
    } = event;
    setToGos((oldToGos) => {
      const targetIndex = oldToGos.findIndex((toGo) => toGo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToGos.slice(0, targetIndex),
        newToDo,
        ...oldToGos.slice(targetIndex + 1)
      ];
    });
  };
  return (
    <li>
      <Text>{text}</Text>
      {category !== "TO_GO" && (
        <button name="TO_GO" onClick={onClick}>
          가고 싶어
        </button>
      )}
      {category !== "BEEN" && (
        <button name="BEEN" onClick={onClick}>
          이미 가봄
        </button>
      )}
      {category !== "LIKE" && (
        <button name="LIKE" onClick={onClick}>
          좋아
        </button>
      )}
    </li>
  );
}
export default ToGo;
