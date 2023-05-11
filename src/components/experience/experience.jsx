import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'
const Experience = ()=>{
    return (
        <section id="experience">
            <h2>My Experience</h2>
            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Backend Development</h3>
                    <div className = "experience_content">
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill />
                            <h4>
                                Java
                            </h4>
                            <small className="text-light">Experienced</small>

                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill />
                            <h4>
                                C
                            </h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill />
                            <h4>
                                Cpp
                            </h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill />
                            <h4>
                                python
                            </h4>
                            <small className="text-light">Experienced</small>

                        </article>

                        <article className="experience_details">
                            <BsFillBookmarkCheckFill />
                            <h4>
                                SQL
                            </h4>
                            <small className="text-light">Basic</small>

                        </article>

                    </div>
                </div>
                {/*end of front end */}
                <div className = "experience_backend">
                <h3>Frontend Development</h3>
                    <div className = "experience_content">
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill />
                            <h4>
                                HTML
                            </h4>
                            <small className="text-light">Experienced</small>

                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill />
                            <h4>
                                CSS
                            </h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill />
                            <h4>
                                JavaScript
                            </h4>
                            <small className="text-light">Experienced</small>
                        </article>
                        <article className="experience_details">
                            <BsFillBookmarkCheckFill />
                            <h4>
                                Bootstrap
                            </h4>
                            <small className="text-light">Experienced</small>

                        </article>

                        <article className="experience_details">
                            <BsFillBookmarkCheckFill />
                            <h4>
                                React
                            </h4>
                            <small className="text-light">Experienced</small>

                        </article>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Experience