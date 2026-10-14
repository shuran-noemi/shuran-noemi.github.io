import React from 'react';
import "../css/All.css"

function About() {
    return (
        <div className="about" id="about">
            <div className="card-title">About</div>
            <div className="intro-text">
                <p>I am a fourth-year undergraduate student at <a className="black-link" href="https://www.whu.edu.cn/" target="_blank" rel="noopener noreferrer">Wuhan University</a> and an incoming <strong>PhD student</strong> in <strong>Computer Science</strong> at the <a className="black-link" href="https://www.iscas.ac.cn/" target="_blank" rel="noopener noreferrer">Institute of Software, Chinese Academy of Sciences</a>, advised by <a className="no-italic" href="https://people.ucas.ac.cn/~tenghan" target="_blank" rel="noopener noreferrer">Prof. Teng Han</a> and <a className="no-italic" href="https://nianlongl.com/" target="_blank" rel="noopener noreferrer">Prof. Nianlong Li</a>.</p>
                <p>I have also been fortunate to be mentored by <a className="no-italic" href="https://jc926.github.io/Jie_Cai/" target="_blank" rel="noopener noreferrer">Prof. Jie Cai</a> (<a className="black-link" href="https://csen.nankai.edu.cn/" target="_blank" rel="noopener noreferrer">Nankai University</a>), <a className="no-italic" href="https://imyueli.github.io/" target="_blank" rel="noopener noreferrer">Prof. Yue Li</a> (<a className="black-link" href="https://www.xjtlu.edu.cn/" target="_blank" rel="noopener noreferrer">Xi'an Jiaotong-Liverpool University</a>), and <a className="no-italic" href="https://pi.cs.tsinghua.edu.cn/lab/people/ChunYu/" target="_blank" rel="noopener noreferrer">Prof. Chun Yu</a> (<a className="black-link" href="https://www.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">Tsinghua University</a>).</p>
                <p>My research interests lie in <strong>embodied human-AI collaboration</strong>, with a focus on enabling natural and trustworthy interactions between people and robots. More broadly, I am interested in <strong>human-centered AI</strong>, particularly in leveraging intention modeling to design AI systems that support meaningful user experiences.</p>
                <div className="notice">
                    I am open to collaboration opportunities. Feel free to contact me about any potential connection <span className="notice-bang">!</span>
                </div>
            </div>
        </div>
    );
}

export default About;
