import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { IToGo, toGoState } from "../atoms";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: column;
  justify-content: center;
  padding-bottom: 10px;
  input {
    font-size: 16px;
    border: 0;
    background-color: white;
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin: 0 auto;
  }
  button {
    font-size: 16px;
    border: 0;
    background-color: #999;
    width: 80%;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin: 10px auto;
  }
`;

interface IForm {
  toGo: string;
}

function CreateToGo() {
  const setToGos = useSetRecoilState(toGoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const toGos: IToGo[] = [];
  const saveToGo = ({ toGo }: IForm) =>
    localStorage.setItem(toGo, JSON.stringify(toGos));
  const onValid = ({ toGo }: IForm) => {
    setToGos((oldToGos) => [
      { text: toGo, id: Date.now(), category: "TO_GO" },
      ...oldToGos
    ]);
    setValue("toGo", "");
    saveToGo({ toGo });

    const savedToGos = localStorage.getItem(toGo);
    if (savedToGos !== null) {
      const parsedToGos = JSON.parse(savedToGos);
      toGo = parsedToGos;
      parsedToGos.forEach(setToGos);
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toGo", {
            required: "Where you want to Go"
          })}
          type="text"
          placeholder="나라 이름"
          required
        />
        <button type="submit">가자!</button>
      </Form>
    </div>
  );
}

export default CreateToGo;
