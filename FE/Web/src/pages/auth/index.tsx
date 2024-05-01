import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AuthButton from "./components/AuthButton";
import FormInput from "./components/FormInput";

export default function Login() {
  return (
    <>
      <section className="h-screen pt-16">
        <Navbar />
        <div className="container mx-auto ">
          {/* login form */}
          <div
            id="box-Login"
            className="mx-24 my-14 p-10 border-2 border-gray-300"
          >
            <form action="" className="">
              <h1 className="text-xl text-gray-700">Login</h1>
              <FormInput
                label={"Username or email address"}
                type={"text"}
                name={"username"}
              />
              <FormInput
                label={"password"}
                type={"password"}
                name={"password"}
              />

              <AuthButton buttonName="Login" />
            </form>
          </div>
          {/* register form */}
          <div
            id="box-Register"
            className="mx-24 my-14 p-10 border-2 border-gray-300"
          >
            <form action="" className="">
              <h1 className="text-xl text-gray-700">Register</h1>
              <FormInput
                label={"Email address"}
                type={"text"}
                name={"username"}
              />
              <FormInput
                label={"Password"}
                type={"password"}
                name={"password"}
              />

              <AuthButton buttonName="Register" />
            </form>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
