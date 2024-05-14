import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GlobalContext } from './../utils/Context';
import './aboutus.css'; // Import CSS file for styling
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import chat from './chat.png';
import calendar from './calendar.png';

const SectionWrapper = styled.section`
  padding: 40px 0;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 20px;
`;

const EngagementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const EngagementItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 28px;
  border-radius: 10%;
`;

const Text = styled.div`
  font-size: 16px;
  color: #333;
`;

const AboutUs = () => {
  const { setPage } = useContext(GlobalContext);

        useEffect(() => {
            setPage("About us")
        }, [])

        const teamMembers = [
          {
            name: 'Yuvraj Kishan Sharma',
            role: 'Database & Design',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            name: 'Yuvraj Singh Naruka',
            role: 'Front-End Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            name: 'Vishal Singh Chouhan',
            role: 'Back-End Developer',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          },
          {
            name: 'Yashvardhan Dukiya',
            role: 'Tester',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
          // Add more team members as needed
        ];
        const coreValues = [
          {
            title: 'Integrity',
            description: 'We uphold the highest standards of honesty, ethics, and transparency in all our interactions and operations.'
          },
          {
            title: 'Customer-Centricity',
            description: 'We are committed to putting our customers at the center of everything we do, striving to exceed their expectations and deliver exceptional experiences.'
          },
          {
            title: 'Innovation',
            description: 'We embrace innovation and continuous improvement, seeking new ways to enhance our platform and deliver value to our users.'
          },
          // Add more core values as needed
        ];

        const SectionWrapper = styled.section`
  padding: 40px 0;
  margin-left: 30px;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color:#f16d59;
  margin-bottom: 20px;
`;

const TestimonialContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const TestimonialCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
`;

const TestimonialText = styled.p`
  font-size: 16px;
  color: #666;
`;

const TestimonialAuthor = styled.div`
  margin-top: 10px;
`;

const TestimonialName = styled.span`
  font-weight: bold;
`;

const TestimonialLocation = styled.span`
  color: #999;
`;

const Section2Wrapper = styled.section`
  background-color: #f9f9f9;
  padding: 60px 0;
  text-align: center;
`;

const Heading2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
`;

const ActionButton = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #ff7f50;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6623a;
  }
`;

      
  return (
    <div className="about-us">
      <section className="introduction">
        <div className="container">
          <h2 className="introduction-title">Welcome to Our Homestay Management Platform</h2>
          <p className="introduction-paragraph">At <span className='spanp'>WanderStay</span> , we're passionate about connecting travelers with authentic homestay experiences and supporting homestay managers in showcasing their properties.</p>
          <p className="introduction-paragraph">Our platform simplifies the booking process, provides access to unique accommodations, and fosters meaningful interactions between hosts and guests.</p>
        </div>
      </section>
      <section className="team-members">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-details">
              <h3>{member.name}</h3>
              <p className="role-p">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="core-values">
      <h2>Our Core Values</h2>
      <div className="core-values-grid">
        {coreValues.map((value, index) => (
          <div key={index} className="core-value">
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
    <SectionWrapper>
      <Heading>Community Engagement</Heading>
      <Description>
        Discover how we foster a vibrant homestay community through various initiatives and activities.
      </Description>
      <EngagementList>
        <EngagementItem>
          <Icon src={chat} alt="Forum Icon" />
          <Text>Join our forums to connect with other homestay enthusiasts and share experiences.</Text>
        </EngagementItem>
        <EngagementItem>
          <Icon src={calendar} alt="Event Icon" />
          <Text>Attend our community events to meet fellow travelers and homestay hosts in person.</Text>
        </EngagementItem>
        {/* Add more engagement items as needed */}
      </EngagementList>
    </SectionWrapper>

    <SectionWrapper>
      <Heading>Testimonials</Heading>
      <TestimonialContainer>
        <TestimonialCard>
          <TestimonialText>
            "I had an amazing experience using the homestay management platform. It was easy to find unique accommodations and connect with friendly hosts."
          </TestimonialText>
          <TestimonialAuthor>
            <TestimonialName>John Wick</TestimonialName>, <TestimonialLocation>New York</TestimonialLocation>
          </TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>
            "I had an amazing experience using the homestay management platform. It was easy to find unique accommodations and connect with friendly hosts."
          </TestimonialText>
          <TestimonialAuthor>
            <TestimonialName>Gojo Satoru</TestimonialName>, <TestimonialLocation>Shibuya</TestimonialLocation>
          </TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>
            "I had an amazing experience using the homestay management platform. It was easy to find unique accommodations and connect with friendly hosts."
          </TestimonialText>
          <TestimonialAuthor>
            <TestimonialName>Ryomen Sukuna</TestimonialName>, <TestimonialLocation>Melvolent Shrine</TestimonialLocation>
          </TestimonialAuthor>
        </TestimonialCard>
        {/* Add more testimonials as needed */}
      </TestimonialContainer>
    </SectionWrapper>
      {/* Add other sections of the 'About Us' page here */}
      <Section2Wrapper>
      <Heading2>Ready to find your perfect homestay?</Heading2>
      <ButtonWrapper>
        <Link to="/">
          <ActionButton >Explore Homestays</ActionButton>
        </Link>
      </ButtonWrapper>
    </Section2Wrapper>
    </div>
  );
};

export default AboutUs;
