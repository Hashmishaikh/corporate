import React from 'react'

const OtherEmploy = () => {
  return (
    <div className='container mt-3'>
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
            </div>
  )
}

export default OtherEmploy