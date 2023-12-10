import { useEffect } from "react";

import Card from "../../../../common/components/Card/Card";
import useAppDispatch from "../../../../common/hooks/useAppDispatch";
import "./FeaturedProducts.scss";
import useAppSelector from "../../../../common/hooks/useAppSelector";
import { getAllProducts } from "../../productsReducer";

const FeaturedProducts = ({ type }: {type:string}) => {
    const { products } = useAppSelector((state) => state.productsReducer);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(getAllProducts({
            page: 1,
            limit: 4,
        }));
    }, [dispatch]);

    return (
        <div className="featuredProducts">
        <div className="top">
            <h1>{type} products</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas.
            </p>
        </div>
        <div className="bottom">
            {products.slice(0, 4).map((product, index) => (
                <Card key={`${product._id} + ${index}`} product={product} />
            ))}
        </div>
        </div>
    );
};

export default FeaturedProducts;
