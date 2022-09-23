import { useMemo, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import checkTime from '../lib/getTime';
import { IoMdOpen } from 'react-icons/io';

const StyledIntro = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  p {
    width: 50%;
    margin: 1rem auto;
  }
`;
const StyledWrapperButton = styled.span`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export function Intro() {
  const [loopText, setLoopText] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const [show, setShow] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const text = useMemo(() => {
    return ["Envelope 2020"];
  }, []);
  const time = 3000;
  const change = useCallback(() => {
    const i = loopText % text.length;
    const fullText = text[i];
    const updatedText = isChange
      ? fullText.substring(0, show.length - 1)
      : fullText.substring(0, show.length + 1);
    setShow(updatedText);
    if (isChange) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isChange && updatedText === fullText) {
      setIsChange(true);
      setDelta(time);
    } else if (isChange && updatedText === "") {
      setIsChange(false);
      setLoopText(loopText + 1);
      setDelta(500);
    }
  }, [text, isChange, show, time, loopText]);
  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, delta);
    return () => clearInterval(interval);
  }, [show, change, delta]);
  return (
    <StyledIntro>
      <div style={{fontSize: '36px', fontWeight: 'bold'}}>
        Introduction our
      </div>
      <div style={{fontSize: '36px', fontWeight: 'bold'}}>
        {show}
      </div>
      <p style={{
        color: 'white',
        fontSize: '12px'
      }}>Good {checkTime()} let's read our doc.</p>
      <StyledWrapperButton>
        <button style={{
            width: '70%',
            alignItems: 'center',
            border: '1px solid white',
            backgroundColor: 'transparent',
            color: 'white',
            fontSize: '20px',
            height: '40px'
        }}>Read<a href='/'><IoMdOpen/></a></button>
      </StyledWrapperButton>
    </StyledIntro>
  );
}

export default Intro;