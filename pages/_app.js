import '../styles/global.css'
import Layout from '../components/layout/layout'

function MyApp({ component, pageProps }) {
    return (
        <Layout>
            <component {...pageProps} />
        </Layout>
    )
}

export default MyApp