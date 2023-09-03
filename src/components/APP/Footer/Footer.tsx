import { useAppSelector } from "../../../redux/hooks";
import { selectTheme } from "../../../redux/theme/theme";

interface Footer {

};

export const Footer = ({ }) => {
   const theme = useAppSelector(selectTheme);

   return (
      <div className={`w-[80%] h-[50px] pt-[15px] flex justify-between self-center absolute bottom-0 border-t-[1px] ${theme.mode === 'light' ? 'border-[gainsboro]' : 'border-[white]'}`}>
         <span className={`${theme.mode === 'light' ? 'text-[gray]' : 'text-[white]'}`}>2023 React</span>
         <span className={`${theme.mode === 'light' ? 'text-[gray]' : 'text-[white]'}`}>All Right Reserved</span>
      </div>
   )
}