import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import './Layout.scss'


export interface AuthLayoutProps {
  type: "login" | "register";
}


export const AuthLayout = ({ type }: AuthLayoutProps) => {
  return (
    <div className="container-single">
      {type === "login" ? <LoginForm /> : <RegisterForm />}
    </div>
  )
}
