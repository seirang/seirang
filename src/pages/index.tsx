import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import {portfolioData} from '../data/portfolio';

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="박세랑 포트폴리오"
      description="컴퓨터학부 학생 박세랑의 포트폴리오입니다."
    >
      <Hero profile={portfolioData.profile} />
      <About 
        timeline={portfolioData.timeline} 
        skills={portfolioData.skills}
        interests={portfolioData.interests}
      />
      <Projects projects={portfolioData.projects} />
      <Contact contact={portfolioData.contact} />
    </Layout>
  );
}
