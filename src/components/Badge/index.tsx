import React from 'react';
import styles from './styles.module.css';

interface badgeProps {
    content: string;
}

const Badge: React.FC<badgeProps> = ({content}) => {
  return (
    <div className={styles.badge}>{content}</div>
  );
}

export default Badge;