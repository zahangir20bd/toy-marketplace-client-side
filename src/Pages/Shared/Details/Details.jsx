import { useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  return (
    <div>
      <h2>Details of: {details.toy_name}</h2>
    </div>
  );
};

export default Details;
