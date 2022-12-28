import { createContext, useContext, useState } from "react"

const ProdContext = createContext()
export default function ProdContextWrapper({children}){
    const [currentProd, setCurrentProd] = useState(0)
    const [currentCat, setCurrentCat] = useState('');
    return(
        <ProdContext.Provider
        value={{currentProd, setCurrentProd, currentCat, setCurrentCat}}>
            {children}
        </ProdContext.Provider>
    )
}
function GetProdContext(){
    return useContext(ProdContext)
}
export {ProdContext, GetProdContext}