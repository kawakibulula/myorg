import { useState } from 'react';

export interface UseLoginType {
  email: string;
  password: string;
  submitEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  login: () => void;
}

export function useLogin(): UseLoginType {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const submitPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const login =  () => {
    try {
      setEmail(email)
      setPassword(password)
      console.log(email, password)
    } catch(error) {
      console.error(error);
    }
  };
  return { email, submitEmail, password, submitPassword, login };
}

export default useLogin;