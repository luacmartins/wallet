const Name = ({ value, setValue, error, setError, className, ...props }) => {
   // name validation pattern
   const pattern = /\w+/

   const handleOnChange = (e) => {
      setValue(e.target.value)
      if (pattern.test(value.toLowerCase())) {
         setError(false)
      }
   }

   const handleOnBlur = () => {
      if (!pattern.test(value.toLowerCase())) {
         setError(true)
      } else {
         setError(false)
      }
   }

   return (
      <>
         <label className="hidden" htmlFor="name">Name</label>
         <input
            type="text"
            name="name"
            placeholder="Name"
            className={`border rounded h-12 px-4 w-full font-semibold ${className || ''} ${error ? 'border-red-600 text-red-600' : 'border-theme-gray-600'}`}
            value={value}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            {...props}
         />
      </>
   );
}

export default Name;