import { verifyCaptcha } from "@/app/modules/server";
import { NextResponse } from "next/server";

// ref: https://github.com/yangoz94/nextjs-education-consulting-website/blob/80b78ec4fa6c9141f465242150e91dcc2c298d66/app/utilities/VerifyCaptcha.tsx

export async function POST(request: Request) {
  const { token } = await request.json();

  try {
    await verifyCaptcha(token);

    return new NextResponse("Success", { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
