const SportsCar = ({ sportsCar }) => {
  const { toy_name, price, toy_picture } = sportsCar;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={toy_picture} alt="Toy Picture" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{toy_name}</h2>
        <p className="text-xl"> Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-warning">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SportsCar;
