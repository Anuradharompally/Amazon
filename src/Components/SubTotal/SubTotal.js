import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
function SubTotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        subtotal(o items):<strong>0</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                    </>
                )}
                deimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Procced to Checkout</button>
       </div>
    ) 
}

export default SubTotal
