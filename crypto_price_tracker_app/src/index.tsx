import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, SignIn, Chart, Dapp } from './components';
import reportWebVitals from './reportWebVitals';
import './styles.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme/theme'
import 'firebase/auth'
import { firebaseConfig } from './firebaseConfig';
import { FirebaseAppProvider } from 'reactfire';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route path='/' element={<Home title={'BlockChain'}/>}/>
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/signin' element={<SignIn/>} />
              <Route path='/Chart' element={<Chart/>} />
              <Route path='/Dapp' element={<Dapp/>} />
            </Routes>
          </Router>
      </ThemeProvider>
    </FirebaseAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
