
//import '../styles/index.css'
import 'tailwindcss/tailwind.css'

type AppChartProps = {
  pageProps: any
  Component: any
}

import Layout from "../components/Layout";
export default function MyApp({ Component, pageProps }: AppChartProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
