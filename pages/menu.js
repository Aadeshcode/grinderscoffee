import axios from "axios";
import React, { useState } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const Menu = () => {
  const { data } = useQuery("getMenu", () =>
    axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/menu`)
  );
  const [selected, setSelected] = useState("coffee");
  const activeNav = useSelector((state) => state.navActive);
  return (
    <>
      <motion.div>
        <div className="page-left" style={activeNav ? { display: "none" } : {}}>
          <div className="p-5 my-5">
            <h1 className="display-6 px-5">Food Items</h1>
            {data?.data?.map(
              (menu) =>
                menu.category === "Food" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
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
        <div className="page-right d-lg-block d-none">
          <div className="my-5 p-5">
            <h1 className="display-6 px-5">Coffee Items</h1>
            {data?.data?.map(
              (menu) =>
                menu.category === "Coffee" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    key={menu.name}
                    className="menu-wrapper my-5 p-5 rounded"
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
        <div className="page-right mt-5 d-block d-lg-none">
          <div
            className="button-wrapper d-flex p-2 mx-4"
            style={{
              backgroundColor: "#f1f1f1",
              borderRadius: "30px",
              position: "fixed",
              width: "80%",
              top: "10px",
              left: "50%",
              transform: "translate(-57%,0)",
              zIndex: 100000000099999,
            }}
          >
            <button
              style={{
                backgroundColor: selected === "coffee" ? "white" : "",
                borderRadius: "30px",
                width: "50%",
                transition: "all 1s ease",
              }}
              onClick={() => setSelected("coffee")}
              className="mx-auto p-2 font-caps"
            >
              COFFEE
            </button>
            <button
              style={{
                backgroundColor: selected === "food" ? "white" : "",
                borderRadius: "30px",
                width: "50%",
                transition: "all 1s ease",
              }}
              onClick={() => setSelected("food")}
              className="mx-auto p-1 font-caps"
            >
              FOOD
            </button>
          </div>
          {selected === "coffee" && (
            <div className="my-5 p-0">
              {data?.data?.map(
                (menu) =>
                  menu.category === "Coffee" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      key={menu.name}
                      className="menu-wrapper my-5 p-3 rounded"
                    >
                      <h2 className="font-caps font-bold">{menu.name}</h2>
                      <p className="py-3">{menu.description}</p>
                      <p className="py-0 font-bold font-caps">
                        Rs. {menu.price}
                      </p>
                    </motion.div>
                  )
              )}
            </div>
          )}
          {selected === "food" && (
            <div className="my-5 p-0">
              {data?.data?.map(
                (menu) =>
                  menu.category === "Food" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      key={menu.name}
                      className="menu-wrapper my-5 p-3 rounded"
                    >
                      <h2 className="font-caps font-bold">{menu.name}</h2>
                      <p className="py-3">{menu.description}</p>
                      <p className="py-0 font-bold font-caps">
                        Rs. {menu.price}
                      </p>
                    </motion.div>
                  )
              )}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Menu;

export async function getStaticProps() {
  try {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery("getMenu", async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_DOMAIN}/menu`
      );
      return data;
    });

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      revalidate: 1,
    };
  } catch (error) {
    return { props: { data: {} }, revalidate: 1 };
  }
}
