import styles from '../styles/Home.module.css'
import Header from '../components/Header2'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Articles({ posts }) {
	const [listOfPosts, setListOfPosts] = useState(posts)

	const loadMore = async () => {
		const res = await fetch(
			'https://jsonplaceholder.typicode.com/posts?_limit=10&&_start=10'
		)
		const posts = await res.json()
		setListOfPosts((value) => [...value, ...posts])
	}

	return (
		<div>
			<Header />
			<h1>Articles</h1>
			<div>
				{listOfPosts.map((post, index) => {
					return (
						<Link href={`/${post.id}`} key={index} passHref>
							<h2 key={index}>
								{post.id}.{post.title}
							</h2>
						</Link>
					)
				})}
			</div>
			<button onClick={loadMore}>Load More</button>
		</div>
	)
}

export async function getStaticProps(context) {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=10'
	)
	const posts = await res.json()

	return {
		props: { posts }, // will be passed to the page component as props
	}
}

// export default function Articles({ posts }) {
// 	return (
// 		<>
// 			<Header />
// 			<h1>Articles (links) </h1>
// 			<div className={styles.container}>
// 				<div className={styles.child}>
// 					<ul>
// 						<li>- CYBER CRIMINALS GOING AFTER SMALL BUSINESSES</li>
// 						<li>- BENEFITS OF USING A MANAGED SERVICE PROVIDER</li>
// 						<li> - WHEN IS THE RIGHT TIME TO UPGRADE YOUR COMPUTER FLEET?</li>
// 						<li>
// 							- TWO QUESTIONS TO ASK YOURSELF WHEN BUYING TECHNOLOGY FOR THE
// 							CLASSROOM
// 						</li>
// 						<li>- FREE WINDOWS 10 UPGRADE DEADLINE (JULY 29, 2016)</li>
// 						<li>- AFFORDABLE IT SUPPORT</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</>
// 	)
// }
