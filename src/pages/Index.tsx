
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the splash screen
    navigate("/");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-zeb-purple">Loading Zeb4Her...</h1>
        <p className="text-xl text-gray-600">Redirecting to application</p>
      </div>
    </div>
  );
};

export default Index;
