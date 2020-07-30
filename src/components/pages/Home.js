import React, { useEffect } from 'react';
import ProductCard from '../common/ProductCard';
// import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProductsAction } from '../../actions/productActions';

function Home(props) {

    // const [products, setProduct] = useState([]);
    //////// This was needed with useState where we were fetching data directly from the API.
    //////// Your store should be fetching the data and you catch it with a dispatcher

    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(listProductsAction());
        // const fetchData = async () => {
        //     const {data} = await axios.get("/api/products");
        //     setProduct(data);
        // }
        // fetchData();
        //////// This was needed with useState where we were fetching data directly from the API.
        //////// Your store should be fetching the data and you catch it with a dispatcher

        return () => {
            // cleanup
        };
    }, [])

    return loading ? <div><img src="https://i.pinimg.com/originals/a2/dc/96/a2dc9668f2cf170fe3efeb263128b0e7.gif" alt="Loading"/></div> : 
        error ? <div>{"Error: " + error}</div> :
        <div className="container home">
            <h1 className="title is-2">Products</h1>
            <div className="columns is-multiline is-mobile">
                {
                    products.map(product =>
                        <ProductCard key={product._id} product={product} />
                    )
                }
            </div>
        </div>;
}

export default Home;