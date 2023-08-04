"use client";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export function MyCaptcha() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // if the component is not mounted yet
    if (!executeRecaptcha) return;

    // receive a token
    const token = await executeRecaptcha("onSubmit");
    // validate the token via the server action we've created previously
    const verified = await fetch("/api/recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    return verified;
  };

  return (
    <section>
      <form>
        <input type="text" placeholder="google.." />
        <button onClick={onSubmit}>submit</button>
      </form>
    </section>
  );
}
