import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {ContactInfo} from '../types/portfolio';
import styles from './Contact.module.css';

interface ContactProps {
  contact: ContactInfo;
}

export default function Contact({contact}: ContactProps): ReactNode {
  return (
    <section id="contact" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            언제든지 연락주세요. 함께 일할 기회를 기다리고 있습니다.
          </p>
        </div>
        
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📧</span>
            <div className={styles.contactLabel}>Email</div>
            <Link to={`mailto:${contact.email}`} className={styles.contactValue}>
              {contact.email}
            </Link>
          </div>
          
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>🐙</span>
            <div className={styles.contactLabel}>GitHub</div>
            <Link to={contact.github} className={styles.contactValue}>
              GitHub 프로필
            </Link>
          </div>
          
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>💼</span>
            <div className={styles.contactLabel}>LinkedIn</div>
            <Link to={contact.linkedin} className={styles.contactValue}>
              LinkedIn 프로필
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 