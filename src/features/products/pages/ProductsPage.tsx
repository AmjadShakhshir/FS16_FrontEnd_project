import { Box, Button, FormControl, MenuItem, Pagination, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import List from "../components/List/List";
import "../style/Products.scss";
import useAppSelector from "../../../common/hooks/useAppSelector";
import useAppDispatch from "../../../common/hooks/useAppDispatch";
import { getAllProducts, sortProducts } from "../productsReducer";

const Products = () => {
    const [maxPrice, setMaxPrice] = useState(1000);
    const [selectedSubCats, setSelectedSubCats] = useState<string[]>([]);
    const [sort, setSort] = useState("asc");
    const [limit, setLimit] = useState("10");
    const { catId } = useParams<{ catId: string }>();
    const { products } = useAppSelector((state) => state.productsReducer);
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(getAllProducts({
            page: 1,
            limit: 10,
        }));
    }, [dispatch]);

    const handleLimitChange = (e: SelectChangeEvent) => {
        setLimit(e.target.value);
    }

    const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === "desc"){
            dispatch(sortProducts("desc"));
        } else {
            dispatch(sortProducts("asc"));
        }
    }

    const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    <div className="inputItem" key={`${item._id}${index}`}>
                    <input
                        type="checkbox"
                        id={`${item._id}${index}`}
                        value={`${item._id}`}
                        onChange={handleCheckedChange}
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
                    onChange={(e) =>{
                        setSort("asc");
                        handleSort(e)
                    } }
                    />
                    <label htmlFor="asc">Price (Lowest first)</label>
                </div>
                <div className="inputItem">
                    <input
                    type="radio"
                    id="desc"
                    value="desc"
                    name="price"
                    onChange={(e) => {
                        handleSort(e)
                        setSort("desc");
                    }}
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Button className="addProduct" onClick={() => navigate("/products/addProduct")}>
                        Add Product
                    </Button>
                    <FormControl>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={limit}
                        label="Limit"
                        onChange={handleLimitChange}
                        >
                        <MenuItem value={"10"}>10</MenuItem>
                        <MenuItem value={"20"}>20</MenuItem>
                        <MenuItem value={"30"}>30</MenuItem>
                        <MenuItem value={"50"}>50</MenuItem>
                        <MenuItem value={"100"}>100</MenuItem>
                        <MenuItem value={"all"}>All</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Typography variant="h2" pb={2} fontSize="3em">
                    Products
                </Typography>
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
        </div>
    );
};

export default Products;