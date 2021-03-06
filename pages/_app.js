import 'bootstrap/dist/css/bootstrap.min.css'
// import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.css'
import '../styles/navbar.scss'

// See https://github.com/FortAwesome/react-fontawesome#integrating-with-other-tools-and-frameworks
// config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp
