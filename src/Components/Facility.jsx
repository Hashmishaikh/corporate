import React from 'react';
import styles from './OurMission.module.css'

const Facility = () => {
  return (
    <div id="company-facility">
    <p style={{ visibility: "hidden" }}>Company Facility</p>
    <div className={styles.mainconotain}>
        <img style={{ width: "100%", height: "400px"}} src="/images/facilities.png" />
        <h2 className={styles.text}>Company Facility</h2>
    </div>
    <div className={`${styles.cardWidth} container`}>
        <div className='row'>
            <p style={{ textAlign: "center" }}>Company Facility</p>
            <div className='col-lg-4'>
                <div className='card'>
                    <img src="/images/daily.png" style={{ width: "100%" }} />
                    <div className='p-3'>
                        <p>Daily Income</p>
                        <div>
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        </div>
                        <h6>Read More</h6>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='card'>
                    <img src="/images/health.png" style={{ width: "100%" }} />
                    <div className='p-3'>
                        <p>Health & Education Kit</p>
                        <div>
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        </div>
                        <h6>Read More</h6>
                    </div>
                </div>
            </div>
            <div className='col-lg-4'>
                <div className='card'>
                    <img src="/images/quality.png" style={{ width: "100%" }} />
                    <div className='p-3'>
                        <p>Quality Management</p>
                        <div>
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        </div>
                        <h6>Read More</h6>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 mt-3'>
                <div className='card'>
                    <img src="/images/award.png" style={{ width: "100%" }} />
                    <div className='p-3'>
                        <p>Award & Reward</p>
                        <div>
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        </div>
                        <h6>Read More</h6>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 mt-3'>
                <div className='card'>
                    <img src="/images/travel.png" style={{ width: "100%" }} />
                    <div className='p-3'>
                        <p>Tour & Travel</p>
                        <div>
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        </div>
                        <h6>Read More</h6>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 mt-3'>
                <div className='card'>
                    <img src="/images/traning.png" style={{ width: "100%" }} />
                    <div className='p-3'>
                        <p>Traning & Saport Systems</p>
                        <div>
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        </div>
                        <h6>Read More</h6>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 mt-3'>
                <div className='card'>
                    <img src="/images/life.png" style={{ width: "100%" }} />
                    <div className='p-3'>
                        <p>Life Security</p>
                        <div>
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        </div>
                        <h6>Read More</h6>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 mt-3'>
                <div className='card'>
                    <img src="/images/complete.png" style={{ width: "100%" }} />
                    <div className='p-3'>
                        <p>Complete Work Guide</p>
                        <div>
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        </div>
                        <h6>Read More</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Facility