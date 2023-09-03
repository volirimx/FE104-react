interface Template {
   heading?: string;
   children?: React.ReactNode
}

export const Template = ({heading, children}: Template) => {

   return (
      <div>
            <div className='w-fit flex mb-[10px] cursor-pointer relative transition-transform duration-100 ease-in-out'>
               Back to home
               <div className="absolute left-0 w-full -bottom-5 h-2 bg-blue-500 transform scale-x-0 transform-origin-center transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
            </div>
            
            <h1 className='text-[44px]'>{heading}</h1>   
         <div className='mt-[100px]'>
            {children}
         </div>
      </div>
   )
}