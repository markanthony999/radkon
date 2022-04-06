import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
	return (
		<>
			<div className={styles.nav}>
				<div className={styles.links}>
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/businesses">
						<a>Services</a>
					</Link>

					<Link href="/articles">
						<a>Articles</a>
					</Link>
					<Link href="/about">
						<a>About</a>
					</Link>
				</div>
			</div>

			<div className={styles.logo}>
				<Image src="/logo.png" alt="site logo" width={265} height={120} />
			</div>
		</>
	)
}

export default Navbar
