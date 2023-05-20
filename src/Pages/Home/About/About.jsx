/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold text-center">About Us</h2>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col md:mx-10 lg:flex-row-reverse gap-10">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/rMshHz3/61-VH6-BXu-Da-L-SX450-removebg-preview.png"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 ">
            <h1 className="text-5xl font-bold">
              Toy Galaxy: Ignite the Imagination with Toy Car Fun!
            </h1>
            <p className="pt-6">
              Welcome to Toy Galaxy, your premier destination for toy car
              enthusiasts of all ages. We are dedicated to bringing you a
              remarkable selection of high-quality and captivating toy cars that
              will spark the imagination and create endless adventures. From
              classic models to cutting-edge designs, we curate a collection
              that is sure to delight both collectors and children alike.
            </p>
            <p className="pt-4">
              At Toy Galaxy, safety and quality are our top priorities. We
              carefully select each toy car to ensure it meets the highest
              standards, providing you with peace of mind while your little ones
              embark on their thrilling playtime journeys. Our commitment to
              excellence extends beyond the products; we strive to offer an
              exceptional customer experience, making your shopping journey
              smooth, convenient, and enjoyable.
            </p>
            <p className="pt-4">
              Ignite your child's imagination with Toy Galaxy - the perfect
              destination for toy car enthusiasts. Discover our collection,
              experience exceptional customer service, and join our vibrant
              community today. Let the adventure unfold!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
