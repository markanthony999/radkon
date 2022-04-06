import Footer from './Footer'
import Pressage from './Pressage'
import Slider from './Slider'

const Layout = ({ children }) => {
	return (
		<>
			{/* <Slider />
			<Pressage /> */}
			{children}
			<Footer />
		</>
	)
}

export default Layout
