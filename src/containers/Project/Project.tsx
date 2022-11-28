import React, {useState} from 'react';
import './Project.css';
import {Link, useNavigate, Outlet} from "react-router-dom";
import work from '../../assets/work.svg';
import {projects} from "../../types";


interface Props {
  projects: projects[];
  getInfoProject: (info: projects) => void;
}


const Project:React.FC<Props> = ({projects, getInfoProject}) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const openModal = (id: number) => {
    setModal(true);
    navigate('/InfoProject');
    const index = projects.findIndex(d => d.id === id);

    getInfoProject({
      ...projects[index]
    })
  }

  const closeModal = () => {
    setModal(false);
    navigate('/project');
  }


  const classList = ['modal'];
  if (modal) {
    classList.push('active');
  }

  return (
    <div className='projectBlock'>
      <div className="container projectSection">
        {projects.map(item => (
          <Link to={'continue'} onClick={() => openModal(item.id)} key={item.id} className="cardProject">
            <div className="cardProject_image">
              <img src={work} alt='card'/>
            </div>
            <div className="cardProject_title">
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={classList.join(' ')}>
        <Outlet/>
        <button className='close' onClick={closeModal}></button>
      </div>
    </div>
  );
};

export default Project;