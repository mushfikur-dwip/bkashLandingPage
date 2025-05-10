
// This is just a wrapper for our main HTML file
import { useEffect } from "react";

const Index = () => {
  // Redirect to the main HTML file
  useEffect(() => {
    window.location.href = "/index.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting to bKash E-Learning Fest...</h1>
        <p className="text-xl text-gray-600">Please wait...</p>
      </div>
    </div>
  );
};

export default Index;
