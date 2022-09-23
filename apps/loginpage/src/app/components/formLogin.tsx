import styled from 'styled-components';
import { useContext } from 'react';
import { thecontext } from '../context/context';
const StyledFormLogin = styled.div`
  background-color: white;
  max-width: 70%;
  padding: 1.5rem;
  border: 1px solid white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;
const StyledFormControl = styled.div`
  margin-top: 10px;
  input {
    margin-left: 1px;
  }
`;
const StyledWrapperButton = styled.div`
  margin-top: 1rem;
  justify-content: space-between;
  div {
    display: inline;
    a {
      margin-left: 0.2rem;
    }
  }
  button {
    margin-top: 1rem;
  }
  }
`;

export function LoginForm() {
  const { login, submitEmail, submitPassword, email, password } =
    useContext(thecontext);
  return (
    <StyledFormLogin>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <StyledFormControl>
          <input type="text" placeholder='email' value={email} onChange={submitEmail} style={{
            height: '24px',
            width: '95%'
          }}></input>
        </StyledFormControl>
        <StyledFormControl>
          <input type="password" placeholder='password' value={password} onChange={submitPassword} style={{
            height: '24px',
            width: '95%'
          }}></input>
        </StyledFormControl>
        <StyledFormControl>
          <a href='/' style={{fontWeight: 'bold', fontSize: '14px'}}>Forgot password?</a>
        </StyledFormControl>
        <StyledWrapperButton>
          <div>
            <p>New user?</p>
            <a href='/'>Create account</a>
          </div>
           <button type="submit" style={{
            color: 'white',
            display: 'flex',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px',
            borderRadius: '4px',
            padding: '0.7rem 0.75rem',
            width: '20%',
            fontWeight: 'bold',
            marginRight: '10px',
            backgroundColor: 'blue'
           }}>Sign in</button>
        </StyledWrapperButton>
      </form>
    </StyledFormLogin>
  );
}

export default LoginForm;