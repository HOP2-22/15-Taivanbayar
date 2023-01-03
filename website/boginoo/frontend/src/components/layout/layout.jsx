import { Footer } from "./footer"
import { Header } from "./header"

export const Layout = ({children}) => {
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            height:"94vh",
            padding:"3vh"
        }}>
        <Header />
        {children}
        <Footer />
        </div>
    )
}