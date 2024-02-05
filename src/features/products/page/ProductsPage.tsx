import { Box, Button, FormControl, MenuItem, Pagination, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import List from "../components/List/List";
import "../style/Products.scss";
import useAppSelector from "../../../common/hooks/useAppSelector";
import useAppDispatch from "../../../common/hooks/useAppDispatch";
import { filterProducts, getAllProducts, sortProducts, sortProductsByPrice } from "../productsReducer";
import { getAllCategories } from "../../categories/categoriesReducer";

const Products = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const query = new URLSearchParams(location.search);
    const catId = query.get("category") || "";
    const { categories } = useAppSelector((state) => state.categoriesReducer);

    const [maxPrice, setMaxPrice] = useState(0);
    const [selectedSubCats, setSelectedSubCats] = useState<string[]>([]);
    const [sort, setSort] = useState("asc");
    const [limit, setLimit] = useState("all");
    const { products, loading } = useAppSelector((state) => state.productsReducer);
        
    useEffect(() => {
        dispatch(getAllProducts({
            page: 1,
            limit: limit
        }));
    }, [dispatch, limit]);

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    useEffect(() => {
        dispatch(filterProducts(selectedSubCats));
    }, [dispatch, selectedSubCats]);

    const handleLimitChange = (e: SelectChangeEvent) => {
        e.preventDefault();
        setLimit(e.target.value);
    }

    const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.target.value;
        if (value === "desc"){
            dispatch(sortProducts("desc"));
        } else {
            dispatch(sortProducts("asc"));
        }
    }

    const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isChecked: boolean = e.target.checked;

        setSelectedSubCats(
        isChecked
            ? [...selectedSubCats, value] :
            selectedSubCats.filter((item) => item !== value)
        );
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMaxPrice(parseInt(value));
        dispatch(sortProductsByPrice(parseInt(value)));
    };

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                <h2>Product Categories</h2>
                {categories?.map((item, index) => (
                    <div className="inputItem" key={`${item._id}${index}`}>
                        <input
                            type="checkbox"
                            id={item._id}
                            value={item._id}
                            onChange={handleCheckedChange}
                        />
                        <label htmlFor={item.name}>{item.name}</label>
                    </div>
                ))}
                <Button
                className="filterBtn"
                variant="contained"
                onClick={() => navigate("/categories")}
                >
                    Manage Categories
                </Button>
                </div>
                <div className="filterItem">
                <h2>Filter by price</h2>
                <div className="inputItem">
                    <span>0</span>
                    <input
                    type="range"
                    min={0}
                    max={1000}
                    onChange={handlePriceChange}
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
                    <Button className="addProduct" onClick={() => navigate("/addProduct")}>
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
                        <MenuItem value={"5"}>5</MenuItem>
                        <MenuItem value={"10"}>10</MenuItem>
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
                <List products={products} loading={loading} catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
        </div>
    );
};

export default Products;