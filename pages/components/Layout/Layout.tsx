import Header from "../Header/Header"

interface Layout {
    children: React.ReactNode;
}

const Layout = ({ children }: Layout) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout