import React from 'react';
import styles from './styles.module.css';
import imageLogo from '../../assets/rocket.svg';


const Header: React.FC = () => {
  return (
	<div className={styles.header}>
		<div className={styles.headerTitle}>
			<img src={imageLogo}/>
			<h1>Todo</h1>
		</div>
	</div>
  )
}

export default Header;