import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export default function Footer() {
  return (
   <>
        <div className="footer">
        <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <div className="footer-content">
          <h2>Shubham S Joshi</h2>  
          <small>This Website Created With React-JS</small>
          </div>
        </CDBBox>
        <CDBBox display="flex">
          
        <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="github" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="linkedin" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
          
        </CDBBox>
        <CDBBox>
          <a href="https://drive.google.com/file/d/1T8UeiFbiExUGQtfZCUC2b3wWTo73Du1y/view?usp=sharing"><button class="glow-on-hover" type="button" >Download CV </button></a>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
        </div>
   </>
  );
}