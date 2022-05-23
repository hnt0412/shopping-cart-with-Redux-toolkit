import { CartIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../features/cartSlice";
import { useEffect } from "react";

const Navbar = () => {
    const {cartItems} = useSelector((store) => store.cart)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(calculateTotals())
    },[cartItems])
    const {amount} = useSelector((store) => store.cart)
    return (
        <nav>
            <div className="nav-center">
                <h3>V phone</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar