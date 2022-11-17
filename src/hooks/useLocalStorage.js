import { useState, useEffect } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;
        const localStorageItem = localStorage.getItem(itemName);

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else parsedItem = JSON.parse(localStorageItem);

        setItem(parsedItem);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return { item, error, loading, setItem: saveItem };
};

export default useLocalStorage;
