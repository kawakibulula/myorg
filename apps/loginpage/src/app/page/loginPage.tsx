import styled from 'styled-components';
import Intro from '../components/intro';
import LoginForm from '../components/formLogin';

const StyledWrapperBrand = styled.div`
  padding: 1rem 2rem;
  position: absolute;
  top: 0;
`;
const StyledLoginPage = styled.div`
  height: 100vh;
  display: flex;
`;

const StyledLoginItem = styled.div`
  padding: 0 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledLoginItemLeft = styled(StyledLoginItem)`
  position: relative;
  display: none;
  background-color: #2b6cb0;
  @media (min-width: 1024px) {
    display: flex;
  }
  div {
    width: 100%;
  }
`;
const StyledLoginItemRight = styled(StyledLoginItem)`
  background-color: #f7fafc;
  div {
    width: 100%;
  }
`;
const StyledWrapperHeading = styled.div`
  margin: 1rem 0;
`;
export function LoginPage() {
  return (
    <StyledLoginPage>
      <StyledLoginItemLeft>
        <StyledWrapperBrand>
          <h2
            style={{
              color: 'white',
              left: '4%',
              position: 'relative',
            }}
          >
            Hello
          </h2>
        </StyledWrapperBrand>
        <div>
          <Intro />
        </div>
      </StyledLoginItemLeft>
      <StyledLoginItemRight>
        <div>
          <StyledWrapperHeading>
            <h1 style={{
              color: 'blue'
            }}>Welcome back</h1>
            <p style={{
              color: 'gray',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>Sign in to continue</p>
          </StyledWrapperHeading>
          <StyledWrapperHeading>
            <LoginForm />
          </StyledWrapperHeading>
        </div>
      </StyledLoginItemRight>
    </StyledLoginPage>
  );
}

export default LoginPage;
