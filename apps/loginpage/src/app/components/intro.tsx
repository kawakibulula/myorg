import styled from 'styled-components';
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
  return (
    <StyledIntro>
      <div style={{fontSize: '36px', fontWeight: 'bold'}}>
        Introduction our
      </div>
      <div style={{fontSize: '36px', fontWeight: 'bold'}}>
        envelope 2020
      </div>
      <p style={{
        color: 'white',
        fontSize: '12px'
      }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta.</p>
      <StyledWrapperButton>
        <button style={{
            width: '70%',
            alignItems: 'center',
            border: '1px solid white',
            backgroundColor: 'transparent',
            color: 'white',
            fontSize: '20px',
            height: '40px'
        }}>Read it <a href='/'><IoMdOpen/></a></button>
      </StyledWrapperButton>
    </StyledIntro>
  );
}

export default Intro;