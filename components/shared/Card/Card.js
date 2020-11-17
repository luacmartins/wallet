const Card = ({ children, className, ...props }) => {
   return (
      <div {...props} className={`bg-white rounded-lg shadow-theme ${className}`}>
         {children}
      </div>
   );
}

export default Card;