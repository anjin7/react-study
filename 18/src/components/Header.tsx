import { Link } from "react-router-dom";
import { styled } from 'styled-components';

const Container = styled.header`
  padding: 8px;
  background-color: rgba(255,255,255,0.5);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Menu = styled.li`
  margin: 4px 12px;
  font-size: 18px;
  font-weight: 700;
`;


function Header() {
  return (
    <Container>
      <List>
        <Menu>
          <Link to={"/"}>POPULAR</Link>
        </Menu>
        <Menu>
          <Link to={"/coming-soon"}>COMING SOON</Link>
        </Menu>  
        <Menu>
          <Link to={"/now-playing"}>NOW PLAYING</Link>
        </Menu>
      </List>      
    </Container>
  )
}

export default Header;