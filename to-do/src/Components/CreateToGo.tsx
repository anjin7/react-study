import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toGoState } from "../atoms";
import styled from "styled-components";


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
  const setToDos = useSetRecoilState(toGoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toGo }: IForm) => {
    setToDos((oldToGos) => [
      { text: toGo, id: Date.now(), category: "TO_GO" },
      ...oldToGos,
    ]);
    setValue("toGo", "");
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toGo", {
            required: "Where you want to Go",
          })}
          type="text"
          placeholder="나라 이름"
        />
        <button>가자!</button>
      </Form>
    </Wrapper>    
  );
}

export default CreateToGo;