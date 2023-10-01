import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import  styled from 'styled-components';


const Container = styled.div`
  margin: 40px auto;
  width: 480px;
  display: grid;
  gap: 20px;
  grid-template-columns: 210px 10px 210px;
  justify-items: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 210px;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  font-size: 80px;
  font-weight: 900;
  color:#a1cbdd;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const TextBox = styled.div`
  width: 210px;
  display: grid;
  gap: 10px;
`;
const Text = styled.span`
  font-size: 40px;
  font-weight: 900;
  color: #fff;
`;
const Count = styled.span`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
`;
const Svg = styled.svg`
  width: 200px;
  color: #fff;
  border-radius: 100px;
  text-align: center;
  padding: 30px;
`;
const Btn = styled(motion.button)`
  margin-top: 40px;
  width: 200px;
  height: 200px;
  color: #fff;
  background-color: rgba(255,255,255,0.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 100px;
  border: none;
`;

const boxVariants = {
  hover: { scale: 1.2, },
  click: { scale: 0.6, },
};

function Timer() {
  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const startStopwatch = () => {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setRunning(true);
    } else {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };
  let timeCount = (25*60) - Math.floor((time / 1000) % 60);
  let min = ("0"+Math.floor(timeCount / 60)).slice(-2);
  let sec = ("0"+Math.floor(timeCount % 60)).slice(-2);
  return (
    <div>
      <Container>
        <Box >{min}</Box>
        <Text>:</Text>
        <Box >{sec}</Box>
      </Container>
      <Btn
        variants={boxVariants}
        whileHover="hover"
        whileTap="click"
        onClick={startStopwatch}
      >
        {running ?
          <Svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
          </Svg>: 
          <Svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </Svg>
        }        
      </Btn>
      <Container>
        <TextBox>
          <Count>0 / 4</Count>
          <Text>ROUND</Text>
        </TextBox>
        <TextBox />
        <TextBox>
          <Count>0 / 12</Count>
          <Text>GOAL</Text>
        </TextBox>
      </Container>
      
    </div>


  )
}

export default Timer;