import React, {useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import './App.css'
import Project from "../Project/Project";
import InfoProject from "../InfoProject/InfoProject";
import {projects} from "../../types";

const PROJECTS = [
  {id: 1, name: 'Work 1', url: 'https://github.com/Firarmir-124/js-61.git'},
  {id: 2, name: 'Work 2', url: 'https://github.com/Firarmir-124/js-60.git'},
  {id: 3, name: 'Work 3', url: 'https://github.com/Firarmir-124/js-59.git'},
  {id: 4, name: 'Work 4', url: 'https://github.com/Firarmir-124/js-57.git'},
  {id: 5, name: 'Work 5', url: 'https://github.com/Firarmir-124/control-work-7.git'},
  {id: 6, name: 'Work 6', url: 'https://github.com/Firarmir-124/js-55.git'},
]


function App() {
  const [infoProject, setInfoProject] = useState<projects | null>(null);

  const getInfoProject = (info: projects) => {
    setInfoProject(info)
  }

  return (
    <>
      <header className='header'>
        <div className="container header_menu">
          <a className='logo' href='#'>LOGO</a>
          <NavBar/>
        </div>
      </header>

      <main>
        <Routes>
          <Route path='/' element={(
            <Home/>
          )}/>
          <Route path='/Skills' element={(
            <Skills/>
          )}/>
          <Route path='/Contact' element={(
            <Contact/>
          )}/>
          <Route path='/Project' element={(
            <Project getInfoProject={getInfoProject} projects={PROJECTS}/>
          )}>
            <Route path='continue' element={(
              <InfoProject infoProject={infoProject} />
            )}/>
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
