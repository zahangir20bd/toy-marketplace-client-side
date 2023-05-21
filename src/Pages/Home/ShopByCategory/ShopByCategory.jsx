import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SportsCar from "./SportsCar/SportsCar";
import RegularCar from "./RegularCar/RegularCar";
import MiniPoliceCar from "./MiniPoliceCar/MiniPoliceCar";
import Truck from "./Truck/Truck";

const ShopByCategory = () => {
  const [allToysData, setAllToysData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setAllToysData(data));
  }, []);

  // Filter all Sports Cars from all Cars
  const sportsCars = allToysData.filter(
    (toyData) => toyData.sub_category === "Sports Car"
  );

  //   Filter All Regular Cars from all Cars
  const regularCars = allToysData.filter(
    (toyData) => toyData.sub_category === "Regular Car"
  );

  //   Filter all mini police cars from all cars

  const miniPoliceCars = allToysData.filter(
    (toyData) => toyData.sub_category === "Mini Police Car"
  );

  //   Filter all Trucks from all cars

  const trucks = allToysData.filter(
    (toyData) => toyData.sub_category === "Truck"
  );

  return (
    <div className="my-32 px-10">
      <h2 className="text-4xl text-center font-bold mb-16">Shop By Category</h2>
      <Tabs>
        <TabList>
          <Tab>Sports Car</Tab>
          <Tab>Regular Car</Tab>
          <Tab>Mini Police Car</Tab>
          <Tab>Truck</Tab>
        </TabList>

        <TabPanel>
          <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sportsCars.map((sportsCar) => (
              <SportsCar key={sportsCar._id} sportsCar={sportsCar}></SportsCar>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {regularCars.map((regularCar) => (
              <RegularCar
                key={regularCar._id}
                regularCar={regularCar}
              ></RegularCar>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {miniPoliceCars.map((miniPoliceCar) => (
              <MiniPoliceCar
                key={miniPoliceCar._id}
                miniPoliceCar={miniPoliceCar}
              ></MiniPoliceCar>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {trucks.map((truck) => (
              <Truck key={truck._id} truck={truck}></Truck>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
