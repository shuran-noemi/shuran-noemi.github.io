import React from 'react';
import "../css/All.css"

function About() {
    return (
        <div className="about" id="about">
            <div className="card-title">About</div>
            <div className="intro-text">
                <p>I am a third-year undergraduate student at <a className="accent-link no-italic" href="https://www.whu.edu.cn/" target="_blank" rel="noopener noreferrer">Wuhan University</a>, majoring in Film and Theatre Literature while pursuing a second degree in Computer Science and Technology.</p>
                <p>I have had research experiences at the <a className="black-link" href="https://www.iscas.ac.cn/" target="_blank" rel="noopener noreferrer">Institute of Software, Chinese Academy of Sciences</a> (mentored by Prof. <a href="https://nianlongl.com/" target="_blank" rel="noopener noreferrer">Nianlong Li</a>), <a className="black-link" href="https://www.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">Tsinghua University</a> (mentored by Prof. <a href="https://pi.cs.tsinghua.edu.cn/lab/people/ChunYu/" target="_blank" rel="noopener noreferrer">Chun Yu</a> and Dr. <a href="https://jc926.github.io/Jie_Cai/" target="_blank" rel="noopener noreferrer">Jie Cai</a>), and <a className="black-link" href="https://www.xjtlu.edu.cn/" target="_blank" rel="noopener noreferrer">Xi’an Jiaotong-Liverpool University</a> (mentored by Prof. <a href="https://imyueli.github.io/" target="_blank" rel="noopener noreferrer">Yue Li</a>).</p>
                <p>My research interests lie in <strong>Human-Computer Interaction (HCI)</strong>, <strong>Human-AI Collaboration</strong>, and <strong>Human-Centered AI</strong>. More broadly, I am interested in exploring the intersection of technology and creativity.</p>
                <div className="notice">
                    I am open to collaboration opportunities. Feel free to contact me about any potential connection <span className="notice-bang">!</span>
                </div>
            </div>
        </div>
    );
}

export default About;
