import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {Project} from '../types/portfolio';
import {getSkillLink} from '../utils/skillLinks';
import {useState, useEffect} from 'react';
import styles from './Projects.module.css';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({projects}: ProjectsProps): ReactNode {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            제가 개발한 프로젝트들을 소개합니다
          </p>
        </div>
        
        <div style={{position: 'relative'}}>
          <div className={styles.carouselContainer}>
            <div 
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {projects.map((project, index) => (
                <div key={index} className={styles.carouselSlide}>
                  <div className={styles.carouselImage}>
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      '💻'
                    )}
                  </div>
                  <div className={styles.carouselContent}>
                    <h3 className={styles.carouselTitle}>{project.title}</h3>
                    <p className={styles.carouselDescription}>{project.description}</p>
                    <div className="portfolio-flex" style={{gap: '0.75rem', flexWrap: 'wrap'}}>
                      {project.technologies.map((tech, techIndex) => (
                        <Link 
                          key={techIndex} 
                          to={getSkillLink(tech)}
                          style={{textDecoration: 'none'}}
                        >
                          <span className={styles.techBadge}>
                            {tech}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className={styles.carouselButtons}>
                      {project.github && (
                        <Link 
                          to={project.github}
                          className={`${styles.projectButton} ${styles.primary}`}
                        >
                          <span>📁</span> GitHub
                        </Link>
                      )}
                      {project.demo && (
                        <Link 
                          to={project.demo}
                          className={`${styles.projectButton} ${styles.secondary}`}
                        >
                          <span>🚀</span> Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.carouselIndicators}>
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.carouselIndicator} ${index === currentSlide ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`프로젝트 ${index + 1}로 이동`}
                />
              ))}
            </div>
          </div>
          
          <button 
            className={`${styles.carouselNav} ${styles.prev}`}
            onClick={goToPrevSlide}
            aria-label="이전 프로젝트"
          >
            ‹
          </button>
          <button 
            className={`${styles.carouselNav} ${styles.next}`}
            onClick={goToNextSlide}
            aria-label="다음 프로젝트"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
} 