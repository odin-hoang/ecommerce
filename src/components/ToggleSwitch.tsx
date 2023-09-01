import { cn } from '../utils/cn';
interface Props {
   showed: boolean;
}
const ToggleSwitch: React.FC<Props> = ({ showed }) => {
   return (
      <span className='ml-2'>
         <input
            type='checkbox'
            className='peer absolute inset-0 z-0 h-full w-full appearance-none'
            checked={showed}
            readOnly
         />
         <div
            className={cn(
               'inline-block h-2 w-2 -translate-y-1 rotate-45 border-b-2  border-r-2 border-gray-800 transition-all duration-300 peer-checked:translate-y-0 peer-checked:rotate-[225deg] peer-checked:border-blue-500',
            )}
         ></div>
      </span>
   );
};

export default ToggleSwitch;
