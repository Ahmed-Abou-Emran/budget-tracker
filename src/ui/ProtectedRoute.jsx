import React from "react";
import { useNavigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  React.useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, [userData, navigate]);

  return <>{children}</>;
}

export default ProtectedRoute;
