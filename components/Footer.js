import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
	return (
		<>
			<div className={styles.footer}>
				Copyright 2022
				<br />
				Radkon.US
				<br />
				55 E MONROE, SUITE 3800
				<br />
				CHICAGO IL 60603
				<p>
					Toll Free:+1 (877) 224 6601 / FAX:+1 (877) 224 6601 /
					E-mail:mail@radkon.us
				</p>
			</div>
		</>
	)
}

export default Footer
