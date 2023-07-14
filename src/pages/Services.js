import React from "react";

const Services = () => {
  return (
    <div>
      <div className=" grid lg:grid-cols-2 justify-center gap-5 px-10 mt-5">
        <div>
          <h1 className="text-4xl font-bold mt-5">Services Pages </h1>
          <p className="text-sm text  border-b-2 border-red-500 w-[300px] mt-5 text-green-700">
            WHO WE ARE
          </p>
          <h1 className="text-4xl font-bold mt-2">
            A web design studio with a difference.
          </h1>
          <p className="text-lg mt-2 pb-3">
            Pages Studio helps Irish small to medium sized businesses enhance
            their online presence, increase sales, and generate new leads.
          </p>
          <p className="text-lg mt-2 pb-3">
            Our websites are custom made to the needs of each client, and
            designed to modern standards – always with best-practice in mind.
          </p>
          <p className="text-lg mt-2 pb-3">
            Our websites are custom made to the needs of each client, and
            designed to modern standards – always with best-practice in mind.
          </p>
          <p className="text-lg mt-2 pb-3">
            Our websites are custom made to the needs of each client, and
            designed to modern standards – always with best-practice in mind.
          </p>
        </div>
        <img
          className="w-[100%] h-[55vh]"
          src="https://pages.ie/wp-content/uploads/2020/08/web-designer-offaly-athlone-tullamore-westmeath.png"
          class="img-fluid rounded-top"
          alt=""
        />
      </div>
      <div className=" bg-gray-200 w-[100%] h-[60vh] px-10">
        <h1 className="text-center text-4xl border-b-2 border-gray-500 pb-5 pt-5 ">
          Some of our previous clients
        </h1>
        <div className="flex lg:flex justify-around mt-5">
          <div>
            <p>Galway Airport</p>
            <p>Coldmove Ltd</p>
            <p>Wedding Pages Ltd</p>
          </div>
          <div>
            <p>Brawn Boats</p>
            <p>Egan Bros Construction Ltd</p>
            <p>Donnelly Troy Engineering Ltd</p>
          </div>
          <div>
            <p>Radon Mitigation</p>
            <p>Tyrrelstown House</p>
            <p>Cunamh Consulting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
