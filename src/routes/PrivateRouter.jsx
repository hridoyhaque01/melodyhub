import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRouter({ children }) {
  const { user } = useSelector((state) => state.users);
  const location = useLocation();
  console.log(user);
  if (user?.email) {
    return <>{children}</>; // Wrap children in JSX syntax
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRouter;
