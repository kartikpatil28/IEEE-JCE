import './about.css'
import group from "../../assets/JCE.png"
import grp from "../../assets/group.jpg"
import wie_logo from '../../assets/wie-logo.png'
import aess_logo from '../../assets/aess-logo.png'
import cas_logo from '../../assets/cas-logo.png'

function about() {
  return (
    <>
        <div className='div'>
          <div>
          <h1 className='heading1'>JCE IEEE STUDENT BRANCH</h1> 
          <marquee className='heading2'>Jain College of Engineering , Belgavi</marquee>
          </div>
          
          <img src={group} alt="GroupPhoto" className='grp_img'  />
          
        </div>

        <div>
          <h1 className='heading'>Advancing technology for the benefit of humanity.</h1>
          <div>
          <p className='para'>IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
          <p className='para'>IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 400,000 members in over 160 countries, and its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted "voice" for engineering, computing, and technology information around the globe.</p>
          <p className='para'><a href="https://www.ieee.org/">Learn more at ieee.org</a></p>
          </div>
        </div>

        <div className='mainouter'>
          
            <div className='outerbox'>
              <div className='boxinline'>
              <div className='box'>500+ Members</div>
              <div className='box'>50 events</div></div>
              <div className='boxinline'>
              <div className='box'>4 Societies</div>
              <div className='box'>10+ Mentors</div></div>
            </div>
            <div className='outerbox'>
              <h4>About IEEE JCE</h4>
              <p>The IEEE Student Branch at Jain College of Engineering is a community of tech enthusiasts dedicated to fostering innovation and growth. Guided by passionate faculty, we provide a platform for students to explore cutting-edge technologies and enhance their engineering skills through practical experience. Our branch organizes various events, from technical workshops to collaborative projects, aimed at nurturing curiosity and creativity. We also focus on building strong networks among students, alumni, and industry professionals, enabling valuable knowledge exchange and career opportunities.</p>
              <br />
              <h4>Our Vision</h4>
              <p>To empower students with the skills and knowledge to become leaders in technology, driving innovation and contributing to societal advancement through collaboration and continuous learning.</p>
              <br />
              <h4>Our Mission</h4>
              <p>Provide opportunities for hands-on learning through workshops, projects, and seminars.Foster a collaborative environment for knowledge exchange and growth.Bridge the gap between academic knowledge and real-world applications, preparing students for the evolving tech landscape.</p>
            </div>
          
        </div>
        <div>
          <h1 className='comu_heading'>Our Community</h1>
          <img src={grp} alt="" className='grp'/>
        </div>  
        <br />
        <div>
          <h1 className='comu_heading'>IEEE Societies</h1>
          <div className='society_outer'>
            <img className='society' src={wie_logo} alt="wie-logo" />
            <img className='society' src={aess_logo} alt="aess-logo" />
            <img className='society' src={cas_logo} alt="cas-logo" />
          </div>
        </div>
    </>
  )
}

export default about