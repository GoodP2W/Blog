import React, { useState } from "react";

import { Login } from "../components/auth/login/Login";
import { Registration } from "../components/auth/register/Register";

import supabase from "../sevices/supabase";

const Auth = () => {
  async function handleRegistration(formData) {
    const { email, password } = formData;
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log(error);
    } else {
      console.log(user);
    }
  }

  return (
    <>
      <Login />
    </>
  );
};

export { Auth };
