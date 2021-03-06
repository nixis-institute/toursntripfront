import App, { Container } from "next/app";

function MyApp({ Component, pageProps }) {
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
}

export default MyApp;