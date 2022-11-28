import React from 'react';
import './Skills.css';

const CARD = [
  {id: 1, icon: 'JS',},
  {id: 2, icon: 'React'},
  {id: 3, icon: 'HTML&CSS'},
];

const Skills = () => {
  return (
    <div className='blockSkills'>
      <div className="boxes">
        {CARD.map(item => (
          <div key={item.id} className="card">
            <div className="content">
              <div className="icon">{item.icon}</div>
              <div className="progress">
                <svg>
                  <circle className="bg" cx="57" cy="57" r="52"/>
                  <circle className="meter-1" cx="57" cy="57" r="52"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;