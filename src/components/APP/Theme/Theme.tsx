import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { selectTheme, toggleToDark, toggleToLight } from '../../../redux/theme/theme'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

export const Theme = () => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();
    console.log(theme);
    
    
    return (
        <div className='mt-[140px] h-[70px] flex cursor-pointer border-t-[1px]'>
            <div className='w-[50%] flex justify-center items-center border-r-[1px]' onClick={() => {dispatch(toggleToLight())}}>
                <FontAwesomeIcon icon={faSun} color={`${theme.mode ==='light' ? 'black' : '#373737'}`} />
            </div>

            <div className='w-[50%] flex justify-center items-center' onClick={() => {dispatch(toggleToDark())}}>
                <FontAwesomeIcon icon={faMoon} color={`${theme.mode ==='dark' ? 'white' : 'gray'}`} />
            </div>  
        </div>
    )
}