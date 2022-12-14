import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://pezzavfx.com/favicon.ico"
        />
      </Head>
      <Header />
      {props.children}
      <Footer />
      <link
        href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:FILL@1"
      />
    </>
  );
}

export default Layout;
