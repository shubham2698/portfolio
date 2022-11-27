import React from 'react';

export default function Footer() {
  return (
   <>
   
      <div className="footer flex-container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div>
            <h5 className='text-center' >Follow Me On</h5>
        </div>
        <div className="social_icon text-center">
          <img src="/images/github.png" alt="" />
          <img src="/images/linkedin.png" alt="" />
          <img src="/images/kaggle.png" alt="" />
          <img src="/images/instagram.png" alt="" />
          <img src="/images/gmail.png" alt="" />
        </div>
        <div>
        <button class="glow-on-hover" type="button">Download CV</button>
        </div>
      </div>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        © 2022 Copyright: Shubham Joshi
        <a className='text-dark' href='#'>
          
        </a>
      </div>
   </>
  );
}