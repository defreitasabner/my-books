import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import GlobalStyle from "../src/themes/GlobalStyle";
import "../src/themes/reset.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <Header />
            <Component { ...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp;