import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { logo } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faAngleDown,
   faAngleLeft,
   faBars,
   faCartShopping,
   faHistory,
   faMobile,
   faPhone,
   faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { cn } from '../../utils/cn';
import { useState, useEffect } from 'react';
import { AppleFilled, CloseOutlined, FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import { Category } from '../models/Categories';
import request from '../../utils/request';
interface State {
   loading: boolean;
   types: Category[];
   errorMsg: string;
}
const Header = () => {
   const suggestions = [
      'enterogermina',
      'omega3',
      'klenzit ms',
      'tazoretin',
      'kutieskin',
      'thuốc nhỏ mắt',
      'vitamin d3 k2',
      'sữa ensure',
   ];
   const [categories, setCategories] = useState<State>({
      loading: false,
      types: [] as Category[],
      errorMsg: '',
   });
   const [types, setTypes] = useState<State>({
      loading: false,
      types: [] as Category[],
      errorMsg: '',
   });
   useEffect(() => {
      request
         .get('/categories')
         .then((response) => setCategories({ ...categories, types: response.data }))
         .catch((error) => setCategories({ ...categories, errorMsg: error.message }));
      request
         .get('/types')
         .then((response) => setTypes({ ...types, types: response.data }))
         .catch((error) => setTypes({ ...types, errorMsg: error.message }));
   }, []);

   const historySearch = ['enterogermina', 'sữa chua'];
   const [showedSearchMenu, setShowedSearchMenu] = useState(false);
   const [showedBar, setShowedBar] = useState(false);
   const handleSearchMobile = () => {
      setShowedSearchMenu(true);
   };
   const handleBarClick = () => {
      setShowedBar(true);
   };

   const handleLogin = () => {
      (window.modal_login as any).showModal();
   };
   return (
      <>
         <header className={cn('relative h-[52px] md:h-[150px] md:min-w-[1280px]')}>
            <div className='absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-blue-700 to-blue-500'></div>
            <div className='relative z-20 h-full'>
               <div className='flex h-full w-full flex-col '>
                  <div className='  z-20 hidden md:block md:h-8 '>
                     <div className=' my-2 flex h-full w-full items-center justify-center  md:border-b-[1px] md:border-blue-600  md:bg-transparent'>
                        <div className='flex  w-full items-center justify-end gap-4 text-sm md:mx-8 lg:mx-[150px]'>
                           <button className='inline-flex shrink-0 flex-row items-center justify-center gap-2 font-sans font-medium text-white'>
                              <FontAwesomeIcon icon={faMobile as IconProp} />
                              <p>Tải ứng dụng</p>
                           </button>
                           <button className='inline-flex shrink-0 flex-row items-center justify-center gap-2 font-sans  font-medium text-white'>
                              <FontAwesomeIcon icon={faPhone as IconProp} />
                              <p>
                                 Tư vấn ngay: <span>18001999</span>
                              </p>
                           </button>
                        </div>
                     </div>
                  </div>
                  <div className='flex h-full items-start justify-center bg-transparent md:m-3  '>
                     <div
                        className={cn(
                           ' z-10 flex h-full w-full items-center justify-between px-1  md:my-0 md:h-[72px] md:max-w-7xl md:px-4',
                           showedSearchMenu && 'relative',
                        )}
                     >
                        <span
                           className={cn('shrink-0 grow-0 md:mr-4 md:h-[56px] md:w-[200px]', {
                              'hidden md:block': showedSearchMenu,
                           })}
                        >
                           <div className='flex h-full w-full flex-row items-center'>
                              <FontAwesomeIcon
                                 icon={faBars as IconProp}
                                 className=' h-5 w-5 p-4 text-white md:hidden'
                                 onClick={handleBarClick}
                              />
                              <img className='mr-2 h-8 w-8' src={logo} alt='logo' />
                              <span className='whitespace-pre-line  bg-gradient-to-r  from-blue-500 to-cyan-600 bg-clip-text  font-sans text-base font-bold text-transparent text-white'>
                                 Any brand
                              </span>
                           </div>
                           {/* nav bar */}
                           <nav
                              className={cn(
                                 'absolute left-0 top-0 h-[100vh] w-72 translate-x-[-288px] transition-all md:hidden',
                                 showedBar && 'translate-x-0',
                              )}
                           >
                              <div className='flex h-[60px] shrink-0 grow-0 flex-row items-center justify-between  bg-white'>
                                 <div className='flex flex-row items-center'>
                                    <img className='m-3 h-8 w-8' src={logo} alt='logo' />
                                    <span className='whitespace-pre-line  bg-gradient-to-r  from-blue-500 to-cyan-600 bg-clip-text  font-sans text-base font-bold text-blue-600 text-transparent'>
                                       Any brand
                                    </span>
                                 </div>
                                 <CloseOutlined
                                    className='-mt-2 mr-1 p-3 text-xl'
                                    onClick={() => setShowedBar(false)}
                                 />
                              </div>
                              <div className={cn(' grow-1  h-full shrink-0 bg-white shadow-lg')}>
                                 {/* banner login */}
                                 <div className=' flex  h-[104px] flex-col justify-between bg-gradient-315 from-blue-500 to-blue-600 p-3'>
                                    <p className='bg-transparent font-sans text-xs font-medium text-white'>
                                       Đăng nhập để hưởng những đặc quyền dành riêng cho thành viên.
                                    </p>
                                    <div className='flex gap-2 bg-transparent'>
                                       <button className='btn-login-primary'>Đăng nhập</button>
                                       <button className='btn-sign-up-primary'>Đăng ký</button>
                                    </div>
                                 </div>
                                 {/* nav link */}
                                 <div className='ml-2 flex h-full shrink-0 flex-col overflow-auto'>
                                    {categories.types.map((type, index) => (
                                       <ul key={index} className='menu  w-full bg-white '>
                                          <details open>
                                             <summary className=' relative z-10 mb-3 flex flex-row items-center justify-between text-base font-semibold '>
                                                <p>{type.name}</p>
                                                {type.hasChildren && (
                                                   <>
                                                      <FontAwesomeIcon
                                                         icon={faAngleDown}
                                                         className='mr-2 rotate-0 text-xl text-black/50 '
                                                      />
                                                   </>
                                                )}
                                             </summary>
                                             <ul className='mx-1  flex flex-col rounded-md  border-transparent  [&>:last-child]:rounded-b-md [&>:last-child]:border-none [&>:nth-child(1)]:rounded-t-md'>
                                                {types.types.map(
                                                   (detail) =>
                                                      detail.parentName === type.name && (
                                                         <span
                                                            className='grow-1 shrink-0 border-b border-slate-200 bg-blue-100  p-3 hover:bg-slate-300'
                                                            key={detail.id}
                                                         >
                                                            <li className=''>{detail.name}</li>
                                                         </span>
                                                      ),
                                                )}
                                             </ul>
                                          </details>
                                       </ul>
                                    ))}
                                 </div>
                              </div>
                           </nav>
                        </span>
                        {/* // search bar */}
                        <span
                           className={cn(
                              ' grow-1 ml-auto mr-3 shrink-0 md:ml-0  md:w-[680px]',
                              showedSearchMenu && 'w-[90%]',
                           )}
                        >
                           <div className={cn('relative  w-full ', showedSearchMenu && 'static md:relative')}>
                              <div className={cn(' hidden md:block', showedSearchMenu && ' block ')}>
                                 <button
                                    className={cn('absolute left-1 top-0 z-30 p-3 text-xl text-white md:hidden ')}
                                    onClick={() => setShowedSearchMenu(false)}
                                 >
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                 </button>
                                 <span
                                    className={cn(
                                       'relative  inline-flex h-full w-full flex-row items-center rounded-[35px] bg-white p-0.5 pl-4 md:p-[6px]',
                                       showedSearchMenu && 'static md:relative ',
                                    )}
                                 >
                                    <input
                                       type='search'
                                       className=' text-text-primary placeholder:text-text-tertiary text-body1 placeholder:text-label1 peer/search peer w-full text-ellipsis bg-transparent outline-none
                                                   placeholder-shown:text-ellipsis md:p-2'
                                       placeholder='Tìm kiếm'
                                    />
                                    <button className='ml-3 mr-[0.5px] h-8 w-8 shrink-0 rounded-full bg-blue-200 p-[5px] text-blue-700 peer-focus-within:bg-blue-700 peer-focus-within:text-white md:h-[40px] md:w-[40px]'>
                                       <FontAwesomeIcon icon={faSearch as IconProp} />
                                    </button>
                                    <div
                                       className={cn(
                                          ' absolute left-0 top-14 z-30 hidden  h-96 w-full  bg-white shadow-lg  peer-focus-within/search:block md:rounded-2xl',
                                          showedSearchMenu && 'top-14 rounded-none md:top-14',
                                       )}
                                    >
                                       <div className='p-3'>
                                          <div className='flex flex-row items-center justify-between font-semibold'>
                                             <p className='text-base'>Lịch sử tìm kiếm</p>
                                             <p className='cursor-pointer text-sm text-blue-700'>Xoá tất cả</p>
                                          </div>
                                          {historySearch.map((search, index) => (
                                             <div
                                                key={index}
                                                className='flex cursor-pointer flex-row  items-center gap-2 p-2 font-sans text-blue-600 hover:bg-gray-100'
                                             >
                                                <FontAwesomeIcon
                                                   icon={faHistory as IconProp}
                                                   className='text-gray-400'
                                                />
                                                <p className='align-middle'>{search}</p>
                                             </div>
                                          ))}
                                          <p className='font-semibold'>Tra cứu hàng đầu</p>
                                          {suggestions.map((suggestion, index) => (
                                             <button
                                                className='m-1 rounded-[52px] border-2 px-2 py-1 text-sm font-semibold'
                                                key={index}
                                             >
                                                {suggestion}
                                             </button>
                                          ))}
                                       </div>
                                    </div>
                                 </span>
                                 <div className='absolute -left-24 -right-24 mt-2 block h-9 w-[880px]'>
                                    <ul className='flex w-full items-center justify-center gap-3 text-center text-white'>
                                       {suggestions.map((suggestion, index) => (
                                          <li key={index} className='cursor-pointer'>
                                             {suggestion}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                              <button
                                 className={cn('peer/search cursor-pointer appearance-none md:hidden', {
                                    hidden: showedSearchMenu,
                                 })}
                                 onClick={handleSearchMobile}
                              >
                                 <FontAwesomeIcon
                                    icon={faSearch as IconProp}
                                    className='z-0 text-lg text-white peer-checked/search:hidden md:hidden'
                                 />
                              </button>
                           </div>
                        </span>
                        <span
                           className={cn(
                              'h-[52px] shrink-0 grow-0 md:min-w-[270px]',
                              showedSearchMenu && 'hidden md:block',
                           )}
                        >
                           <div className=' flex h-full items-center justify-center gap-4'>
                              <div className=' hidden  items-center hover:cursor-pointer md:flex'>
                                 <div className='flex items-center'>
                                    <span className=' text-white'>
                                       <FontAwesomeIcon icon={faUser as IconProp} className='text-white' />
                                    </span>
                                    <div onClick={handleLogin} className='ml-2 font-sans text-lg text-white '>
                                       Đăng nhập
                                    </div>
                                 </div>
                              </div>
                              <span className=' flex h-full w-[52px] shrink-0 grow-0 cursor-pointer items-center justify-center  md:w-[134px]'>
                                 <div
                                    className={cn(
                                       'md: ml-1 flex h-[40px] w-[40px] items-center justify-center rounded-[42px] bg-blue-800 md:h-full md:w-full ',
                                    )}
                                 >
                                    <FontAwesomeIcon icon={faCartShopping as IconProp} className='text-lg text-white' />
                                    <div className={cn('ml-2 hidden font-sans text-lg text-white  md:block')}>
                                       Giỏ hàng
                                    </div>
                                 </div>
                              </span>
                           </div>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <dialog id='modal_login' className='modal bg-black/40'>
            <form method='dialog' className='modal-box flex flex-col items-center justify-center'>
               <h3 className='mt-10 text-center text-xl font-bold'>Đăng nhập hoặc Đăng ký</h3>
               <p className='mx-auto w-[80%] py-4 text-center text-lg'>
                  Vui lòng đăng nhập để hưởng những đặc quyền dành cho thành viên.
               </p>
               <input
                  type='text'
                  placeholder='Nhập số điện thoại'
                  className='0 mx-auto w-[90%] rounded-lg border border-gray-400 p-3 text-lg focus-within:border-blue-500'
               />
               <button className='btn btn-primary mt-4 w-[90%] rounded-3xl text-lg normal-case text-white'>
                  Tiếp tục
               </button>
               <div className='divider mx-auto mt-8 w-[90%] before:h-[1px] after:h-[1px]'>hoặc đăng nhập bằng</div>
               <div className='flex gap-4'>
                  <a
                     href='https://accounts.google.com/'
                     target='_blank'
                     className='flex h-14 w-14 items-center justify-center rounded-full border p-2'
                  >
                     <GoogleCircleFilled className='text-3xl leading-[0] text-blue-500' />
                  </a>
                  <a
                     href='https://accounts.google.com/'
                     target='_blank'
                     className='flex h-14 w-14 items-center justify-center rounded-full border p-2'
                  >
                     <FacebookFilled className='text-3xl leading-[0] text-blue-500' />
                  </a>
                  <a
                     href='https://accounts.google.com/'
                     target='_blank'
                     className='flex h-14 w-14 items-center justify-center rounded-full border p-2'
                  >
                     <AppleFilled className='overflow-hidden  text-3xl leading-[0] text-blue-500' />
                  </a>
               </div>
               <div className='modal-action'>
                  {/* if there is a button in form, it will close the modal */}
                  <button className='absolute right-6 top-6 flex items-center justify-center'>
                     <CloseOutlined className='text-2xl leading-[0]' />
                  </button>
               </div>
            </form>
         </dialog>
      </>
   );
};

export default Header;
