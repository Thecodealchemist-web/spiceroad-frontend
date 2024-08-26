import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "تسجيل الدخول",
  description: "سجل الدخول إلى حسابك",
}

export default function Login() {
  return <LoginTemplate />
}
