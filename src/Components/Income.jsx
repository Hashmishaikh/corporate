import React from 'react';
import styles from './OurMission.module.css'

const Income = () => {
    return (
        <div id="Income-profile">
            <p style={{ visibility: "hidden" }}>Income Profile</p>
            <div className={styles.mainconotain}>
                <img style={{ width: "100%", height: "400px" }} src="/images/income.png" />
                <h2 className={`${styles.text}`} style={{ color: "black" }}>Income Profile</h2>
            </div>
            <div className={`${styles.cardWidth} container`}>
                <div className='row'>
                    <p style={{ textAlign: "center" }}>Income Profile</p>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src="/images/watch.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <div>
                                    BUYING PRICE :-&nbsp;  2000/- Rs
                                </div>
                                <div>
                                    SELLING PRICE :-&nbsp; 3500/- Rs
                                </div>
                                <div>
                                    PROFITE :- &nbsp;&nbsp;&nbsp;1500/- Rs
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src="/images/watch.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <div>
                                    BUYING PRICE :-&nbsp;  2000/- Rs
                                </div>
                                <div>
                                    SELLING PRICE :-&nbsp; 3500/- Rs
                                </div>
                                <div>
                                    PROFITE :- &nbsp;&nbsp;&nbsp;1500/- Rs
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <img src="/images/watch.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <div>
                                    BUYING PRICE :-&nbsp;  2000/- Rs
                                </div>
                                <div>
                                    SELLING PRICE :-&nbsp; 3500/- Rs
                                </div>
                                <div>
                                    PROFITE :- &nbsp;&nbsp;&nbsp;1500/- Rs
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <img src="/images/watch.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <div>
                                    BUYING PRICE :-&nbsp;  2000/- Rs
                                </div>
                                <div>
                                    SELLING PRICE :-&nbsp; 3500/- Rs
                                </div>
                                <div>
                                    PROFITE :- &nbsp;&nbsp;&nbsp;1500/- Rs
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <img src="/images/watch.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <div>
                                    BUYING PRICE :-&nbsp;  2000/- Rs
                                </div>
                                <div>
                                    SELLING PRICE :-&nbsp; 3500/- Rs
                                </div>
                                <div>
                                    PROFITE :- &nbsp;&nbsp;&nbsp;1500/- Rs
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <img src="/images/watch.png" style={{ width: "100%" }} />
                            <div className='p-3'>
                                <div>
                                    BUYING PRICE :-&nbsp;  2000/- Rs
                                </div>
                                <div>
                                    SELLING PRICE :-&nbsp; 3500/- Rs
                                </div>
                                <div>
                                    PROFITE :- &nbsp;&nbsp;&nbsp;1500/- Rs
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Income