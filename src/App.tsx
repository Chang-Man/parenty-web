import React, { useEffect, useState } from 'react';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import Apply from './components/Apply/Apply';
import TopNavigator from './components/TopNavigator/TopNavigator';
import ReactGa from 'react-ga';

const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }: any) => {
  const isTablet = useMediaQuery({ maxWidth: 991 });
  return isTablet ? children : null;
};

function App() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    ReactGa.initialize('G-B49BR8VS2V');
    ReactGa.set({ page: window.location.pathname });
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='App'>
      <Desktop>모바일로 접속해주세요!</Desktop>
      <Mobile>
        <div>
          <TopNavigator active={active} setActive={setActive} />
          <Routes>
            <Route path='/' element={<Main setActive={setActive} />} />
            <Route path='/apply' element={<Apply />} />
          </Routes>
        </div>
      </Mobile>
    </div>
  );
}

export default App;
