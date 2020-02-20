import React from 'react'


function Projects() {

  return (
      <div id="ScrollToProjects">
        <h1 className="projTitle">Projects</h1>
        <div className="TopDiv1" >
          <div className="MainDiv1">
            <div className="BabyDiv1">
              <h2> Weight-Lifting-Journal Back-End API</h2>
              <h4>Express | Knex | Sqlite | jsonwebtoken | bcryptjs | jest</h4>
              <p>For this project, I created a database using SQL, Express, knex migrations/seeds. Users have the ability
                to register or login. The passwords are encrypted and each session creates a token.
                There are end points for a full CRUD application requests. Each end point has restricted path
                unless a user is logged into the application. Jest testing was implemented throughout. </p>
              <a href="/">GitHub Repo</a>
            </div>
          </div>
          <div className="MainDiv1">
            <div className="BabyDiv1">
              <h2> Crud Application with Redux State Management</h2>
              <h4>React | Redux | Axios | Bootstrap</h4>
              <ul>
                <li>Created a fully functional CRUD application</li>
                <li>Each request is called by Axios for CRUD</li>
                <li>Redux is managing and logging each endpoint</li>
                <li>Client side routing for each component</li>
              </ul>
              <a href="/">GitHub Repo</a>
            </div>
          </div>

          <div className="MainDiv1">
            <div className="BabyDiv1">
              <h2> Dark-Mode</h2>
              <h4>React | Axios | Local Storage</h4>
              <ul>
                <li>Implemented the usage of React Hooks while creating components</li>
                <li>Created a custom hook to store data in local storage</li>
                <li>Created a dark-mode component to toggle between light/dark</li>
                <li>Axios calls are being made to receive data from a web API</li>
              </ul>
              <a href="/">GitHub Repo</a>
            </div>
          </div>

          <div className="MainDiv1">
            <div className="BabyDiv1">
              <h2> Crud Application with Redux State Management</h2>
              <h4>React | Redux | Axios | Bootstrap</h4>
              <ul>
                <li>Created a fully functional CRUD application</li>
                <li>Each request is called by Axios for CRUD</li>
                <li>Redux is managing and logging each endpoint</li>
                <li>Client side routing for each component</li>
              </ul>
              <a href="/">GitHub Repo</a>
            </div>
          </div>
           </div>
           <h2 className="projTitle"> GitHub Repos</h2>
          <div className="TopDiv4">
            <div className="MainDiv4">
              <div className="BabyDiv4">
                <p>Please take a look at my other various projects, code, and the rest of my repos on <a href="https://github.com/adamcpenman">GitHub</a></p>
              </div>
            </div>
          </div>

       
 </div>
   
  )
}

export default Projects
