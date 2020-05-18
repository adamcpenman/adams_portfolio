import React from 'react';

function Projects() {
  return (
    <div>
      <h1 className='projTitle'>Projects</h1>
      <div className='TopDiv1'>
        <div id='ScrollToProjects'>
          <div className='MainDiv1'>
            <div className='BabyDiv1'>
              <h2 className='projectTitle'>
                <a href='/'>Where Have you been with Google Maps.</a>
              </h2>
              <p>
                Express | MongoDB | Multer | Axios | bcryptjs | jsonwebtoken |
                React
                <br /> <br />
                For this project, I created the backend with NodeJS and Express
                while the database is created MongoDB. Axios is being
                implemented to make calls to the exisiting Google API to
                retrieve Google Map coordiances while saving the retrieved data
                in MongoDB. Multer is being used for the ability to upload am
                avatar or picture. The frontend application is built with React
                giving the user the ability to create an account and log places
                they have been. The user will have the capability to see other
                user's places, but only have the capability to have full CRUD
                applicatiion on the logged in user. It is a full MERN stack.{' '}
                <br />
                <br />
                <a
                  href='https://github.com/adamcpenman/MERN-FE'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Frontend Repo
                </a>{' '}
                <a
                  href='https://github.com/adamcpenman/MERN-BE'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Backend Repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='TopDiv2'>
        <div className='MainDiv2'>
          <div className='BabyDiv2'>
            <h2 className='projectTitle2'>
              <a href='https://guarded-contact-keeper.herokuapp.com/'>
                Contact Keeper
              </a>
            </h2>
            <p>
              Express | MongoDB | React | jsonwebtoken | bcryptjs
              <br /> <br />
              In this project, I created a backend API using NodeJS & Express.
              The database is created through MongoDB, along with bcryptjs and
              jsonwebtoken for added protection of data. The frontend
              implementation is a fully functional React application. A user can
              create an account which will be saved in MongoDB. Users have a
              fully functioning CRUD application for their own personal online
              address book. <br />
              <br />
              <a
                href='https://github.com/adamcpenman/ContactKeeper'
                target='_blank'
                rel='noopener noreferrer'
              >
                Full Repo
              </a>
            </p>
          </div>
        </div>
      </div>{' '}
      <div className='TopDiv1'>
        <div className='MainDiv1'>
          <div id='ScrollToProjects'>
            <div className='BabyDiv1'>
              <h2 className='projectTitle'>
                <a href='/'>Weight-Lifting-Journal Back-End API</a>
              </h2>
              <p>
                Express | Knex | Sqlite | jsonwebtoken | bcryptjs | jest
                <br /> <br />
                For this project, I created a database using SQL, Express, knex
                migrations/seeds. Users have the ability to register or login.
                The passwords are encrypted and each session creates a token.
                There are end points for a full CRUD application requests. Each
                end point has restricted path unless a user is logged into the
                application. Jest testing was implemented throughout. <br />
                <br />
                <a
                  href='https://github.com/adamcpenman/Weight-Lifting-App-BW'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Backend Repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
