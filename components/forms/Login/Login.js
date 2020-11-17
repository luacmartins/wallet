import { useState } from 'react'
import Link from 'next/link'
import Logo from '../../icons/Logo'
import Email from '../../inputs/Email'
import Password from '../../inputs/Password'
import Button from '../../shared/Button'
import Alert from '../../shared/Alert'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [emailError, setEmailError] = useState(false)
   const [passwordError, setPasswordError] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [alert, setAlert] = useState('')

   const handleSubmit = () => {
      setIsLoading(true)
      setAlert('Sorry! Your email or password do not match our records. Please verify your information and try again.')
      console.log('Log in!')
   }

   return (
      <>
         <div className="w-64 md:w-80 mx-auto">
            <div className="mb-8 text-center">
               <Logo className="w-16 mx-auto" />
               <header className="text-theme-yellow-500 text-2xl">Wallet</header>
            </div>
            <Email value={email} setValue={setEmail} error={emailError} setError={setEmailError} />
            <Password value={password} setValue={setPassword} error={passwordError} setError={setPasswordError} className="mt-2" />
            <Link href="/forgot-password">
               <a className="font-thin text-xs underline">Forgot your password?</a>
            </Link>
            <Button
               className="block mt-4 mx-auto"
               onClick={handleSubmit}
               isLoading={isLoading}
               disabled={emailError || passwordError || !email || !password || isLoading}
            >
               Login
            </Button>
            <div className="text-center mt-8">
               <span className="font-thin">Don't have an account?</span>
               <Link href="/sign-up">
                  <a className="text-theme-yellow-500 underline ml-1 hover:text-theme-yellow-700">Sign up</a>
               </Link>
               <span className="font-thin block my-2">or</span>
               <Link href="/dashboard">
                  <a className="text-theme-yellow-500 underline ml-1 hover:text-theme-yellow-700">View as guest</a>
               </Link>
            </div>
         </div>
         <Alert message={alert} setMessage={setAlert} />
      </>
   );
}

export default Login;