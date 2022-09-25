import React, { Component,useEffect } from 'react'
import Aos from 'aos';
import SkillBar from "react-skillbars";

function TechnicalSkills() {
    useEffect(() => {
        Aos.init({duration:1500});
      }, [])

      const SKILLS6 = [
        {
          type: "CSS/HTML",
          level: 100,
          color: { bar: "#3498db", title: { text: "#fff", background: "#2980b9" } },
          
        },
        {
          type: "Javascript",
          level: 85,
          color: { bar: "#4288d0", title: { text: "#fff", background: "#124e8c" } }
        },
        {
          type: "React",
          level: 75,
          color: { bar: "#2c3e50", title: { text: "#fff", background: "#2c3e50" } }
        },
        {
          type: "Kotlin",
          level: 50,
          color: { bar: "#5a68a5", title: { text: "#fff", background: "#46465e" } }
        },
        {
          type: "Flutter",
          level: 35,
          color: { bar: "#525252", title: { text: "#fff", background: "#333333" } }
        },
        {
          type: "Dart",
          level: 25,
          color: { bar: "black", title: { text: "#111", background: "#fff" } }
        },
        {
          type: "NoSQL",
          level: 10,
          color: { bar: "#2ecc71", title: { text: "#fff", background: "#27ae60" } }
        }
      ];
    return (
      <>
      
      </>
    )
  }


export default TechnicalSkills