import Card from '../../shared/Card'
import ChevronRight from '../../icons/ChevronRight'

const Settings = ({ links, setStep }) => {
   const handleLogout = () => {
      console.log('logout')
   }

   return (
      <>
         <Card className="w-11/12 mx-auto mt-2">
            <div className="flex flex-col divide-y divide-theme-gray-600">
               {links.map(link => (
                  <div onClick={() => setStep(link.step)} key={link.name} className="flex items-center justify-between px-4 py-2">
                     <span>{link.name}</span>
                     <ChevronRight className="h-4 w-4" />
                  </div>
               ))}
            </div>
         </Card>
         <Card onClick={handleLogout} className="w-11/12 mx-auto mt-6">
            <div className="px-4 py-2">Log out</div>
         </Card>
      </>
   );
}

export default Settings;