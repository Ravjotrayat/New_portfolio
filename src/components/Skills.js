import React from "react";

export default function Skills(props){

    return(
        <>
        <section className="skills-section" id="skills">
    <div className="container">
        <div className="row">
            {/* Technical Skills */}
            <div className="col-sm-12 col-md-6">
                <div className="skills-inner">
                    <h3>Technical Skills</h3>
                    <div className="skill-set">
                        <div className="skill">
                            <div className="skill-info">
                                <div className="skill-name">HTML/CSS</div>
                                <div className="skill-percentage">90%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '90%' }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-info">
                                <div className="skill-name">JavaScript</div>
                                <div className="skill-percentage">70%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '70%' }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-info">
                                <div className="skill-name">React.js</div>
                                <div className="skill-percentage">70%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '70%' }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-info">
                                <div className="skill-name">Java</div>
                                <div className="skill-percentage">90%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '95%' }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-info">
                                <div className="skill-name">Python</div>
                                <div className="skill-percentage">80%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '80%' }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-info">
                                <div className="skill-name">Spring Boot</div>
                                <div className="skill-percentage">65%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional Skills */}
            <div className="col-sm-12 col-md-6">
                <div className="professional-skills">
                    <h3>Professional Skills</h3>
                    <ul className="professional-skill-list">
                        <li>
                            <div className="skill-circle" data-progress="90"></div>
                            <div className="skill-name">Communication</div>
                        </li>
                        <li>
                            <div className="skill-circle" data-progress="95"></div>
                            <div className="skill-name">Teamwork</div>
                        </li>
                        <li>
                            <div className="skill-circle" data-progress="80"></div>
                            <div className="skill-name">Problem Solving</div>
                        </li>
                        <li>
                            <div className="skill-circle" data-progress="85"></div>
                            <div className="skill-name">Leadership</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

        </>
    
    );
}