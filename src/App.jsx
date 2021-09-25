import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import LoginButton from './components/HoverButtons/LoginButton'
import TipButton from './components/HoverButtons/TipButton'
import Login from './components/Login/Login'
import ComingUp from './components/ResultsForm/ComingUp/ComingUp'
import Recents from './components/ResultsForm/Recents/Recents'
import Result from './components/ResultsForm/Result/Result'
import SearchResults from './components/ResultsForm/SearchResults/SearchResults'
import SearchBox from './components/SearchBox/SearchBox'
import TipBox from './components/TipBox/TipBox'

import {  RecoilRoot,  atom,  selector,  useRecoilState,  useRecoilValue, useSetRecoilState} from 'recoil';

import { Button } from '@material-ui/core'



function App() {

  

  return (
    <RecoilRoot>
    <div className="App">
      <header className="App-header">
        <p>Welcome!  Work in Progress.</p>
        <Button variant="contained" color="primary" href="https://material-ui.com">Made with Material UI</Button>

        <p>Components:</p>

        <div className="Components">
          <LoginButton></LoginButton>
          <br></br>

          <TipButton></TipButton>
          <br></br>
          
          <Login></Login>
          <br></br>
          
          <ComingUp></ComingUp>
          <br></br>
          
          <Recents></Recents>
          <br></br>
          
          <Result></Result>
          <br></br>
          
          <SearchResults></SearchResults>
          <br></br>
          
          <SearchBox></SearchBox>
          <br></br>
          
          <TipBox></TipBox>
        </div>
      </header>
    </div>
    </RecoilRoot>
  );
}

export default App
