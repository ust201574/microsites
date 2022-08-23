import data from "../data/form.json";
import MyForm from "../components/my-form";

function sampleForm() {
  return (
    <div className="container">
      <MyForm data={data.sample} />
    </div>
  );
}

export default sampleForm;
