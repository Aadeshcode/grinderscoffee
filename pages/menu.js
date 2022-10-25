import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
const Menu = () => {
  const { data, isLoading, isError, error } = useQuery("getMenu", () =>
    axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/menu`)
  );
  return (
    <motion.div>
      <div className="page-left">
        <div className="p-5 my-5">
          <h1 className="display-6 px-5">Food Items</h1>
          {data?.data?.map(
            (menu) =>
              menu.category === "Food" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 3 }}
                  key={menu.name}
                  className="menu-wrapper my-5 p-5"
                >
                  <h2 className="font-caps font-bold">
                    {menu.name.toUpperCase()}
                  </h2>
                  <p className="py-3">{menu.description}</p>
                  <p className="py-0 font-bold font-caps">Rs. {menu.price}</p>
                </motion.div>
              )
          )}
        </div>
      </div>
      <div className="page-right">
        <div className="my-5 p-5">
          <h1 className="display-6 px-5">Coffee Items</h1>
          {data?.data?.map(
            (menu) =>
              menu.category === "Coffee" && (
                <div key={menu.name} className="menu-wrapper my-5 p-5 rounded">
                  <h2 className="font-caps font-bold">
                    {menu.name.toUpperCase()}
                  </h2>
                  <p className="py-3">{menu.description}</p>
                  <p className="py-0 font-bold font-caps">Rs. {menu.price}</p>
                </div>
              )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
