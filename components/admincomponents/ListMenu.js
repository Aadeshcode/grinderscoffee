import { Center } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ProductList from "../ProductList";
const ListMenu = () => {
  const { data, isLoading, isError, error } = useQuery("getMenu", () =>
    axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/menu`)
  );
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(
    (query) =>
      axios.delete(`${process.env.NEXT_PUBLIC_DOMAIN}/menu?name=${query}`),
    {
      onError: (error) => {
        console.log(error.message);
      },
      onSuccess: (data) => {
        console.log("calm doen");
        queryClient.invalidateQueries("getMenu");
        console.log(data);
      },
    }
  );
  if (data?.data && data?.data.length) {
    return (
      <div className="my-5 py-5 d-flex flex-wrap">
        {data.data.map((product) => (
          <div key={product.name}>
            <ProductList product={product} deleteMutation={deleteMutation} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="display-3 py-5 mt-5">
        <Center>No Data Found</Center>
      </div>
    );
  }
};

export default ListMenu;
