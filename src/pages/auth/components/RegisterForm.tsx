import { registerSchema, RegisterSchemaType } from "@/schema/auth.schema";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.scss";
import logo from "@/assets/logo.png";
import { Button } from "@/components/element/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { StylingInput } from "@/components/element/input";
import { Link } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { authApi } from "@/api/auth.api";
import { alert } from '@/provider/AlertService';
import { useCookie } from "@/hooks/logic/useCookie";



const RegisterForm = () => {

  const [, setAccessToken,] = useCookie('access_token', '', 7);
  // react hook form
  const {register, handleSubmit, formState: {errors, isLoading}} = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema)
  })

  // function to submit
  const onSubmit: SubmitHandler<RegisterSchemaType> = async (data) => {

    const response = await authApi.register({
        ...data,
        role: 'USER'
    });
    if(response){
      setAccessToken(response.metadata.tokens.accessToken);
      alert('Registration successful', 'Success', 'success');
    }
    console.log('response', response)

  }

  return (
    <div className="form-container">
      {/* section logo */}
      <div className="flex justify-center mb-2">
        <img src={logo} alt="Logo" className="h-12" />
      </div>

      {/* section intro */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">
          Create new account
        </h1>
        <p className="text-gray-400 text-sm font-medium">
          Enter your credentials to create a new account
        </p>
      </div>

      {/* section form */}
      <form className="mt-6 gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Button variant="white" leftIcon={<FcGoogle  size={22}/>} className="mb-6" type="button">
          Login with Google
        </Button>
        <Button variant="white" leftIcon={<FaGithub  size={22}/>} className="mb-6" type="button">
          Login with GitHub
        </Button>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <StylingInput placeholder="youremail@domain.com" variant="normal" {...register("email")} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <div className="form-label-group">
            <label htmlFor="password" className="form-label">Password</label>
          </div>
          <StylingInput placeholder="********" variant="normal" type="password" {...register("password")} />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <div className="form-group">
          <div className="form-label-group">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          </div>
          <StylingInput placeholder="********" variant="normal" type="password" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>

        <Button variant="primary" type="submit" className="mt-4" isLoading={isLoading} >
          {isLoading ? "Creating account..." : "Create Account"}
        </Button>
      </form>

      <div className="text-sm text-gray-400 mt-3 w-full text-center">
        Already have an account? <Link to="/login" className="text-blue-600 font-medium">Login</Link>
      </div>
    </div>
  );
};

export default RegisterForm;
