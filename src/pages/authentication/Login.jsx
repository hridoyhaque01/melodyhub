import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/shared/toast/Toast";
import { useGetTokenMutation } from "../../features/auth/authApi";
import { setUser } from "../../features/auth/authSlice";

function Login() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
  const [getToken, { isLoading, isError, isSuccess }] = useGetTokenMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const data = { email, password };
    console.log("hello");
    getToken({ clientId, clientSecret, data });
  };

  const checkTokenExpiration = () => {
    const tokenExpiration = localStorage.getItem("expireTokenIn");
    if (tokenExpiration && Date.now() > tokenExpiration) {
      localStorage.removeItem("token");
      localStorage.removeItem("expireTokenIn");
      localStorage.removeItem("user");
      dispatch(setUser({}));
    }
  };

  useEffect(() => {
    checkTokenExpiration();
  }, []);

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user?.email]);

  return (
    <section className="bg-authBg bg-cover bg-center bg-no-repeat object-contain h-screen w-full flex items-center justify-center">
      <div className="bg-dark-30 w-[28rem] max-w-md p-8 rounded-lg">
        <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="enter your email here..."
              autoComplete="false"
              className="w-full border border-fade bg-transparent outline-none p-3 rounded-lg text-white text-sm"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="enter your password here..."
              autoComplete="false"
              className="w-full border border-fade bg-transparent outline-none p-3 rounded-lg text-white text-sm"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-8 whitespace-nowrap bg-dark-50 text-white capitalize rounded-sm"
              disabled={isLoading}
            >
              sign in
            </button>
          </div>
        </form>
      </div>

      {isSuccess && (
        <Toast title="successfully logged in" type="success"></Toast>
      )}
      {isError && <Toast title="something went wrong!" type="error"></Toast>}
    </section>
  );
}

export default Login;
