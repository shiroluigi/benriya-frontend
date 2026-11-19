"use client";

import { JSX } from "react/jsx-runtime";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <div className="LoginPage">
        <InputField placeholder="Enter Email" />
        <InputField placeholder="Enter Password" type="password"/>
        <Button text="Submit"></Button>
      </div>
    </>
  );
}

export default LoginPage;