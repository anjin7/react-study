import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgcolor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`

function App() {
  return (
    <Father>
      <Box bgcolor="teal" />
      <Circle bgcolor="tomato" />
    </Father>
  );
}

export default App;