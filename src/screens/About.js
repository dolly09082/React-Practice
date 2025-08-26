//Boilerplate code;
import React from "react" //javascript ko jo bhi btana hota h ki react use kr rhe h sabse phle import file ka use krte h
                                          // react k use s hi sare features aate h // Hooks,stateless App
import Title from"../components/Title";
import UnorderedList from"../components/UnorderedList";

function About() {
   // return <h1>This is About screen !</h1> // its not print bcz main file is app.js so we give route in app.js make import file and 
          return(
            <div>
           <Title 
           title="Node JS Guides"     // ✅ changed Name → title (safe prop name)
           collageName={"Amity"}      // ✅ fixed CollageName → collageName
           schoolName={"DPS"}         // ✅ fixed SchoolName → schoolName
           rollNo={"1"} 
           contactNumber={"6386473162"}  // ✅ fixed ContactNo → contactNumber
          />  
           {/*<UnorderedList/>*/}
          {/*  <Title title="General"/>
           <Title title="Node JS Core Concepts"/> */}
           </div>   
           );                         // return About

}
export default About;

//Manufacturing  Firm - Screens

// Title
// UL -Unordered List
// Card

//Reusability -- Props Ka use krenge  
