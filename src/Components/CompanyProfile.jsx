import React from 'react';
import styles from './CompanyProfile.module.css'
import OtherEmploy from './OtherEmploy';

const CompanyProfile = () => {
  return (
    <div id="Company-profile">
      <p className={styles['company-profile']}>CompanyProfile</p>

      <div className="container">
        <div className={`${styles.innerProfile} row`}>
          <div className='col-sm-12 col-lg-6'>
            <img style={{ width: "100%" }} src="/images/company-profile.jpg" />
          </div>
          <div className={`${styles.details} col-sm-12 col-lg-4`}>
            <h3>Company Profile</h3><br />
            <div className='d-flex gap-4' style={{ marginLeft: "12px" }}>
              <div className={styles.upperYear}>
                <p>Founded</p>
                <h2>2004</h2>
              </div>
              <div className={styles.upperYear}>
                <p>Status</p>
                <h2>Private</h2>
              </div>
              <div className={styles.upperYear}>
                <p style={{ marginRight: "21px" }}>Employees</p>
                <h2>15</h2>
              </div>
            </div>
            <div className='mt-3'>
              <h3>Description</h3>
              <p>Operator of a creative studio intended to offer image design, animation, and effects for visual communications. The company's studio offers high-rated visuals, special expertise, and experience, and offers services such as visual asset strategy, animation, digital images, visual effects, post-production, and other similar services, enabling clients to get access to video and animation services.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`${styles.innerProfileboss} mt-3 row`}>
          <div className='col-sm-12'>
            <img src="/images/boss.png" />
          </div>
          <h4 className='d-flex justify-content-center align-items-center'>Company Profile</h4>
          <div className='d-flex align-items-end col-sm-12'>
            <div>
              <h6>Mr Xizimping Putin</h6>
              <p style={{ textAlign: "center" }}>Director</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className={`${styles.innerProfilebossinfo} row`}>
          <div style={{textAlign:"center",marginTop:"10px"}} className='col-sm-12'>Profite</div>
          <div className='col-sm-12'>
            <p>Menagement Professional, Member of All India Council Technical Skill Development,Digital Marketing, Communication Skills, Interview Skills, Introducation Skills, Presentation Skills, Recent Trends In Marketing, Accounting Fundamentals, Economics For Capital Markets, Business Etique</p>
            <div className={styles.innergrid}>
            <img style={{ margin: "5px" }} src="/images/certificate.png" />
            <img style={{ margin: "5px" }} src="/images/certificate.png" />
            <img style={{ margin: "5px" }} src="/images/certificate.png" />
            <img style={{ margin: "5px" }} src="/images/certificate.png" />
            <img style={{ margin: "5px" }} src="/images/certificate.png" />
            <img style={{ margin: "5px" }} src="/images/certificate.png" />
            </div>
          </div>
        </div>
      </div>
      <OtherEmploy />
    </div>
  )
}

export default CompanyProfile