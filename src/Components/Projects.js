import React from 'react'
 import '../Style/projects.scss'


function Projects() {

    return (
      <>
        <div className="TopDiv1">
          <div className="MainDiv1">
            <div className="BabyDiv1">
              <h2> Weight-Lifting-Journal Back-End API</h2>
              <h4>Express | Knex | Sqlite | jsonwebtoken | bcryptjs | jest</h4>
              <ul>
              <li>Created a database using knex migrations/seeds</li>
              <li>Register/Login users creating tokens + encrypting the password</li>
              <li>End points for CRUD application requests</li>
              <li>Created Jest Tests for each endpoint </li>
              <li>Restricted paths unless a user is logged in.</li>
              </ul>
            </div>
          </div>
        </div>
         <div className="TopDiv2">
          <div className="MainDiv2">
            <div className="BabyDiv2">
              <h2> Crud Application with Redux <br/>State Management</h2>
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
              <h2> Project 1</h2>
              <p>Project one</p>
            </div>
          </div>
        </div>
         <div className="TopDiv4">
          <div className="MainDiv4">
            <div className="BabyDiv4">
              <h2> Project 1</h2>
              <p>Project one</p>
            </div>
          </div>
        </div>

</>
    )
}

export default Projects