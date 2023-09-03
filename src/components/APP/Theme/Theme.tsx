import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { selectTheme, toggleTheme } from '../../../redux/theme/theme'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

export const Theme = () => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();
    
    
    return (
        <div className='mt-[140px] h-[70px] flex cursor-pointer border-t-[1px]' onClick={() => {dispatch(toggleTheme()); console.log(theme)}}>
          <div className='w-[50%] flex justify-center items-center border-r-[1px]'>
            <FontAwesomeIcon icon={faSun} />
        </div>

          <div className='w-[50%] flex justify-center items-center'>
            <FontAwesomeIcon icon={faMoon} />
        </div>
        </div>
    )
}