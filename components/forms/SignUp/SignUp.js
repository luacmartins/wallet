import { useState } from 'react'
import Link from 'next/link'
import Logo from '../../icons/Logo'
import Name from '../../inputs/Name'
import Email from '../../inputs/Email'
import Password from '../../inputs/Password'
import Button from '../../shared/Button'
import Alert from '../../shared/Alert'

const Login = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [nameError, setNameError] = useState(false)
   const [emailError, setEmailError] = useState(false)
   const [passwordError, setPasswordError] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [alert, setAlert] = useState('')

   const handleSubmit = () => {
      setIsLoading(true)
      // validate data
      // send request to API
      // if success redirect to dashboard
      // if error, display error
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
            <Name value={name} setValue={setName} error={nameError} setError={setNameError} />
            <Email value={email} setValue={setEmail} error={emailError} setError={setEmailError} className="mt-2" />
            <Password value={password} setValue={setPassword} error={passwordError} setError={setPasswordError} className="mt-2" />
            <Button
               className="block mt-4 mx-auto"
               onClick={handleSubmit}
               isLoading={isLoading}
               disabled={emailError || passwordError || nameError || !name || !email || !password || isLoading}
            >
               Sign up
         </Button>
            <div className="text-center mt-8">
               <span className="font-thin">Already have an account?</span>
               <Link href="/">
                  <a className="text-theme-yellow-500 underline ml-1 hover:text-theme-yellow-700">Login</a>
               </Link>
            </div>
         </div>
         <Alert message={alert} setMessage={setAlert} />
      </>
   );
}

export default Login;