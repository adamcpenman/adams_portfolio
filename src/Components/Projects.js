import React from 'react'
import '../Style/projects.scss'


function Projects() {

  return (
    <div className="borderP">
      <div className="border2">
        <h1 className="projTitle">Projects</h1>
        <div className="TopDiv1">
          <div className="MainDiv1">
            <div className="BabyDiv1">
              <h2> Weight-Lifting-Journal Back-End API</h2>
              <h4>Express | Knex | Sqlite | jsonwebtoken | bcryptjs | jest</h4>
              <ul >
                <li>Created a database using knex migrations/seeds</li>
                <li>Register/Login users creating tokens + encrypting the password</li>
                <li>End points for CRUD application requests</li>
                <li>Created Jest Tests for each endpoint </li>
                <li>Restricted paths unless a user is logged in.</li>
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
          <div className="TopDiv4">
            <div className="MainDiv4">
              <div className="BabyDiv4">
                <h2> GitHub Repos</h2>
                <p>Please take a look at my other various projects, code, and the rest of my repos on <a href="/">GitHub</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects


{/* <div className="TopDiv2">
          <div className="MainDiv2">
            <div className="BabyDiv2">
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
         <div className="TopDiv3">
          <div className="MainDiv3">
            <div className="BabyDiv3">
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
        </div>
         <div className="TopDiv4">
          <div className="MainDiv4">
            <div className="BabyDiv4">
              <h2> GitHub Repos</h2>
              <p>Please take a look at my other various projects, code, and the rest of my repos on <a href="/">GitHub</a></p>
            </div>
          </div>
        </div> */}