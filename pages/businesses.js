import Image from 'next/image'
import Header from '../components/Header1'
import styles from '../styles/Business.module.css'

export default function Businesses() {
	return (
		<>
			<Header />
			<h1>HELPING BUSINESSES</h1>
			<div className={styles.container}>
				<div className={styles.child}>
					<p>
						Computers have changed the way we do business whether we are
						offering a service or selling goods. Today’s companies have to stay
						up to date with technology to provide a better service, as well as
						cut on costs of doing business. A well-designed network can help
						companies improve their productivity and lower the coasts. Newer
						computers can provide a faster computation power as well as less
						worry of downtime.
					</p>

					<p>
						Furthermore, all the data that the company has is valuable. So data
						backup is an important part of doing business, as well as keeping
						the data secure. A company can be devastated when most, if not all,
						of their data is lost due to a hard drive failure.
					</p>
				</div>

				<div className={styles.child}>
					<p>
						Radkon is devoted in providing the best quality of products and
						installation. We will personally design a network that will fit your
						need, as well as provide you with different models of computers to
						choose from. We can also set up backup systems that can store your
						files securely on- or off-site. With most systems data can be set to
						back up every time a change was made to the file, or on a set
						schedule. This will ensure that your files are backed up in a timely
						manner.{' '}
					</p>

					{/* <h1>PREMIUM SERVICES</h1>
				<h1>IT Support 24/7 IT SUPPORT - MANAGED SERVICES</h1>
				<p>
					{' '}
					Making sure that your network and devices stay up to date is important
					for both security and performance. Maintaining a network as wimport
					Accordion_1 from './../components/accordion/index'; ell as deimport
					Example from './../components/Accordion'; vices can be challenging and
					costly. Radkon offers affordable monthly plans to help you maintain
					your systems. Let us worry about your network and devices, so that you
					can focus on running your institution. From updating operating systems
					to answering your employees IT questions, Radkon is ready to help you.
				</p>
				<ul>
					<li>- 24/7 Helpdesk </li>
					<li> - Remote Support</li>
					<li> - Onsite Support</li>
					<li>- Worksation and Server Management</li>
					<li> - Real-Time Server Monitoring</li>
					<li> - Network Management</li>
					<li> - System Administrator Services</li>
					<li> - Executive Reporting</li>
					<li> - Automation and Scripting Capabilities</li>
					<li> - And Much More</li>
				</ul>
				<p>
					We are a managed service provider (MSP) who utilizes remote
					capabilities, but we also offer on site support. For more information
					and for pricing please call our support team at +1 877 224 6601.{' '}
				</p> */}
				</div>
				<div className="container">
					<h1>WHAT CAN RADKON DO FOR YOU</h1>
				</div>
				<div className="AccordionContainer">
					<details closed>
						<summary>24/7 IT SUPPORT - MANAGED SERVICES</summary>
						<p>
							Making sure that your network and devices stay up to date is
							important for both security and performance. Maintaining a network
							as well as devices can be challenging and costly. Radkon offers
							affordable monthly plans to help you maintain your systems. Let us
							worry about your network and devices, so that you can focus on
							running your institution. From updating operating systems to
							answering your employees IT questions, Radkon is ready to help
							you.
						</p>
						<ul>
							<li>- 24/7 Helpdesk </li>
							<li>- Remote Support</li>
							<li>- Onsite Support</li>
							<li>- Worksation and Server Management</li>
							<li>- Real-Time Server Monitoring</li>
							<li>- Network Management</li>
							<li>- System Administrator Services</li>
							<li>- Executive Reporting</li>
							<li>- Automation and Scripting Capabilities</li>
							<li>- And Much More</li>
						</ul>
						<p>
							We are a managed service provider (MSP) who utilizes remote
							capabilities, but we also offer on site support. For more
							information and for pricing please call our support team at +1 877
							224 6601.
						</p>
					</details>
					<details closed>
						<summary>MANAGED FIREWALL SERVICES</summary>
						<p>
							Radkon will monitor and support your internet connections to your
							network, while providing enterprise security features for an
							affordable price. No need to purchase expensive hardware, it’s
							included and configured in this package cost. If your internet
							connection goes down, Radkon will contact the internet provider
							and work with them to restore your internet connection.
						</p>
						<ul>
							<li>
								- Ability to combine the speeds of multiple internet providers.ⴕ
							</li>
							<li>
								- Automatic connection to a different internet provider in the
								event of your primary internet loss ⴕ(3G/4G/5G connection
								available)
							</li>
							<li>- 24/7 Monitoring with email alerts. </li>
							<li>
								- Ability to insure primary equipment with warm spare equipment
								for additional cost.
							</li>
							<li>- Stateful firewall </li>
							<li>- Network analysis</li>
							<li>- Content filtering</li>
							<li>- Intrusion detection and prevention</li>
							<li>
								- Advanced Malware Protection (Block infected files from
								downloading to your computers).
							</li>
							<li>
								- Application prioritization (example: IP Phones have priority
								traffic on the network)
							</li>
							<li>
								- VPN Connections (Connect all your buildings securely into one
								network)
							</li>
							<li>
								- Client VPN (provide a secure connection for your remote
								employees to connect from home)
							</li>
						</ul>
					</details>
					<details closed>
						<summary>CYBERSECURITY - SECURITY AS A SERVICE</summary>
						<ul>
							<li>- Security Risk Assessment</li>
							<li> - 24/7 Cybersecurity monitoring and mitigation </li>
							<li>- Intrusion Detection</li>
							<li> - Automated Software Patch Deployment</li>
							<li>- Implement Multi-Factor Authentication</li>
							<li>- Security Awareness Training</li>
							<li> - Darkweb Monitoring</li>
						</ul>

						<p>Radkon monitors across 3 attack pillars:</p>
						<ol>
							<li>
								Endpoint - Windows & macOS event log monitoring, breach
								detection, malicious files and processes, threat hunting,
								intrusion detection, 3rd party NGAV integrations and more.
							</li>
							<li>
								Network - Firewall and edge device log monitoring integrated
								with threat reputation, whois and DNS information.
							</li>
							<li>
								Cloud - Microsoft 365 security event log monitoring, Azure AD
								monitoring, Microsoft 365 malicious logins, Secure Score.
								Integrates with Proof Point and other spam filtering services.
							</li>
						</ol>
					</details>
					<details closed>
						<summary>BACKUP SOLUTIONS</summary>
						<p>
							Radkon provides an on site device that stores all your backups.
							After completing a backup of your computers or servers to the
							device, the backups are encrypted and send to the cloud for
							storage. Included is a once-a-year recovery test and
							virtualization of your computer(s) or server(s) in the cloud. *30
							Day per year cloud virtualization of the backup machines.
						</p>
						<p>
							In the event your servers experience hardware failure, we can
							virtualize the damaged servers in the cloud. Providing minimum
							downtime during your hardware repair. Radkon can also provide
							onsite virtualization. Unlike the cloud virtualization we utilize
							the backup device as a host. On it we spin the latest backup of
							the damaged server. Once the server hardware is repaired, the
							current image running on the backup device gets transferred to the
							fixed server. Minimizing downtime. All settings and IP remain the
							same.
						</p>
					</details>

					<style jsx>
						{`
							.AccordionContainer {
								width: 80vw;
								margin-top: 2rem;
								margin: auto;
								margin-bottom: 5rem;
								border: 1px solid #f82e07;
								box-shadow: 5px 2px 2px #f82e07;
								border-radius: 10px;
								padding: 0.5rem;
								padding-bottom: 1rem;
								font: 'Nunito';
							}
							summary{
								font-weight:bold;
								color:#f82e07;
								font-size:24px;
							}
							details {
								font-size: 18px;
								height: auto;
								border-radius: 5px;
								padding: 1rem;
								cursor: pointer;
								margin-bottom: 1rem;
								}
								
							// details li {
							// 	list-style: none;
							// }
							details[open] {
								max-height: 99rem;
								animation: sweep 2.5s ease-in-out;
							}
							@keyframes sweep {
								0% {
									opacity: 0;
								
								100% {
									opacity: 1;
								}
							}

							h1,
							summary {
								font-size: 1.75rem;
								margin-bottom: 0.875rem;
								
								}
							
						`}
					</style>
				</div>
			</div>
		</>
	)
}
