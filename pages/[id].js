import React from 'react'
import Slider from './../components/Slider'
import Pressage from '../components/Pressage'

export default function PostDetail({ post }) {
	if (!post) {
		return <h1>Loading...</h1>
	}
	return (
		<div>
			<Slider />
			<Pressage />
			<h1>
				{post.id} {post.title}
			</h1>
			<p>{post.body}</p>
		</div>
	)
}

export async function getStaticPaths() {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=10'
	)
	const posts = await res.json()
	const paths = posts.map((post) => {
		return { params: { id: post.id.toString() } }
	})
	return {
		paths,
		fallback: 'blocking', // false or 'blocking'
	}
}

export async function getStaticProps(context) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
	)
	const post = await res.json()

	return {
		props: { post }, // will be passed to the page component as props
	}
}
