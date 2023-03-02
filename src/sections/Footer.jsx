import React from 'react';

export default function Footer() {
  return (
   <>
   
      <div className="footer flex-container" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div>
            <h5 className='text-center' >Follow Me On</h5>
        </div>
        <div className="social_icon text-center">
          <a href="https://github.com/shubham2698" target="_blank"><img src="/images/github.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/shubham-joshi-37b4b21b3/" target="_blank"><img src="/images/linkedin.png" alt="" /></a>
          <a href="https://www.kaggle.com/shubham2698" target="_blank"><img src="/images/kaggle.png" alt="" /></a>
          <a href="https://www.instagram.com/reels/CoH5CNpgmYa/" target="_blank"><img src="/images/instagram.png" alt="" /></a>
          <a href="mailto:imailshubhamjoshi@gmail.com" target="_blank"><img src="/images/gmail.png" alt="" /></a>
        </div>
        {/* <div>
        <a href="https://drive.google.com/file/d/1inWE32Pa7RMSCeVCMgm3ftLFEIvYZ_f4/view?usp=share_link" target="_blank"><button className="glow-on-hover"  type="button">Download CV</button></a>
        </div> */}
      </div>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        © 2022 Copyright: Shubham Joshi
        <a className='text-dark' href='#'>
          
        </a>
      </div>
   </>
  );
}