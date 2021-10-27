import React from 'react';
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar';
import MainContent from '../MainContent/MainContent';

import './Main.css'

// import { Container } from './styles';

function Main() {
  return (
    <>
      <Header />
      <div className="c-container">
        <SideBar />
        <MainContent />
      </div>
    </>
  )
}

export default Main;