import React, { useRef } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";
import ListMenu from "../../components/admincomponents/ListMenu";
const CreateMenu = () => {
  const formikRef = useRef();
  const router = useRouter();
  const isEdit = router.query.edit || false;
  const product = router.query.name;
  const queryClient = useQueryClient();
  const menuSchema = Yup.object().shape({
    name: Yup.string()
      .min(0, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    price: Yup.number().required("Required"),
    category: Yup.string().required("Required"),
    description: Yup.string()
      .min(20, "Too Short")
      .max(500, "Too Long!")
      .required("Required"),
  });
  //get indicidual menu items
  const { data, isLoading, isError, error } = useQuery(
    `getMenuItem-${product}`,
    () => axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/menu/${product}`),
    { enabled: isEdit && product ? true : false }
  );

  const createMutation = useMutation(
    (values) => axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/menu`, values),
    {
      onError: (error) => {
        console.log(error.message);
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries("getMenu");
        console.log(data);
        formikRef.current.resetForm();
      },
    }
  );
  const editMutation = useMutation(
    (values) =>
      axios.patch(`${process.env.NEXT_PUBLIC_DOMAIN}/menu/${product}`, values),
    {
      onError: (error) => {
        console.log(error.message);
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries("getMenu");
        queryClient.invalidateQueries(`getMenuItem-${product}`);
        formikRef.current.resetForm();
        router.push("/admin/createmenu");
      },
    }
  );

  const submitForm = async (values) => {
    if (isEdit) {
      editMutation.mutate(values);
    }
    createMutation.mutate(values);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      key="createmenu"
    >
      <div className="page-left">
        <div className="p-5 mt-5">
          {isEdit ? (
            <h1 className="display-3">Edit {product}</h1>
          ) : (
            <h1 className="display-3">Create Menu</h1>
          )}

          <Formik
            enableReinitialize
            innerRef={formikRef}
            initialValues={
              isEdit
                ? {
                    name: data?.data?.name,
                    price: data?.data?.price,
                    description: data?.data?.description,
                    category: data?.data?.category,
                  }
                : {
                    name: "",
                    price: "",
                    description: "",
                    category: "",
                  }
            }
            validationSchema={menuSchema}
            onSubmit={(values) => {
              console.log(values);
              submitForm(values);
            }}
          >
            {({ values, errors, touched }) => (
              <Form>
                <label className="mt-3">Name</label>
                <Field type="text" id="name" name="name" />
                {errors.name && touched.name ? (
                  <div className="text-danger ml-2">{errors.name}</div>
                ) : null}
                <label className="mt-3">Price</label>
                <Field type="number" id="price" name="price" />
                {errors.price && touched.price ? (
                  <div className="text-danger ml-2">{errors.price}</div>
                ) : null}
                <label className="mt-3">Select Category</label>
                <Field type="text" as="select" id="category" name="category">
                  <option disabled={true} value="">
                    Select Category
                  </option>
                  {["Coffee", "Food"].map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </Field>
                {errors.category && touched.category ? (
                  <div className="text-danger ml-2">{errors.category}</div>
                ) : null}
                <label className="mt-3">Description</label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  placeholder="Enter description"
                  rows={4}
                  className="p-2"
                />
                {errors.description && touched.description ? (
                  <div className="text-danger ml-2">{errors.description}</div>
                ) : null}
                <button type="submit">
                  <ul>
                    <li className="effect-button mt-3">
                      {isEdit ? "Edit" : "Create"}
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                  </ul>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="page-right">
        <ListMenu />
      </div>
    </motion.div>
  );
};

export default CreateMenu;
