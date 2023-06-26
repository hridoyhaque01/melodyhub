import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function PrivateRouter({ children }) {
  // const { user } = useSelector((state) => state.users);
  const { isLoading } = useSelector((state) => state.users);
  const location = useLocation();

  console.log(isLoading);

  if (user?.email) {
    console.log("true");
    return children;
  }

  // return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
}

export default PrivateRouter;
