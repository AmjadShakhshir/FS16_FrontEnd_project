import List from "../../../common/components/List/List";
import "./Products.scss";
import useAppSelector from "../../../common/hooks/useAppSelector";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAppDispatch from "../../../common/hooks/useAppDispatch";
import { getAllProducts } from "../productsReducer";
import { Typography } from "@mui/material";

const Products = () => {
    const { catId } = useParams<{ catId: string }>();
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sort, setSort] = useState("");
    const [selectedSubCats, setSelectedSubCats] = useState<string[]>([]);
    const { products } = useAppSelector((state) => state.productsReducer);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isChecked: boolean = e.target.checked || false;

        setSelectedSubCats(
        isChecked
            ? [...selectedSubCats, value]
            : selectedSubCats.filter((item) => item !== value)
        );
    };
    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                <h2>Product Categories</h2>
                {products?.map((item, index) => (
                    <div className="inputItem" key={`${item._id} + ${index}`}>
                    <input
                        type="checkbox"
                        id={`${item._id} + ${index}`}
                        value={`${item._id}`}
                        onChange={handleChange}
                    />
                    <label htmlFor={item.name}>{item.name}</label>
                    </div>
                ))}
                </div>
                <div className="filterItem">
                <h2>Filter by price</h2>
                <div className="inputItem">
                    <span>0</span>
                    <input
                    type="range"
                    min={0}
                    max={1000}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    />
                    <span>{maxPrice}</span>
                </div>
                </div>
                <div className="filterItem">
                <h2>Sort by</h2>
                <div className="inputItem">
                    <input
                    type="radio"
                    id="asc"
                    value="asc"
                    name="price"
                    onChange={(e) => setSort("asc")}
                    />
                    <label htmlFor="asc">Price (Lowest first)</label>
                </div>
                <div className="inputItem">
                    <input
                    type="radio"
                    id="desc"
                    value="desc"
                    name="price"
                    onChange={(e) => setSort("desc")}
                    />
                    <label htmlFor="desc">Price (Highest first)</label>
                </div>
                </div>
            </div>
            <div className="right">
                <img
                className="catImg"
                src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                />
                <Typography variant="h2" pb={2} fontSize="3em">
                    Products
                </Typography>
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
            </div>
        </div>
    );
};

export default Products;
