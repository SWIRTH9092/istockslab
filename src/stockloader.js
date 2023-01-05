import stocksData from "./stocksData";

export const stockLoader = ({params}) => {
   const findSymbol = params.symbol;
    
   function checkSymbol(searchStockData) {
      if (searchStockData.symbol ===  findSymbol) {
         return searchStockData
      }
   }
   return (stocksData.find(checkSymbol, stocksData))

}