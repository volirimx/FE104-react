import "./App.css";
import { InformationForm } from "./components/InformationForm";
import { RegistrationForm } from "./components/RegistrationForm";
import { SignInForm } from "./components/SignInForm";
import { Template } from "./components/Template";

function App() {
  // const formContent = `Please, activate your account with the activation link in the email xxx@gmail.com.
  //      Please, check your email`;
  // const formContent = `Email confirmated.`;
  return (
    // <Template theme='white' title="Title" content={<RegistrationForm />} />    
    // <Template theme='white' title="Registration Confirmation" content={<InformationForm content={formContent} buttonContent='Sign In' />} />
    // <Template theme='white' title="Success" content={<InformationForm content={formContent} buttonContent='Go to home' />} />
    <Template theme='white' title="Sign In" content={<SignInForm />} />
  );
}

export default App;
