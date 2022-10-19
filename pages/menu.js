import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import ProductList from "../components/ProductList";

const Menu = () => {
  const { data, isLoading, isError, error } = useQuery("getMenu", () =>
    axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/menu`)
  );
  return (
    <div>
      <div className="page-left">
        <div className="p-5 my-5">
          <h1 className="display-6">Food Items</h1>
          {data?.data?.map(
            (menu) =>
              menu.category === "Food" && (
                <div key={menu.name} className="menu-wrapper my-5 p-5">
                  <h2 className="bold" style={{ fontWeight: "bold" }}>
                    {menu.name.toUpperCase()}
                  </h2>
                  <p className="py-3">{menu.description}</p>
                  <p className="py-0">Rs.{menu.price}</p>
                </div>
              )
          )}
        </div>
      </div>
      <div className="page-right">
        <div className="p-5 my-5">
          <h1 className="display-6">Coffee Items</h1>
          {data?.data?.map(
            (menu) =>
              menu.category === "Coffee" && (
                <div key={menu.name} className="menu-wrapper my-5 p-5">
                  <h2 className="bold" style={{ fontWeight: "bold" }}>
                    {menu.name.toUpperCase()}
                  </h2>
                  <p className="py-3">{menu.description}</p>
                  <p className="py-0">Rs.{menu.price}</p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
