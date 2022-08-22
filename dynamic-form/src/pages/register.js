import data from "../data/form.json";
import MyForm from "../components/my-form";

function Register() {
  return <MyForm data={data.register} />;
}

export default Register;
