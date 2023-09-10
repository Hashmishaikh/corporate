import React from 'react';
import styles from './OurMission.module.css'

const EntryProfile = () => {
    return (
        <div id="entry-profile">
            <p style={{ visibility: "hidden" }}>Entry Profile</p>
            <div className={styles.mainconotain}>
                <img style={{ width: "100%", height: "400px" }} src="/images/entry.png" />
                <h2 className={styles.text}>Entry Profile</h2>
            </div>
            <div className='mt-3' style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
                <p style={{ textAlign: "center" }}>Entry Profile</p>
                <div className='row gap-2'>
                    <img className='col-lg-3' src="/images/package.png" />
                    <div className='col-lg-7'>
                        <h6 style={{textAlign:"center"}}>HEALTH PACKEGE</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className='row gap-2 mt-4'>
                <div className='col-lg-6'>
                        <h6 style={{textAlign:"center"}}>EDUCATION PACKEGE</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <img className='col-lg-5' src="/images/education.png" />
                    
                </div>
            </div>
        </div>
    )
}

export default EntryProfile