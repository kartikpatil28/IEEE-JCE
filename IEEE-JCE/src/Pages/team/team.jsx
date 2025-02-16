import './team.css'
import Teamcard from '../../Components/Teamcard'
import austin from '../../assets/Austin.jpg'
import chandan from '../../assets/Chandan.jpg'
import kshiti from '../../assets/Kshiti.jpg'
import shreedhar from '../../assets/Shreedhar.jpg'
import rahul from '../../assets/Rahul.jpg'
import abhishek from '../../assets/Abhishek.jpg'
import neha from '../../assets/Neha.jpg'
import varsha from '../../assets/Varsha.jpg'
import chaitra from '../../assets/Chaitra.jpg'
import pawan from '../../assets/pawan.jpg'
import siddarth from '../../assets/Siddharth.jpg'

function team() {
  return (
    <div className='grid-background'>
    <div className='mainheading'><b>Execom 2023-24</b></div>
    <div className='outer_div'>
    <div className='member_card'>
    <Teamcard image={austin} name="Austin Pacheco" title="IEEE Chair" linkedin="https://www.linkedin.com/in/snehal-suryavanshi/" xProfile="https://x.com/Snehal_A_S" />
    </div>
    <div className='member_card'>
    <Teamcard image={chandan} name="Chandan Kangralkar" title="IEEE Vice Chair" linkedin="https://www.linkedin.com/in/snehal-suryavanshi/" xProfile="https://x.com/Snehal_A_S" />
    </div>
    <div className='member_card'>
    <Teamcard image={kshiti} name="Kshiti Gaddigoudar" title="Secratery" linkedin="https://www.linkedin.com/in/snehal-suryavanshi/" xProfile="https://x.com/Snehal_A_S" />
    </div>
    <div className='member_card'>
    <Teamcard image={shreedhar} name="Shreedhar Teradal" title="Treasurer" linkedin="https://www.linkedin.com/in/snehal-suryavanshi/" xProfile="https://x.com/Snehal_A_S" />
    </div>
    <div className='member_card'>
    <Teamcard image={rahul} name="Rahul Halkarni" title="Media Head" linkedin="https://www.linkedin.com/in/snehal-suryavanshi/" xProfile="https://x.com/Snehal_A_S" />
    </div>
    <div className='member_card'>
    <Teamcard image={abhishek} name="Abhishek Basinayak" title="Membership co-ordinator" linkedin="https://www.linkedin.com/in/snehal-suryavanshi/" xProfile="https://x.com/Snehal_A_S" />
    </div>
    <div className='member_card'>
    <Teamcard image={neha} name="Neha Patil" title="WIE Chair" linkedin="https://www.linkedin.com/in/snehal-suryavanshi/" xProfile="https://x.com/Snehal_A_S" />
    </div>
    <div className='member_card'>
    <Teamcard image={varsha} name="Varsha V" title="WIE Vice Chair" linkedin="https://www.linkedin.com/in/snehal-suryavanshi/" xProfile="https://x.com/Snehal_A_S" />
    </div>
    <div className='member_card'>
    <Teamcard image={chaitra} name="Chaitra Kolli" title="WIE Secratery" linkedin="https://www.linkedin.com/in/snehal-suryavanshi/" xProfile="https://x.com/Snehal_A_S" />
    </div>
    <div className='member_card'>
    <Teamcard image={pawan} name="Pavan Wader" title="WIE Treasurer" linkedin="https://www.linkedin.com/in/snehal-suryavanshi/" xProfile="https://x.com/Snehal_A_S" />
    </div>
    <div className='member_card'>
    <Teamcard image={siddarth} name="Siddharth Jambagi" title="WIE Media Head" linkedin="https://www.linkedin.com/in/snehal-suryavanshi/" xProfile="https://x.com/Snehal_A_S" />
    </div>

    </div>
    
</div>
  )
}

export default team