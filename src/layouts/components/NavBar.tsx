import { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';
import { Category } from '../models/Categories';
import request from '../../utils/request';
import DropdownMenu from './DropdownMenu';
import ToggleSwitch from '../../components/ToggleSwitch';

interface State {
   loading: boolean;
   categories: Category[];
   errorMsg: string;
}

const NavBar: React.FC = () => {
   // API calls
   const [state, setState] = useState<State>({
      loading: false,
      categories: [] as Category[],
      errorMsg: '',
   });

   useEffect(() => {
      setState({ ...state, loading: true });
      request
         .get('/categories')
         .then((response) =>
            setState({
               ...state,
               loading: false,
               categories: response.data,
               errorMsg: '',
            }),
         )
         .catch((error) => setState({ ...state, loading: false, errorMsg: error.message }));
   }, []);
   const [active, setActive] = useState('');
   const [showed, setShowed] = useState(false);
   const handleMouseOver = (e: any, category: Category) => {
      e.preventDefault();
      setActive(category.name);
      category.hasChildren ? setShowed(true) : setShowed(false);
   };
   const handleMouseOut = (category: Category) => {
      setShowed(false);
      !category.hasChildren ? setActive('false') : null;
   };

   return (
      <nav className=' hidden h-[44px] min-w-[1280px] items-center justify-around md:flex '>
         <div className=' relative flex w-[1216px] bg-white '>
            <div className=' flex w-full '>
               <ul className=' flex w-full justify-between  gap-4'>
                  {state.categories.map((category) => (
                     <li key={category.id}>
                        <div
                           className={cn(
                              'relative flex items-center justify-center rounded-none border-b-[3px] border-transparent font-semibold transition-all ',
                              (category.hasChildren ? category.name === active && showed : category.name === active) &&
                                 ' border-b-[3px] border-blue-500 bg-transparent',
                           )}
                           style={{ paddingBlock: '8px' }}
                           onMouseOver={(e) => handleMouseOver(e, category)}
                           onMouseOut={() => handleMouseOut(category)}
                        >
                           <a
                              href='/'
                              className={cn(
                                 ' transition-all',
                                 (category.hasChildren
                                    ? category.name === active && showed
                                    : category.name === active) && 'text-blue-500',
                              )}
                           >
                              {category.name}
                           </a>
                           {category.hasChildren && <ToggleSwitch showed={category.name === active && showed} />}
                        </div>
                     </li>
                  ))}
               </ul>
            </div>

            <div
               className={cn(
                  'invisible absolute left-0 right-0 z-50 mx-auto min-h-min w-full border-none opacity-0 transition-all duration-500',
                  !!showed && !!active && 'visible opacity-100',
               )}
               style={{ top: '43px' }}
               onMouseOver={() => setShowed(true)}
               onMouseOut={() => setShowed(false)}
            >
               <DropdownMenu activedParentName={active} />
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
