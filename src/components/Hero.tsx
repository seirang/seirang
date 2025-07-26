import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {Profile} from '../types/portfolio';
import styles from './Hero.module.css';

interface HeroProps {
  profile: Profile;
}

export default function Hero({profile}: HeroProps): ReactNode {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}></div>
      
      <div className={styles.heroOverlay}></div>
      
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span style={{color: 'var(--portfolio-silver)'}}>Hello World!</span> <br />
            <span style={{color: 'var(--portfolio-silver)'}}>I'm</span> {profile.name}
          </h1>
          
          <h2 className={styles.heroSubtitle}>
            {profile.title}
          </h2>
          
          <p className={styles.heroDescription}>
            {profile.description}
          </p>
          
          <div className={styles.heroButtons}>
            <Link 
              className={styles.heroButtonPrimary} 
              to="#about"
            >
              포트폴리오 보기
            </Link>
            <Link 
              className={styles.heroButtonSecondary} 
              to="#projects"
            >
              프로젝트 보기
            </Link>
          </div>
        </div>
        
        <div className={styles.heroImageContainer}>
          <div className={styles.heroProfileImage}>
            {profile.profileImage ? (
              <img src={profile.profileImage} alt={`${profile.name}의 프로필 사진`} />
            ) : (
              '👩‍💻'
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 