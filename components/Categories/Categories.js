import Card from '../shared/Card'
import AddCircle from '../icons/AddCircle'

// get list of categories from database
import categories from '../../utils/categories'

const Categories = () => {
   return (
      <>
         {
            categories.map(category => (
               <Card className="w-11/12 mx-auto mt-2 mb-6">
                  <div className="flex flex-col divide-y divide-theme-gray-600">
                     <span className="px-4 py-2" key={category.name}>{category.name}</span>
                     {category.children.map(child => (
                        <span className="px-4 py-2 font-normal">{child.name}</span>
                     ))}
                     <div className="flex items-center px-4 py-2 text-theme-gray-700">
                        <AddCircle className="h-4 w-4" />
                        <span className="ml-1">Add subcategory</span>
                     </div>
                  </div>
               </Card>
            ))
         }
         <Card className="w-11/12 mx-auto mt-2 mb-16">
            <div className="flex items-center px-4 py-2">
               <AddCircle className="h-4 w-4" />
               <span className="ml-1">Add subcategory</span>
            </div>
         </Card>
      </>
   );
}

export default Categories;