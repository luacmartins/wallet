import { useState } from 'react'
import Password from '../../inputs/Password'
import Button from '../../shared/Button'
import Alert from '../../shared/Alert'

const ChangePassword = () => {
   const [oldPassword, setOldPassword] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [oldPasswordError, setOldPasswordError] = useState(false)
   const [passwordError, setPasswordError] = useState(false)
   const [confirmPasswordError, setConfirmPasswordError] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [alert, setAlert] = useState('')

   const handleSubmit = () => {
      setIsLoading(true)
      setAlert('Sorry! Your email or password do not match our records. Please verify your information and try again.')
      console.log('Log in!')
   }

   return (
      <>
         <form className="w-64 mt-12 md:w-80 mx-auto">
            <Password value={oldPassword} setValue={setOldPassword} error={oldPasswordError} setError={setOldPasswordError} className="mt-2" placeholder={'Old password'} />
            <Password value={password} setValue={setPassword} error={passwordError} setError={setPasswordError} className="mt-2" placeholder={'New password'} />
            <Password value={confirmPassword} setValue={setConfirmPassword} error={confirmPasswordError} setError={setConfirmPasswordError} className="mt-2" placeholder={'Confirm new password'} />
            <Button
               className="block mt-4 mx-auto"
               onClick={handleSubmit}
               isLoading={isLoading}
               disabled={passwordError || confirmPasswordError || !password || !confirmPassword || isLoading}
            >
               Done
            </Button>
         </form>
         <Alert message={alert} setMessage={setAlert} />
      </>
   );
}

export default ChangePassword;