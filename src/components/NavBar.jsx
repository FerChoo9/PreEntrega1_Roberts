
import "../scss/NavBar.scss";

export const Brand = () => {
    return(
        <>
            <div className="brand">
                <h1>FerChoo</h1>
                <div className="CartWidget">
                    <i class="fa-solid fa-cart-shopping fa-lg"></i>
                    <div className="notification"><h4>2</h4></div>
                </div>
            </div>
        </>
    )
}