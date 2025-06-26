
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className='container'>
            <h1>Home</h1>

            <p>
            <strong>Hi there, welcome to my website!</strong>
                <br /><br />
                I'm Menno, a 27-year-old developer and UX designer with a love for creativity and innovation. I'm always exploring new ideas, learning new things, and pushing myself to build awesome digital experiences. Whether it's coding, designing, or combining the two! 
                <br /><br />
                Feel free to check out some of the projects I've been working on, browse through my random sketches, or dive into articles and thoughts I’ve shared. Enjoy!
            </p>
            
            {/* Button section */}
            <div className='button-group'>
                <Link to="/Projects/projects">
                    <button className='button-fill'>Projects</button> 
                </Link>
                <Link to="/Projects/blog">
                    <button className='button-outline'> Blog</button> 
                </Link>
            </div>
        </div>
    );
}

export default Home;
