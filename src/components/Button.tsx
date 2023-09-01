import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '../utils/cn';

interface Props {
   children?: string;
   active?: boolean;
   onClick?: () => void;
}
const Button: React.FC<Props> = ({ children, active = false, onClick }) => {
   return (
      <>
         <button
            onClick={onClick}
            className={cn(
               `relative overflow-hidden rounded-3xl border border-gray-500  bg-white bg-clip-border px-3 py-1 font-semibold ${
                  active && 'border-blue-700'
               }`,
            )}
         >
            <span className={`text-lg transition-all ${active && 'mr-2  text-blue-700 '}`}>{children}</span>
            {active && (
               <div className='absolute right-0 top-0  h-0 w-0 border-l-[26px] border-t-[26px] border-l-transparent border-t-blue-700'>
                  <span className='absolute -top-[32px] right-[5px]'>
                     <FontAwesomeIcon icon={faCheck} className=' text-[10px] text-white' />
                  </span>
               </div>
            )}
         </button>
      </>
   );
};

export default Button;
