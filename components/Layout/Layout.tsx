import Header from "../Header/Header";

interface Layout {
  children: React.ReactNode;
}

const Layout = ({ children }: Layout) => {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
