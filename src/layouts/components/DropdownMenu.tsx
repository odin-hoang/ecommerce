import { useState, useLayoutEffect } from 'react';
import { Category } from '../models/Categories';
import { cn } from '../../utils/cn';
import request from '../../utils/request';
import { RightOutlined } from '@ant-design/icons';
interface TypeState {
   loading: boolean;
   types: Category[];
   errorMsg: string;
}
interface Props {
   activedParentName: string;
}

const DropdownMenu: React.FC<Props> = ({ activedParentName }) => {
   console.log('component rendered');
   const [typeState, setTypeState] = useState<TypeState>({ loading: false, types: [] as Category[], errorMsg: '' });
   const [detailState, setDetailState] = useState<TypeState>({
      loading: false,
      types: [] as Category[],
      errorMsg: '',
   });
   useLayoutEffect(() => {
      request
         .get('/types')
         .then((response) => {
            setTypeState({ ...typeState, loading: false, types: response.data });
         })
         .catch((error) => setTypeState({ ...typeState, loading: false, errorMsg: error.message }));
      request
         .get('/details')
         .then((response) => {
            setDetailState({ ...detailState, loading: false, types: response.data });
         })
         .catch((error) => setDetailState({ ...detailState, loading: false, errorMsg: error.message }));
   }, []);

   const [active, setActive] = useState('');
   const handleHover = (typeName: string) => {
      setActive(typeName);
   };
   useLayoutEffect(() => {
      setActive(typeState.types.filter((type) => type.parentName === activedParentName)[0]?.name);
   }, [activedParentName]);

   return (
      <div className=' flex rounded-b-lg bg-white p-3'>
         <div className='relative w-[290px] shrink-0'>
            <ul className=' flex flex-col gap-0'>
               {typeState.types.map(
                  (type) =>
                     type.parentName === activedParentName && (
                        <span
                           key={type.id}
                           className={cn(
                              ' flex justify-center rounded-l-lg border border-transparent ',
                              type.name === active && ' border-gray-200 bg-gray-200 font-semibold',
                           )}
                        >
                           <li
                              onMouseOver={() => handleHover(type.name)}
                              className={cn('  w-[90%] divide-x-8  border-gray-200  bg-transparent   p-3   ')}
                           >
                              <a
                                 href=''
                                 className='line-clamp-1'
                              >
                                 {type.name}
                              </a>
                           </li>
                        </span>
                     ),
               )}
            </ul>
         </div>
         <div className='inline-flex  shrink-0 flex-grow flex-col rounded-r-lg bg-gray-200  p-6'>
            <ul className='grid w-full auto-rows-[80px] grid-cols-3  gap-4 '>
               {detailState.types.map(
                  (detail) =>
                     detail.parentName === active && (
                        <span
                           key={detail.id}
                           className=' inline-flex h-full w-full items-center justify-center rounded-lg bg-white p-4'
                        >
                           <li className=''>{detail.name}</li>
                        </span>
                     ),
               )}
            </ul>
            <div className='divider'></div>
            <div className='-mt-4'>
               <label className='inline-flex items-center justify-start gap-1'>
                  <p className='font-bold'>Bán chạy nhất</p> <p className='m-1 text-gray-300'>|</p>{' '}
                  <a
                     href=''
                     className='flex flex-row items-center gap-1 '
                  >
                     <p className='text-blue-500'>Xem tất cả</p>
                     <RightOutlined className='mt-1 text-blue-500' />
                  </a>
               </label>
            </div>
         </div>
      </div>
   );
};

export default DropdownMenu;
