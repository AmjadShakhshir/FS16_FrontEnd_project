import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Categories.scss";
import useAppSelector from "../../hooks/useAppSelector";
import { Category } from "../../../features/categories/types/Category";

const Categories = () => {
    const [ items, setItems ] = useState<Category[]>([]);
    const { categories } = useAppSelector((state) => state.categoriesReducer);
    useEffect(() => {
        setItems(categories);
    }, [categories]); 
    
    return (
        <div className="categories">
            {items.map((item) => (
                <div className="col">
                    <div className="row">
                            <div className="col-3" key={item._id}>
                                <img src={item.images[0]} alt={item.name} />
                                <button>
                                    <Link className="link" to={`/products`}>{item.name}</Link>
                                </button>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Categories;
