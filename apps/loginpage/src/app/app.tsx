// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { ContextProvider } from './context/context';
import LoginPage from './page/loginPage';
export function App() {
  return (
    <ContextProvider>
      <LoginPage/>
    </ContextProvider>
    
  );
}

export default App;
