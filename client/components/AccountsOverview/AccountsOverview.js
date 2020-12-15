import Card from '../shared/Card'
import NumberFormat from 'react-number-format'

const AccountsOverview = ({ data }) => {
   return (
      <Card className="mx-4 py-2">
         <div className="divide-y divide-theme-gray-600 px-6">
            {data.map(item => (
               <div key={item.type} className="flex justify-between items-center h-12">
                  <span>{item.type}</span>
                  <span>
                     <NumberFormat value={item.balance / 100} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                  </span>
               </div>
            ))}
         </div>
      </Card>
   );
}

export default AccountsOverview;