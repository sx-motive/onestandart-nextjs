import Header from "./header";
import Menu from "./menu";
import Outro from "./outro";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Outro />
      <Menu />
    </>
  );
}

export default Layout;
