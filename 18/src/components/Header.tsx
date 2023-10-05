import { Link, useMatch } from "react-router-dom";
import { styled } from 'styled-components';
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect } from 'react';

const Container = styled(motion.nav)`
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
  font-weight: 900;
  font-size: 18px;
  color: #fff;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: #ff0000;
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

const navVariants = {
  top: {
    background: "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0))",
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

function Header() {
  const popularMatch = useMatch("/");
  const comingMatch = useMatch("/coming-soon");
  const nowMatch = useMatch("/now-playing");
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <Container variants={navVariants} animate={navAnimation} initial={"top"}>
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