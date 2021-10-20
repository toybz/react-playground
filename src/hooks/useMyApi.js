import { useEffect, useState, useRef } from "react";

// Mock async operation
const initializeApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("API Initialised Successfully");
      resolve(true);
    }, 10000);
  });
};

export const useMyAPI = (onInitialized) => {
  const callback = useRef(onInitialized);

  const updateCallback = (newCallback) => {
    callback.current = newCallback;
  };

  useEffect(() => {
    initializeApi().then(() =>{
      callback.current()
    });
  }, []);

  return {
    updateCallback,
  };
};
