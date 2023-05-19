import { useEffect } from "react";

const useDynamicTitle = (title) => {
  useEffect(() => {
    document.title = `Toy-Galaxy | ${title}`;
  }, [title]);
};

export default useDynamicTitle;
