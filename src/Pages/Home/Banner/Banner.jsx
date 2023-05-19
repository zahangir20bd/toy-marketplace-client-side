const Banner = () => {
  return (
    <div
      className="hero min-h-fit"
      style={{
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/000/454/904/original/vector-poster-design-for-toys.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="md:my-20">
          <h1 className="mb-6 text-5xl font-bold">Welcome To Toy Galaxy</h1>
          <p className="mb-5 md:px-48">
            Toy Galaxy, where dreams come to life! Explore a universe of
            imagination and wonder as we transport you to a galaxy of toys. From
            classic favorites to the latest trends, our celestial collection
            will ignite your childlike spirit. Join us on this extraordinary
            journey, where adventure awaits at every turn. Unleash your inner
            explorer and embark on an interstellar quest for fun. Toy Galaxy:
            Ignite your imagination, one toy at a time!
          </p>
          <button className="btn btn-warning bg-orange-500 hover:bg-orange-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
