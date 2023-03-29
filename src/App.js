import './App.css';
import MainRouter from './components/MainRouter';
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/theme';
import React from 'react';

function App() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MainRouter/>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
