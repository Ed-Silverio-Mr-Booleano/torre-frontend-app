import React from 'react';
import { MdOutlineClear ,MdVisibility, MdDirectionsBike, MdVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';
import avatar from '../../assets/images/avatar.jpg';

import { Container, Header, People } from './styles';

export default function Skills() {
  return (
    <Container>
        <Header>
          <div>
            <Link to="/">
                <MdOutlineClear size={25} color="#fff" />
            </Link>
              
              <p>Software development</p>
          </div>
        </Header>

        <div>
          <p>Proficiency</p>
          <MdDirectionsBike size={23} color="#c1c1c1" />
          <strong>Master / Influencer</strong>
        </div>

        <div>
          <p>Recommendations:</p>
          <strong>7</strong>
        </div>

        <hr />

        <h1>Alexander's related experiences:</h1>

        <aside className='experiece'>
          <main>
            <strong>Founding Member and Tech Lead</strong>
            <p>The Executive Company</p>
            <p>Feb 2015 - Dec 2017</p>
          </main>

          <main>
            <strong>Senior Software Engineer</strong>
            <p>Testing Inc.</p>
            <p>Mar 2010 - Jan 2015</p>
          </main>
         
        </aside>

        <hr />

        <People>
            <h1>Other people with this skill:</h1>

            <>
              <main>
                <div>
                    <img src={avatar} alt="avatar" />

                    <span>
                      <h2>Khan Yu <MdVerified size={18} color="#c1c1c1" /></h2>
                      <p>Web developer</p>
                    </span>
                </div>

                <div className='icons'>
                    <MdVisibility size={20} color="#c1c1c1" /> 
                </div>
              </main>

              <main>
                <div>
                    <img src={avatar} alt="avatar" />

                    <span>
                      <h2>Eduard Hint<MdVerified size={18} color="#c1c1c1" /></h2>
                      <p>Senior Software Engineer</p>
                    </span>
                </div>

                <div className='icons'>
                    <MdVisibility size={20} color="#c1c1c1" /> 
                </div>
              </main>
              
              
            </>
        </People>

    </Container>
  );
}

