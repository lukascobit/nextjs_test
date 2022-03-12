import Nav from "../components/Nav";
import "../styles/globals.css";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
