import styles from '../styles/Home.module.css'
import Header from '../components/Header2'

export default function Articles({ posts }) {
	return (
		<>
			<Header />
			<h1>Articles (links) </h1>
			<div className={styles.container}>
				<div className={styles.child}>
					<ul>
						<li>- CYBER CRIMINALS GOING AFTER SMALL BUSINESSES</li>
						<li>- BENEFITS OF USING A MANAGED SERVICE PROVIDER</li>
						<li> - WHEN IS THE RIGHT TIME TO UPGRADE YOUR COMPUTER FLEET?</li>
						<li>
							- TWO QUESTIONS TO ASK YOURSELF WHEN BUYING TECHNOLOGY FOR THE
							CLASSROOM
						</li>
						<li>- FREE WINDOWS 10 UPGRADE DEADLINE (JULY 29, 2016)</li>
						<li>- AFFORDABLE IT SUPPORT</li>
					</ul>
				</div>
			</div>
		</>
	)
}
