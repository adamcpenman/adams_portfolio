import React from 'react';
import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <div id='ScrollToProjects'>
      <h1 className='projTitle'>Projects</h1>
      {/* <div className="TopDiv1">
        <Fade right cascade delay={300}>
          <div className="MainDiv1">
            <div className="BabyDiv1">
              <h2> Weight-Lifting-Journal Back-End API</h2>
              <h4>Express | Knex | Sqlite | jsonwebtoken | bcryptjs | jest</h4>
              <p>
                For this project, I created a database using SQL, Express, knex
                migrations/seeds. Users have the ability to register or login.
                The passwords are encrypted and each session creates a token.
                There are end points for a full CRUD application requests. Each
                end point has restricted path unless a user is logged into the
                application. Jest testing was implemented throughout.{" "}
              </p>
              <a href="https://github.com/weightlift-wept8/Back-End" target="_blank">GitHub Repo</a>
            </div>
          </div>
          <div className="MainDiv1">
            <div className="BabyDiv1">
              <h2>Redux State Management with Axios Calls</h2>
              <h4>React | Redux | Axios</h4>
              <p>
                Implemented Redux for state management. Created Get and Post
                requests through Axios. Rendered data to application 
                and the ability to post new data to server. 
              </p>
              <a href="https://github.com/adamcpenman/Sprint-Challenge-State-Management-Smurfs/tree/adam-penman" target="_blank">GitHub Repo</a>
            </div>
          </div>

          <div className="MainDiv1">
            <div className="BabyDiv1">
              <h2> Crud Application + Dark-Mode</h2>
              <h4>React | Custom Hooks | Local Storage | Bootstrap </h4>
              <p> Fully funcitonal CRUD application. Able to Create, Read, Update, 
                and Delete data. Implemented custom hook to store data in Local Storage. 
                Implemented the usage of React Hooks while creating components.
                Feature to toggle on and off Dark Mode.
              </p>
              <a href="https://github.com/adamcpenman/reactdarkmode" target="_blank">GitHub Repo</a>
            </div>
          </div>
          <div className="MainDiv1">
            <div className="BabyDiv1">
              <h2> Nasa Photo of the Day</h2>
              <h4>React | Axios | Styled-Components </h4>
            <p>Pulls data from NASA Api. Displays photo of the day. 
              Made pages fully responsive based on screen size. 
              Implemented minimal design using styled-components.
            </p>
            <a href="https://github.com/adamcpenman/nasa-photo-of-the-day" target="_blank">GitHub Repo</a>
            </div>
          </div>
        </Fade>
      </div>


      <h2 className="projTitle"> GitHub Repos</h2>
      <Fade right cascade delay={300}>
        <div className="TopDiv2">
          <div className="MainDiv2">
            <div className="BabyDiv2">
              <p>
                Please take a look at my other various projects, code, and the
                rest of my repos on
                <a href="https://github.com/adamcpenman" target="_blank">GitHub</a>
              </p>
            </div>
          </div>
        </div>
      </Fade> */}
    </div>
  );
}

export default Projects;
