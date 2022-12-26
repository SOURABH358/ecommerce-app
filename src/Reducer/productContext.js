import { createContext, useContext, useState } from "react"

const ProdContext = createContext()
export default function ProdContextWrapper({children}){
    const [currentProd, setCurrentProd] = useState(0)
    
    return(
        <ProdContext.Provider
        value={{currentProd, setCurrentProd}}>
            {children}
        </ProdContext.Provider>
    )
}
function GetProdContext(){
    return useContext(ProdContext)
}
export {ProdContext, GetProdContext}