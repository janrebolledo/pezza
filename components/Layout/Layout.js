import Header from "./Header";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <link
        href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900"
        rel="stylesheet"
      />
    </>
  );
}

export default Layout;
