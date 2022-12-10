import React from 'react';
import me from '../../assets/images/me.jpg'
const About = () => {
    return (
        <div className='mx-auto text-center my-32'>
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={me} alt='' />
                </div>
            </div>
            <div>
                <p>Graduated from East West University in Computer Science and Engineering (CSE). Passionate about web development.</p>
                <p>I want to be a web developer. I enjoy creating creative and user friendly website.
                </p>
                <p>In addition to my problem-solving skills and a passion for building state-of-the-art, easy-to-use, modern websites. <br /> I am a self-motivated quick learner. I stay up-to-date with new technology and trends.</p>
                <p>I have skills in HTML, CSS, React.js, Javascript, Bootstrap, Tailwind, Mongodb, DaisyUI,
                    node.js, express.js, Firebase Authentication.</p>
            </div>

        </div>
    );
};

export default About;