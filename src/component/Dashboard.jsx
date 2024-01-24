
import Navbar from "./Navbar"
import Carousell from "./dashboard/Carousell"
import Product from "./dashboard/Product"

const Dashboard = () => {
    const data = JSON.parse(localStorage.getItem("Data")) || {}

    return (
        <>
            <Navbar />
            <Carousell />
            <Product />
        </>
    )
}

export default Dashboard