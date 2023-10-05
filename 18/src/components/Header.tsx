import { Link, useMatch } from "react-router-dom";
import { styled } from 'styled-components';
import { motion } from "framer-motion";

const Container = styled.header`
  padding: 16px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top:0;
  width: 100%;
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin: 4px 12px;
  font-size: 18px;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: #000;
  }
`;
const Circle = styled(motion.span)`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: #dd0000;
`;

function Header() {
  const popularMatch = useMatch("/");
  const comingMatch = useMatch("/coming-soon");
  const nowMatch = useMatch("/now-playing");
  return (
    <Container>
      <Items>
        <Item>
          <Link to={"/"}>
            POPULAR {popularMatch && <Circle layoutId="circle" />}
          </Link>
        </Item>
        <Item>
          <Link to={"/coming-soon"}>
            COMING SOON {comingMatch && <Circle layoutId="circle" />}
          </Link>
        </Item>  
        <Item>
          <Link to={"/now-playing"}>
            NOW PLAYING {nowMatch && <Circle layoutId="circle" />}
          </Link>
        </Item>
      </Items>      
    </Container>
  )
}

export default Header;