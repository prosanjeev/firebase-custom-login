// useBeforeUnload.js
import { useEffect } from "react";

const useBeforeUnload = (callback) => {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      callback();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [callback]);
};

export default useBeforeUnload;
