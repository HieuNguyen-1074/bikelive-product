
import React ,{ useState } from 'react';
import Carousel from 'react-elastic-carousel'
import '../css/Product.css';
import Pr from './Pr'


const Product  = (props) =>{
    
     
        return (
            
            <Carousel itemsToShow={4}  className = "carousel" >
              
            <Pr data = {0}  />
            <Pr data = {1} />
            <Pr data = {2} />
            <Pr data = {3} />
            <Pr data = {4} />
            <Pr data = {5} />
            <Pr data = {6} />
            <Pr data = {7} />
            </Carousel>
        );

}

export default Product;

