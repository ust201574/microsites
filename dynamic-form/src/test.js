import data from "../data/form.json";
import MyForm from "../components/my-form";

function Test() {
  return (
    <>
      <MyForm data={data.test} />
    </>
  );
}

export default Test;
