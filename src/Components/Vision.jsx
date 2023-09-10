import React from 'react';
import styles from './OurMission.module.css'

const Vision = () => {
    return (
        <div id="our-vision">
            <p style={{ visibility: "hidden" }}>Our Vision</p>
            <div className={styles.mainconotain}>
                <img style={{ width: "100%", height: "400px" }} src="/images/vision.png" />
                <h2 className={styles.text}>Our Vision</h2>
            </div>
            <div className='mt-3' style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
                <p style={{ textAlign: "center" }}>Our Vision</p>
                <div className='row gap-2'>
                    <img className='col-lg-4    ' src="/images/contro.png" />
                    <div className='col-lg-7'>
                        <h6 style={{ textAlign: "center" }}>CONTRIBUTING TO THE DEVELOPMENT OF THE COUNTRY</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
                <div className='row gap-2 mt-4'>
                    <div className='col-lg-6'>
                        <h6 style={{ textAlign: "center" }}>RICH MINDSET OF POOR & MIDDLE CLASS FAMILY’S</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                    <img className='col-lg-5' src="/images/rich.png" />
                </div>
                <div className='row gap-2 mt-4'>
                    <img className='col-lg-4' src="/images/aware.png" />
                    <div className='col-lg-7'>
                        <h6 style={{ textAlign: "center" }}>HEALTH AWARENES</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
                <div className='row gap-2 mt-4'>
                    <div className='col-lg-6'>
                        <h6 style={{ textAlign: "center" }}>CLASS DEVLOPMENT</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                    <img className='col-lg-5' src="/images/class.png" />
                </div>
                <div className='row gap-2 mt-4'>
                    <img className='col-lg-4' src="/images/finance.png" />
                    <div className='col-lg-7'>
                        <h6 style={{ textAlign: "center" }}>FINANCIAL FREEDOM</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision