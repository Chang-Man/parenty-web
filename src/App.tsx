import React from 'react';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Apply from './components/Apply/Apply';
import TopNavigator from './components/TopNavigator/TopNavigator';

const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }: any) => {
  const isTablet = useMediaQuery({ maxWidth: 991 });
  return isTablet ? children : null;
};

function App() {
  return (
    <div className='App'>
      <Desktop>Desktop</Desktop>
      <Mobile>
        <div>
          <TopNavigator />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/apply' element={<Apply />} />
          </Routes>
        </div>
      </Mobile>
    </div>
  );
}

export default App;
