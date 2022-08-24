import data from "../data/form.json";
import MyForm from "../components/my-form";

function Login() {
  return (
    <>
      <MyForm data={data.login} />
    </>
  );
}

export default Login;
