import React from 'react';

const InforPr = (props) => {
    if(props.idIn === null){
     return (
         <div></div>
     )
    }
    else{
    return (
    
        <div className = "infor-product">
                    <div className="product-top">
                        <h1>if mode</h1>
                        <p>Overview</p>
                    </div>
                    <div className="product-img">
                    <img src={ImgBike} alt=" " />
                    </div>
                    <div className="product-bottom">
                        <div className="product-bottom-price">
                            <div className= "price">
                            <h1>price</h1>
                             <p>$50.99</p>
                            </div>
                            <button className="addtocart"><IoIosAdd /><p>add to cart</p></button>
                        </div>
                </div>
        </div>
    );
    }
}

export default InforPr;
