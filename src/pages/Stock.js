import Nav from "../components/nav"
import {useLoaderData} from "react-router-dom";

const Stock = (props) => {
    const stock = useLoaderData();
    console.log("stock", stock)

    return (
        <div>
            <Nav />
            <h1>Stock Information for: {stock.name}</h1>
            <table>
                <tbody>
                    <tr> 
                        <td className="stock-td stock-td-r"><b>Symbol:</b></td>
                        <td className="stock-td">{stock.symbol}</td>
                    </tr>
                    <tr> 
                        <td className="stock-td stock-td-r"><b>Last Price:</b></td>
                        <td className="stock-td">{stock.lastPrice}</td>
                    </tr>
                    <tr> 
                        <td className="stock-td stock-td-r"><b>Change:</b></td>
                        <td className="stock-td">{(stock.change).toFixed(2)}%</td>
                    </tr>

                    <tr> 
                        <td className="stock-td stock-td-r"><b>High:</b></td>
                        <td className="stock-td" >{stock.high}</td>
                    </tr>
                    <tr> 
                        <td className="stock-td stock-td-r"><b>Low:</b></td>
                        <td className="stock-td">{stock.low}</td>
                    </tr>
                    <tr> 
                        <td className="stock-td stock-td-r"><b>Open:</b></td>
                        <td className="stock-td">{stock.open}</td>
                    </tr>

                </tbody>
            </table>



        </div>
    )
}

export default Stock;