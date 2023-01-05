import Nav from "../components/nav"
import { Link } from "react-router-dom";
import stocksData from "../stocksData"

const Dashboard = (props) => {

    return (
        <div>
            <Nav />
            <h1>My Stock List</h1>
            <h2>Click on "Company Name" for Stock Information </h2>
            <br></br>
            <table>
                <tr>
                    <th className="th-name"> Company Name</th>
                    <th>Price</th>
                    <th>Change</th>
                </tr>
                {stocksData.map((stock,index) => {
                    const { name, symbol, lastPrice, open, change } = stock;
                    if (change < 0) {
                        return(
                            <tr>
                                <th>
                                    <Link className="link-th th-name" to={`/Stock/${symbol}`}>
                                    {name}
                                    </Link>
                                </th>
                                <th>{lastPrice}</th>
                                <th className="font-red">{(lastPrice - open).toFixed(2)} ({(change).toFixed(2)} %)</th>
                            </tr>
                        )
                    } else {
                        return(
                            <tr>
                                <th>
                                    <Link className="link-th th-name" to={`/Stock/${symbol}`}>
                                    {name}
                                    </Link>
                                </th>
                                <th>{lastPrice}</th>
                                <th className="font-green">{(lastPrice - open).toFixed(2)} ({(change).toFixed(2)} %)</th>
                            </tr>
                        )
                    }
                })}
            </table>
        </div>
    )
}

export default Dashboard;