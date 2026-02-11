import { useContext } from "react";

const useLoading = () => {
  const context = useContext();
  
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
}

export default useLoading;