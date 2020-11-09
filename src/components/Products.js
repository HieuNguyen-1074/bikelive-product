import React , {useState} from 'react';
import Header from './Header';
import InforPr from './InforPr';
import Product from './Product'
import '../css/Product.css';
const Products = () => {
    const [idIn , setIdIn] = useState(null);
    return (
        <div>
            <Header />
            <h1 className ="product-title">Product</h1>
            <Product setIdIn ={setIdIn} />
        </div>
    );
}

export default Products;
