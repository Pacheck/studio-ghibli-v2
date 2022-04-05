import { GlobalStyle } from './global/style/global-style';
import MyRoutes from './routes';

export function App() {
  return <>
    <MyRoutes />
    <GlobalStyle />
  </>
}