import { motion } from "framer-motion";
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
const Btn = styled(motion.button)`
  margin: 24px;
  width: 60px;
  height: 60px;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 100px;
  border: none;
  padding: 0;
`;
const Svg = styled.svg``;

const btnVariants = {
  hover: { scale: 1.2 },
  click: { scale: 0.9 }
};

function ComingSoon() {
  return (
    <Wrapper>
      <Title>Coming Soon</Title>
      <Btn variants={btnVariants} whileHover="hover" whileTap="click">
        <Svg
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
          />
        </Svg>
      </Btn>
    </Wrapper>
  );
}
export default ComingSoon;
