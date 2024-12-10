import Header from "../components/Header"

interface Props{
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return (
        <div className="flex flex-col">
            <Header/>
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}

export default Layout