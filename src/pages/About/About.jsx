import React from 'react';
import './About.css';

function About() {
    return (
        <div className='container'>

<h1>About me</h1>
<p>
Hi! I’m Menno Vlaming — a 27-year-old developer and UX designer from The Netherlands. My journey began with a passion for design, which eventually led me to front-end development: the perfect mix of creativity and code.
<br /><br />
Before diving into tech, I spent about five years in retail and sales. I enjoyed the social side and helping people find what they needed, but my love for technology kept growing. These days, I focus on building intuitive, user-friendly experiences for the web.
<br /><br />
I’m always looking for ways to combine my strengths in design, development, and communication — and who knows, maybe one day I’ll merge all three into something unique.
<br />
Thanks for stopping by! Feel free to reach out if you’d like to connect or collaborate.
            </p>
            <div className='button-group'>
            <button className='button-fill'>
                Projects
            </button>
            </div>
        </div>
        
    )
}

export default About;