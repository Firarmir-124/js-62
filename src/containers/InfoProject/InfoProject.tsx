import React from 'react';
import './InfoProject.css';
import {projects} from "../../types";

import work from '../../assets/work.svg';

interface Props {
  infoProject: projects | null
}

const InfoProject:React.FC<Props> = ({infoProject}) => {
  return infoProject ? (
    <div className='infoProject'>
      <img src={work} alt=""/>
      <h1>{infoProject.name}</h1>
      <a href={infoProject.url} target='_BLANK'>Ссылка на git</a>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum excepturi maxime minima praesentium velit!
        Amet delectus dignissimos laudantium molestias nesciunt odio,
        quam quas ratione reprehenderit sit sunt temporibus vel voluptate.
      </p>
    </div>
  ) : (<span>Нет данных</span>)
};

export default InfoProject;