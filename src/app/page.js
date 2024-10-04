import Image from "next/image";
import Header from "./components/Header";
// import Login from "./components/login";
import Login from "./login/page";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Login />
    </div>
  );
}
