import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsFetch } from './productStates';
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';


const DashBoard = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    const { logout } = useAuth0();

    useEffect(() => {

        dispatch(getProductsFetch());

    }, [dispatch]);

    console.log(products);


    return (<div className='dashdiv'>

        <nav>
            <h1>PRODUCTS PAGE</h1>
            <button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
            <Link to='/'> <button >Back</button></Link>
        </nav>


        <div className='productsDispO'>
            {products.map((product) => {
                return (<div className='productsDispIn' key={product.id}>
                    <img src={product.image} alt='' height={200} width={200} />
                    <h4>{product.title}</h4>
                    <p><span>{product.rating.count}</span> <span>{product.rating.rate}</span></p>
                </div>)
            })
            }

        </div>


    </div>

    )

}

export default DashBoard