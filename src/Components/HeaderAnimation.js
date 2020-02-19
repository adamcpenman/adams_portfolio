import React from 'react';
import '../Style/App.scss';

function HeaderAnimation() {
    return (
        <div class="circle">
            <span class="circle__inner"> </span>

            <h1 className="h1Main" className="glow">Adam Penman</h1>
            <h1 className="h1Sub">Full-Stack Web Dev</h1>

        </div>
    );
}

export default HeaderAnimation;
