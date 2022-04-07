import Slider from '../components/Slider'
import Pressage from '../components/Pressage'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Index() {
	return (
		<>
			<Slider />
			<Pressage />
			<div className={styles.container}>
				<div className={styles.container}>
					<h1>ARE YOUR EMPLOYEES' CREDENTIALS ON THE DARK WEB?</h1>
				</div>
				<div className={styles.child}>
					<h2>WE NAVIGATE THE DARK WEB SO YOU DON'T HAVE TO!</h2>

					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit iusto
						numquam ipsa cum officiis nulla modi. Nesciunt dolorem ex, a nam
						quos accusantium consequatur temporibus quasi soluta explicabo rem
						atque mollitia exercitationem quod nostrum voluptatum rerum
						necessitatibus, magni molestiae voluptates! Molestiae doloremque
						similique cupiditate labore rem sed! Consectetur voluptatibus aut
						ipsa earum ea possimus nostrum molestiae? Quasi atque beatae
						voluptate ex, asperiores fugit maxime nulla omnis, at quod delectus
						sequi explicabo ratione in ipsum voluptas?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit iusto
						numquam ipsa cum officiis nulla modi. Nesciunt dolorem ex, a nam
						quos accusantium consequatur temporibus quasi soluta explicabo rem
						atque mollitia exercitationem quod nostrum voluptatum rerum
						necessitatibus, magni molestiae voluptates! Molestiae doloremque
						similique cupiditate labore rem sed! Consectetur voluptatibus aut
						ipsa earum ea possimus nostrum molestiae? Quasi atque beatae
						voluptate ex, asperiores fugit maxime nulla omnis, at quod delectus
						sequi explicabo ratione in ipsum voluptas?
					</p>
					<Link href="/darkweb/">
						<a>
							<button>READ MORE</button>
						</a>
					</Link>
				</div>
				<div className={styles.child}>
					<Image
						src="/crime.jpg"
						alt="Picture of the author"
						width={700}
						height={500}
					/>
				</div>
				<div className={styles.container}>
					<h1>WHY SHOULD I CHOOSE AN MSP FOR MY IT NEEDS?</h1>
				</div>
				<div className={styles.child}>
					<Image
						src="/img1.jpg"
						alt="Picture of the author"
						width={700}
						height={500}
					/>
				</div>

				<div className={styles.child}>
					<h2>BENEFITS OF USING A MANAGED SERVICE PROVIDER</h2>

					<p>
						A managed service provider has built relationships with companies
						and individuals in the technology sector. Whether it may be a
						manufacturer or a leading cybersecurity community. When you partner
						with an MSP your organization gains access to the resources of those
						organizations. We are always there! You should always have someone
						to call when problems arise on your network. You cannot afford any
						downtime because downtime means lost revenue.
					</p>
					<Link href="/msp/">
						<a>
							<button>READ MORE</button>
						</a>
					</Link>
				</div>
				<div className={styles.container}>
					<h1>
						CYBER CRIMINALS GOING AFTER SMALL BUSINESSES...ARE YOU PREPARED?
					</h1>
				</div>
				<div className={styles.child}>
					<h2>CAN YOUR BUSINESS SURVIVE AN ATTACK?</h2>

					<p>
						On July 27, 2021, the United State Senate held a hearing, regarding
						the ever-growing ransomware attacks on businesses in the United
						States. This highlights the fact that small businesses aren’t immune
						or excluded from being a target.To the ever-growing need of
						cybersecurity Radkon is offering an affordable package for small
						businesses to get them started on the basic security needs. Just as
						Jeremy Sheridan, director of the Secret Service Cyber Fraud Task
						Forces pointed out “Even simple steps – such as keeping operating
						systems, software, and applications up-to-date and patched, or
						making sure that anti-virus and anti-malware solutions automatically
						update and run regular scans can significantly raise an
						organization’s defensive posture.”
					</p>
					<p>
						Radkon goes a step further and includes 24/7 cybersecurity
						monitoring service with the basic package. By utilizing artificial
						intelligence and veteran cybersecurity experts. They monitor,
						isolate and remediate threats on your devices. During the initial
						implementation, Radkon will work with you on creating a timeline of
						your cybersecurity needs with an included risk assessment.
					</p>

					<Link href="/cyber-crime/">
						<a>
							<button>READ MORE</button>
						</a>
					</Link>
				</div>
				<div className={styles.child}>
					<Image
						src="/img2.jpg"
						alt="Picture of the author"
						width={700}
						height={500}
					/>
				</div>
			</div>
		</>
	)
}
