import Title from "@/components/Title";
import Button from "@/components/form/Button";
import InputField from "@/components/form/InputField";
import React from "react";

const CreateProduct = () => {
  return (
    <section className="m-72 rounded bg-white p-4 shadow">
      <Title>Add Product</Title>
      <InputField
        type="text"
        name="model"
        placeholder="Model Number"
        required
      />
      <InputField
        type="text"
        name="description"
        placeholder="Description"
        required
      />
      <InputField type="number" name="Price" placeholder="Price" required />
      <InputField
        type="number"
        name="sale_Price"
        placeholder="Sale Price"
        required
      />
      <InputField
        type="number"
        name="stock_Qantity"
        placeholder="Stock Quantity"
        required
      />
      <Button/>
    </section>
  );
};

export default CreateProduct;
