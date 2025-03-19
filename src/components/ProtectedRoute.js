import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLogIn } = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  if (isLogIn) return children;
  else return <Navigate to="/signin" />;
};

export default ProtectedRoute;
