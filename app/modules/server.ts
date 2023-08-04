export async function verifyCaptcha(token: string | null) {
  try {
    const res = await fetch(
      `${process.env.GOOGLE_RECAPTCHA_URL}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
      }
    );
    const data = await res.json();

    if (data.success && data.score >= 0.5) {
      console.log("I'm a human!");
      return true;
    }

    return false;
  } catch (error) {
    console.error(error);
  }
}
