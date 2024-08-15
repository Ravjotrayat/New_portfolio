import React from 'react'
import '../Education.css';
export default function Education(props){

    return(
        <>
        <section className="mh-experience" id="mh-experience">
                <div className="container">
                    <h1 className='education'>EDUCATION</h1>
                    <div className="row">
                        {/* College Degree Section */}
                        <div className="col-sm-12 col-md-6">
                            <div className="mh-education-box">
                                <h3>Bachleor's Degree</h3>
                                <div className="mh-education-details">
                                    <div className="mh-education-item">
                                        <h4>Bachelor's of Technology From <a href="http://www.giet.edu/">GIET UNIVERSITY, Gunupur</a></h4>
                                        <div className="mh-eduyear">2020-2024</div>
                                        <p>
                                            Computer Science Engg.
                                            {/* <br />Completed in 2024 */}
                                            <br />Final CGPA 7.74 CGPA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Intermediate Section */}
                        <div className="col-sm-12 col-md-6">
                            <div className="mh-education-box">
                                <h3>Intermediate</h3>
                                <div className="mh-education-details">
                                    <div className="mh-education-item">
                                        <h4>Intermediate From <a href="https://davbistupur.org">Gulmohur High School, Telco, Jamshedpur</a></h4>
                                        <div className="mh-eduyear">2020</div>
                                        <p>
                                            PCMC (Physics, Chemistry,Maths and Computer)
                                            <br />Overall - 74%
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        
        </>
    
    );
}