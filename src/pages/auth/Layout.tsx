import LoginForm from "./components/LoginForm";
import './Layout.scss'


export interface AuthLayoutProps {
  type: "login" | "register";
}


export const AuthLayout = ({ type }: AuthLayoutProps) => {
  return (
    <div className="container-single">
      <LoginForm/>
    </div>
  )
}
