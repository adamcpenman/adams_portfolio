import React from 'react';

function About() {
  return (
    <div id='ScrollToAbout'>
      {' '}
      <br />
      <h1 className='aboutTitle'>About</h1>
      <div className='overflow'>
        <div className='TopDiv'>
          <div className='MainDiv'>
            <div className='BabyDiv'>
              <p>
                Hello! I'm Adam Penman. Pronouns are 'He/Him/His'. <br />
                <br />
                I am a full-stack developer currently for hire. <br />
                <br />I have learned various different langaugaes and libraries,
                but consistently reviewing and learning new ways to write code
                every day. I've attended Lambda School which has provided an
                excellent base and a grasp on core concepts. Please take a look
                at all of my work on{' '}
                <a href='https://github.com/adamcpenman' target='_blank'>
                  {' '}
                  Github
                </a>
                <br /> <br />
                Currently, searching for the right full-time role as a Software
                Developer. I want to be able to create dynamic, creative, user
                friendly content while having the necessary tools for a
                continious learning environment and expand my skills as a
                Software Developer!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
