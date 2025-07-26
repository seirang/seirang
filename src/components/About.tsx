import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {TimelineItem, Skill, Interest} from '../types/portfolio';
import {getSkillLink} from '../utils/skillLinks';
import styles from './About.module.css';

interface AboutProps {
  timeline: TimelineItem[];
  skills: Skill[];
  interests: Interest[];
}

export default function About({timeline, skills, interests}: AboutProps): ReactNode {
  const getDarkThemeLevelColor = (level: string) => {
    switch (level) {
      case '고급':
        return '#e2e8f0';
      case '중급':
        return '#cbd5e0';
      case '초급':
        return '#a0aec0';
      default:
        return '#cbd5e0';
    }
  };

  const getLightThemeLevelColor = (level: string) => {
    switch (level) {
      case '고급':
        return '#2d3748';
      case '중급':
        return '#4a5568';
      case '초급':
        return '#718096';
      default:
        return '#4a5568';
    }
  };

  const getLevelColor = (level: string) => {
    const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (isDarkTheme) {
      return getDarkThemeLevelColor(level);
    } else {
      return getLightThemeLevelColor(level);
    }
  };

  const getTextColor = (level: string) => {
    const isDarkTheme = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (isDarkTheme) {
      return '#1a202c';
    } else {
      return '#ffffff';
    }
  };

  return (
    <section id="about" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            저의 연혁, 기술 스택, 그리고 관심 분야를 소개합니다.
          </p>
        </div>
        
        <div className="portfolio-card">
          <div className={styles.aboutGrid}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '2rem',
                color: 'var(--portfolio-text)',
                fontWeight: '600'
              }}>
                📅 연혁
              </h3>
              <div>
                {timeline.map((item, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineYear}>
                      {item.year}
                    </div>
                    <div className={styles.timelineTitle}>
                      {item.title}
                    </div>
                    <div className={styles.timelineDescription}>
                      {item.description}
                    </div>
                    <div className={styles.timelineOrganization}>
                      {item.organization}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '2rem',
                color: 'var(--portfolio-text)',
                fontWeight: '600'
              }}>
                💻 기술 스택
              </h3>
              <div className={styles.skillsContainer}>
                {skills.map((skill, index) => (
                  <Link 
                    key={index} 
                    to={getSkillLink(skill.name)}
                    style={{textDecoration: 'none'}}
                  >
                    <span className={styles.skillBadge} style={{
                      backgroundColor: getLevelColor(skill.level),
                      color: getTextColor(skill.level),
                      border: 'none',
                      position: 'relative'
                    }}>
                      <span style={{fontWeight: '600'}}>{skill.name}</span>
                      <span className={styles.skillLevel}>
                        {skill.level}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className={styles.legendContainer}>
                <span className={styles.legendItem}>
                  <span className={styles.legendColor} style={{
                    backgroundColor: getLevelColor('고급')
                  }}></span>
                  고급
                </span>
                <span className={styles.legendItem}>
                  <span className={styles.legendColor} style={{
                    backgroundColor: getLevelColor('중급')
                  }}></span>
                  중급
                </span>
                <span className={styles.legendItem}>
                  <span className={styles.legendColor} style={{
                    backgroundColor: getLevelColor('초급')
                  }}></span>
                  초급
                </span>
              </div>
            </div>
          </div>
          
          <div className={styles.sectionDivider}></div>
          
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '2rem',
              color: 'var(--portfolio-text)',
              fontWeight: '600'
            }}>
              🎯 관심 분야
            </h3>
            <div className={styles.interestsGrid}>
              {interests.map((interest, index) => (
                <div key={index} className={styles.interestCard}>
                  <span className={styles.interestIcon}>
                    {interest.icon}
                  </span>
                  <h4 className={styles.interestTitle}>
                    {interest.title}
                  </h4>
                  <p className={styles.interestDescription}>
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 