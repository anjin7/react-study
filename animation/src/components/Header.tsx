import { Link } from "react-router-dom";
import { styled } from 'styled-components';

const Container = styled.header`
  padding: 20px;
  background-color: rgba(255,255,255,0.5);
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 20px;
`;
const Menu = styled.li`
  font-size: 20px;
  font-weight: 700;
`;


function Header() {
  return (
    <Container>
      <List>
        <Menu>
          <Link to={"/"}>Home</Link>
        </Menu>
        <Menu>
          <Link to={"/about"}>About</Link>
        </Menu>                  
      </List>      
    </Container>
  )
}

export default Header;