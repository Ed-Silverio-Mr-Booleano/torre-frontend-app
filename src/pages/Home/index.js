import React from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdMenu, MdDirectionsBike, MdDirectionsRun, MdOutlineShoppingBasket } from 'react-icons/md';
import { Container, Header, Profile, Skills } from './styles';
import avatar from '../../assets/images/avatar.jpg';

export default function Home() {
    return (
      <Container>
        <Header>
           <div>
              <MdMenu size={25} color="#fff" />
              <p>Torre <strong>.CO</strong></p>
           </div>
              
            <div>
              <MdSearch size={23} color="#fff" />
              <p className='green'>SING IN</p>
            </div>
        </Header>

        <Profile>
           <img src={avatar} alt="avatar" />
           <p>Alexander Terrenegra</p>
        </Profile>

         <Skills>
            <h1>Skills and interests:</h1>
            <div>
              <MdDirectionsBike size={23} color="#c1c1c1" />
              <p>Master / Influencer</p>
            </div>

            <div>
               <Link to="skill">
                   <span>Software development</span>
               </Link>

               <Link to="skill">
                  <span>Team management</span>
               </Link>
               
               
            </div>

            <span>
               <MdDirectionsRun size={23} color="#c1c1c1" />
               <p>Proficient</p>
            </span>

            <div className='skill'>
               
               <div className='d-flex'>
                  <span>Unit testing <MdOutlineShoppingBasket size={23} color="#c1c1c1" /> 11.5</span>
                  <span>Data analysis</span>
               </div>

               <span>Functional programming</span>
               <span>Reactive programming</span>

            </div>
            

         </Skills>

     </Container>
      
    );
}
