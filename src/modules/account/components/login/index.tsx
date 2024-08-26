import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { logCustomerIn } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)

  return (
    <div className="max-w-sm w-full flex flex-col items-center" data-testid="login-page">
      <h1 className="text-large-semi uppercase mb-6">أهلا وسهلا</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        سجل الدخول لتجربة أفضل
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="الإيميل"
            name="email"
            type="email"
            title="أدخل بريدك الإلكتروني"
            autoComplete="email"
            required
            data-testid="email-input"
          />
          <Input
            label="كلمة المرور"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton data-testid="sign-in-button" className="w-full mt-6">تسجيل الدخول</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        عضو جديد{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
          data-testid="register-button"
        >
          تسجيل جديد
        </button>
        .
      </span>
    </div>
  )
}

export default Login
