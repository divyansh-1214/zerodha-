import React from 'react';

function Team() {
    return ( 
        <div className='container ' style={{ textAlign: 'center' }}>
            <h1>Introduction</h1>
            <div className='row' style={{ justifyContent: 'center',marginTop:'50px' }}>
                <div className='col-6'>
                    <div className='img'>
                        <img src="./public/DivImg.png" alt="" style={{borderRadius:'50%'}} />
                    </div>
                </div>
                <div className='col-6 p-5'>
                    <div className='content'> 
                        <p> I'm Divyansh Srivastava, a passionate 2nd-year B.Tech student in the IT branch with a keen interest in robotics, programming, and UI/UX design. My journey has been enriched by active involvement in clubs and organizations like CSI_SRMCEM, Growbots, and WIWA, where I've honed my technical and leadership skills.</p>
                        <p>With a 1200+ rating on CodeChef, proficiency in C, C++, HTML, CSS, JavaScript, and React, and experience conducting workshops for 100+ participants, I thrive on sharing knowledge and fostering growth. I've also led robotics projects for national-level competitions, showcasing innovation and teamwork.</p>
                        <p>Beyond academics, I have a flair for communication and have represented my skills in UI/UX competitions, PR roles, and public speaking engagements. My goal is to explore diverse career opportunities, collaborate on impactful projects, and contribute meaningfully to the tech world.</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Team;