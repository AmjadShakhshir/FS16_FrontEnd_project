import { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAppSelector from "../hooks/useAppSelector";
import { AdminRouteProps } from "../types/AdminRouteProps";
import { AppState } from "../store";

const ProtectedRoute = ({ element, isAdmin }: AdminRouteProps): ReactElement | null => {
    const navigate = useNavigate();
    const role = useAppSelector(
        (state: AppState) => state.authReducer.currentUser?.role
    );
    const isLoggedIn = useAppSelector(
        (state: AppState) => state.authReducer.isLoggedIn
    );
    useEffect(() => {
        if (!isLoggedIn) {
        navigate("/login");
        } else if (role !== "ADMIN" && isAdmin) {
        navigate("/");
        }
    }, [role, navigate, isLoggedIn, isAdmin]);

    return element;
};

export default ProtectedRoute;