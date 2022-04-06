import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
	return (
		<>
			<div className={styles.container}>
				<Image src="/intel.png" alt="site logo" width={100} height={100} />
				<Image src="/lenovo.png" alt="site logo" width={100} height={100} />
				<Image
					src="/Google_Partner_Education.png"
					alt="site logo"
					width={120}
					height={100}
				/>
				<Image
					src="/Google_Partner_Work.png"
					alt="site logo"
					width={120}
					height={100}
				/>
			</div>
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
