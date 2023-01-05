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
                <thead>
                    <tr>
                        <th className="th-name stock-th"> Company Name</th>
                        <th className="stock-th">Price</th>
                        <th className="stock-th">Change</th>
                    </tr>
                </thead>
                {stocksData.map((stock,index) => {
                    const { name, symbol, lastPrice, open, change } = stock;
                    if (change < 0) {
                        return(
                            <tbody>
                                <tr>
                                    <td className="td-dash" key={symbol}>
                                        <Link className="link-td td-name" to={`/Stock/${symbol}`}>
                                        {name}
                                        </Link>
                                    </td>
                                    <td className="td-dash" >{lastPrice}</td>
                                    <td className="td-dash font-red">{(lastPrice - open).toFixed(2)} ({(change).toFixed(2)} %)</td>
                                </tr>
                            </tbody>
                        )
                    } else {
                        return(
                            <tbody>
                                <tr>
                                    <td className="td-dash" key={symbol}>
                                        <Link className="link-td td-name" to={`/Stock/${symbol}`}>
                                        {name}
                                        </Link>
                                    </td>
                                    <td className="td-dash" >{lastPrice}</td>
                                    <td className="td-dash font-green" >{(lastPrice - open).toFixed(2)} ({(change).toFixed(2)} %)</td>
                                </tr>
                            </tbody>
                        )
                    }
                })}
            </table>
        </div>
    )
}

export default Dashboard;