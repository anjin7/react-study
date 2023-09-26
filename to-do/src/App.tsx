import { useForm } from "react-hook-form";
import { toGoState } from "./atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import CreateToGo from './Components/CreateToGo';
import ToGoList from './Components/ToGoList';

export default function App() {

  return (
    <div>
      <ToGoList />
    </div>
  );
}
