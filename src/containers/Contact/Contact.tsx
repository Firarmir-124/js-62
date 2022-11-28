import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contactBlock'>

      <div className="formBlock">
        <form>
          <div className="row">
            <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required/>
          </div>

          <div className="row">
            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required/>
          </div>

          <div className="row">
            <textarea  placeholder="MESSAGE" name="message" required></textarea>
          </div>

          <button className='btn'>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;