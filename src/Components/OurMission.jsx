import React from 'react';
import styles from './OurMission.module.css'
import OtherEmploy from './OtherEmploy';

const OurMission = () => {
    return (
        <div id="our-mission">
            <p style={{ visibility: "hidden" }}>Our Mission</p>
            <div className={styles.mainconotain}>
                <img style={{ width: "100%", height: "400px" }} src="/images/ourmissions.png" />
                <h2 className={styles.text}>Our Mission</h2>
            </div>
            <div className={`${styles.cardWidth} container`}>
                <div className='row'>
                    <p style={{ textAlign: "center" }}>Our Mission</p>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src="/images/workcard.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <p>WORK SKILL’S & EDUCATION</p>
                                <div>
                                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                </div>
                                <h6>Read More</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src="/images/good.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <p>WORK SKILL’S & EDUCATION</p>
                                <div>
                                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                </div>
                                <h6>Read More</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src="/images/generate.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <p>GENERATE NEW EMPLOYMENTS</p>
                                <div>
                                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                </div>
                                <h6>Read More</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <img src="/images/women.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <p>WOMAN EMPWERMENT</p>
                                <div>
                                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                </div>
                                <h6>Read More</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <img src="/images/social.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <p>SOCIAL WORK</p>
                                <div>
                                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                </div>
                                <h6>Read More</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <img src="/images/environment.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <p>ENVIRONMENT PROTECTION</p>
                                <div>
                                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                </div>
                                <h6>Read More</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container mt-3'>
                <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
                    <div className='row'>
                        <h4 style={{ textAlign: "center" }}>Other Employes</h4>
                        <div className='col'>
                            <div className='card'>
                                <img src="/images/capital.png" style={{ width: "100%" }} />
                                <div className='p-3'>
                                    <p>Economics For Capital Markets</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <img src="/images/boss.png" style={{ width: "100%" }} />
                                <div className='p-3'>
                                    <p>Digital Marketing</p>

                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <img src="/images/marketing.png" style={{ width: "100%" }} />
                                <div className='p-3'>
                                    <p>Marketing</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
            <OtherEmploy />
        </div>
    )
}

export default OurMission