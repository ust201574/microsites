import data from "../data/form.json";
import MyForm from "../components/my-form";
import React from "react";

function sampleForm() {
  return (
    <div className="container">
      <MyForm data={data.sample} />
    </div>
  );
}

export default sampleForm;
