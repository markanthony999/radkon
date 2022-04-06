import Navbar from './Navbar'
import Image from 'next/image'

function Header() {
	return (
		<div className="container">
			<Navbar />
			<style jsx>{`
				.container {
					background-image: url('/img3.jpg');
					background-position: center;
					background-size: cover;
					background-repeat: no-repeat;
					height: 800px;
					width: 100wv;
					animation: sweep 1.25s ease-in;
				}
				@keyframes sweep {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
			`}</style>
		</div>
	)
}

export default Header
