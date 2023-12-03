import { useEffect } from "react";

import Card from "../Card/Card";
import useAppDispatch from "../../hooks/useAppDispatch";
import "./FeaturedProducts.scss";
import useAppSelector from "../../hooks/useAppSelector";
import { getAllProducts } from "../../redux/reducers/productsReducer";

const FeaturedProducts = ({ type }: {type:string}) => {
    const { products } = useAppSelector((state) => state.productsReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const images = [
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3259600/pexels-photo-3259600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];

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
                <Card key={product.id} product={product} image={images[index]} />
            ))}
        </div>
        </div>
    );
};

export default FeaturedProducts;
