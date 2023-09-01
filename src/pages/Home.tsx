import { useEffect, useState, useRef, MutableRefObject } from 'react';
import useMediaQuery from 'usehooks-ts/dist/esm/useMediaQuery/useMediaQuery';
import request from '../utils/request';
import { Banner } from '../layouts/models/Categories';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { cn } from '../utils/cn';
import Trending from './Trending';
import Carousel from '../components/Carousel';
import BrandCard from '../components/BrandCard';
import ProductsBySubject from './ProductsBySubject';
interface FetchState {
   loading: boolean;
   listBanner: Banner[];
   errorMsg: string;
}
const MAX_WIDTH_IMAGE = 805;
const Home: React.FC = () => {
   const matches = useMediaQuery('(min-width: 768px)');
   const sliderRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
   const [active, setActive] = useState(0);
   const [banner, setBanner] = useState<FetchState>({
      loading: false,
      listBanner: [] as Banner[],
      errorMsg: '',
   });
   useEffect(() => {
      request
         .get('/banners')
         .then((response) => setBanner({ ...banner, listBanner: response.data }))
         .catch((error) => setBanner({ ...banner, errorMsg: error.message }));
   }, []);
   useEffect(() => {
      const intervalID = setInterval(() => {
         setActive((prev) => {
            const next = prev === banner.listBanner.length - 1 ? 0 : prev + 1;
            if (sliderRef.current && next > 0) sliderRef.current.scrollLeft += MAX_WIDTH_IMAGE;
            if (sliderRef.current && next === 0) sliderRef.current.scrollLeft = 0;
            return next;
         });
      }, 3000);
      return () => clearInterval(intervalID);
   }, [active]);
   const handleNext = () => {
      setActive((prev) => {
         const next = (prev + 1) % banner.listBanner.length;
         if (sliderRef.current) sliderRef.current.scrollLeft = next * MAX_WIDTH_IMAGE;
         return next;
      });
   };
   const handleBack = () => {
      setActive((prev) => {
         const next = prev === 0 ? banner.listBanner.length - 1 : prev - 1;
         if (sliderRef.current) sliderRef.current.scrollLeft += (next - prev) * MAX_WIDTH_IMAGE;
         return next;
      });
   };
   const handleChoose = (index: number) => {
      if (sliderRef.current) {
         const offset = (index - active) * MAX_WIDTH_IMAGE;
         sliderRef.current.scrollLeft += offset;
      }
      setActive(index);
   };

   return (
      <main className=' min-h-screen w-full  md:min-w-[1280px]'>
         <section className='bg-blue-50   md:p-4 '>
            <div className='mx-auto flex w-full flex-col justify-between  md:h-[262px] md:w-[1216px] md:flex-row '>
               {/* banner */}
               <div className='relative h-[calc(100vw*188/375)] md:h-[246px] md:w-[805px]'>
                  <div
                     ref={sliderRef}
                     className=' flex h-full w-full snap-x snap-mandatory overflow-hidden scroll-smooth rounded-none  md:rounded-xl'
                  >
                     {banner.listBanner.map((banner, index) => (
                        <picture className=' grow snap-start object-fill'>
                           <source srcSet={banner.imageUrl} media='(min-width: 768px)' />
                           <img
                              id={'banner' + index}
                              src={banner.imageUrlMobile}
                              alt={banner.title}
                              key={banner.id}
                              className={cn(
                                 'h-full  max-w-none transition-all duration-500 md:w-[805px] md:object-cover',
                              )}
                           />
                        </picture>
                     ))}

                     <LeftOutlined
                        className='absolute left-[10px] top-[50%] z-10 hidden -translate-y-[50%] rounded-[50%] bg-slate-700/50 p-[6px] text-[20px] text-white md:block'
                        onClick={handleBack}
                     />
                     <RightOutlined
                        className='absolute right-[10px] top-[50%] z-10 hidden -translate-y-[50%] rounded-[50%] bg-slate-700/50 p-[6px] text-[20px] text-white md:block'
                        onClick={handleNext}
                     />
                     <div className='absolute -bottom-6 left-[50%] z-20 flex -translate-x-[50%] items-center justify-center gap-2 md:bottom-2 '>
                        {banner.listBanner.map((_, index) => (
                           <span
                              className={cn('h-4 w-4 cursor-pointer rounded-[50%] bg-zinc-300 md:h-2 md:w-2', {
                                 'bg-zinc-400': active === index,
                              })}
                              key={index}
                              onClick={() => handleChoose(index)}
                           ></span>
                        ))}
                     </div>
                  </div>
               </div>
               {/* feature */}
               <div className=' mb-4 px-4 md:mb-0 md:basis-[391px] md:px-0'>
                  <a className='hidden md:block  md:max-h-[375px]'>
                     <img
                        src='https://cdn.nhathuoclongchau.com.vn/unsafe/391x120/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/782x240_8c781a9b47.jpg'
                        alt=''
                        className=' h-[115px] w-[375px] rounded-xl md:h-[120px] md:w-[391px]'
                     />
                  </a>
                  <div className=' mb-4 mt-10 grid auto-rows-[81px] grid-cols-3  gap-3 md:mt-4 md:auto-rows-[111px]'>
                     <a href='' className='flex flex-col items-center justify-center rounded-xl bg-white px-[10px]'>
                        <div className='flex flex-col items-center justify-center '>
                           <img
                              src='https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/smalls/can_mua_thuoc_40x40_3x_59367d7177.png'
                              alt=''
                              className='h-8 w-8 md:h-10 md:w-10'
                           />
                           <p className='text-center  text-sm font-semibold md:w-[96%]'>Cần mua thuốc</p>
                        </div>
                     </a>
                     <a href='' className='flex flex-col items-center justify-center rounded-xl bg-white px-[10px]'>
                        <div className='flex flex-col items-center justify-center '>
                           <img
                              src='https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/smalls/tu_van_voi_duoc_sy_40x40_3x_aaa988a1a2.png'
                              alt=''
                              className='h-8 w-8 md:h-10 md:w-10'
                           />
                           <p className='text-center text-sm font-semibold md:w-[96%]'>Tư vấn với dược sỹ</p>
                        </div>
                     </a>
                     <a href='' className='flex flex-col items-center justify-center rounded-xl bg-white px-[10px]'>
                        <div className='flex flex-col items-center justify-center '>
                           <img
                              src='https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/smalls/tim_nha_thuoc_gan_day_40x40_3x_a116d4c818.png'
                              alt=''
                              className='h-8 w-8 md:h-10 md:w-10'
                           />
                           <p className='text-center text-sm font-semibold md:w-[96%]'>Tìm nhà thuốc gần đây</p>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </section>
         <section className=' relative   bg-orange-50 px-4 pt-12'>
            <div>
               <img
                  src='https://nhathuoclongchau.com.vn/static/images/san-pham-ban-chay.svg'
                  alt=''
                  className='absolute -top-[11px] left-[50%] translate-x-[-50%]'
               />
               <p className='absolute -top-1 left-[50%] translate-x-[-50%] text-lg font-semibold tracking-wide text-white'>
                  Sản phẩm bán chạy
               </p>
            </div>
            <Trending />
            <div className='relative mx-auto mt-6 h-[288px] max-w-[1216px] rounded-xl bg-gradient-to-t from-blue-700 to-blue-500 p-3 md:h-[252px] md:p-6'>
               <p className='text-xl text-white md:mt-2 md:text-3xl md:font-bold'>Kiểm tra sức khoẻ</p>
               <p className='mb-6 mt-1 w-[166px] font-inter text-sm text-white md:w-full md:text-base'>
                  Nhận kết quả dựa trên đánh giá từ Chuyên gia
               </p>
               <div className='w-full md:w-[880px]'>
                  <Carousel numOfShowedItems={matches ? 3 : 2}>
                     <div className='flex snap-start flex-col items-start rounded-xl bg-white p-3 md:flex-row md:items-center'>
                        <img
                           src='https://cdn.nhathuoclongchau.com.vn/unsafe/80x80/https://cms-prod.s3-sgn09.fptcloud.com/smalls/tim_mach_43be20993d.png'
                           alt=''
                        />
                        <div>
                           <p className='line-clamp-2 text-sm font-bold'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse in sit porro
                              aliquam numquam?
                           </p>
                           <a href='' className='font-semibold text-blue-700'>
                              Kiểm tra
                           </a>
                        </div>
                     </div>
                     <div className='flex snap-start flex-col items-start rounded-xl bg-white p-3 md:flex-row md:items-center'>
                        <img
                           src='https://cdn.nhathuoclongchau.com.vn/unsafe/80x80/https://cms-prod.s3-sgn09.fptcloud.com/smalls/sa_sut_tri_tue_73b6b51a85.png'
                           alt=''
                        />
                        <div>
                           <p className='line-clamp-2 text-sm font-bold'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse in sit porro
                              aliquam numquam?
                           </p>
                           <a href='' className='font-semibold text-blue-700'>
                              Kiểm tra
                           </a>
                        </div>
                     </div>
                     <div className='flex snap-start flex-col items-start rounded-xl bg-white p-3 md:flex-row md:items-center'>
                        <img
                           src='https://cdn.nhathuoclongchau.com.vn/unsafe/80x80/https://cms-prod.s3-sgn09.fptcloud.com/smalls/da_day_24ef495d10.png'
                           alt=''
                        />
                        <div>
                           <p className='line-clamp-2 text-sm font-bold'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse in sit porro
                              aliquam numquam?
                           </p>
                           <a href='' className='font-semibold text-blue-700'>
                              Kiểm tra
                           </a>
                        </div>
                     </div>
                     <div className='flex snap-start flex-col items-start rounded-xl bg-white p-3 md:flex-row md:items-center'>
                        <img
                           src='https://cdn.nhathuoclongchau.com.vn/unsafe/80x80/https://cms-prod.s3-sgn09.fptcloud.com/smalls/hen_suyen_c9ae54cca5.png'
                           alt=''
                        />
                        <div>
                           <p className='line-clamp-2 text-sm font-bold'>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse in sit porro
                              aliquam numquam?
                           </p>
                           <a href='' className='font-semibold text-blue-700'>
                              Kiểm tra
                           </a>
                        </div>
                     </div>
                  </Carousel>
               </div>
               <picture className=''>
                  <source
                     srcSet='https://www.nhathuoclongchau.com.vn/estore-images/home/heath/heath-check.png'
                     media='(min-width: 768px)'
                     className='absolute bottom-0 right-0 z-0 '
                  />
                  <img
                     src='https://nhathuoclongchau.com.vn/estore-images/home/heath/heath-check-flip.svg'
                     alt=''
                     className='absolute right-2 top-4 z-0 scale-110 md:bottom-0 md:top-auto md:scale-100'
                  />
               </picture>
            </div>
         </section>
         <section className='px-4  '>
            <div className='mx-auto max-w-[1216px]  '>
               <div className='mb-4 mt-10 flex gap-2'>
                  <img
                     src='https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/thuong_hieu_yeu_thich_e0c23dded6.png'
                     alt='thuong_hieu_yeu_thich_e0c23dded6'
                  />
                  <p className='text-lg font-semibold'>Thương hiệu yêu thích</p>
               </div>
               <div className=' w-full md:w-[1216px]'>
                  <Carousel numOfShowedItems={matches ? 5 : 3} gap={matches ? 18 : 12}>
                     <BrandCard promotion='Giảm ngay 20%' />
                     <BrandCard promotion='Giảm ngay 20%' />
                     <BrandCard promotion='Giảm ngay 20%' />
                     <BrandCard promotion='Giảm ngay 20%' />
                     <BrandCard promotion='Giảm ngay 20%' />
                     <BrandCard promotion='Giảm ngay 20%' />
                     <BrandCard promotion='Giảm ngay 20%' />
                     <BrandCard promotion='Giảm ngay 20%' />
                     <BrandCard promotion='Giảm ngay 20%' />
                     <BrandCard promotion='Giảm ngay 20%' />
                  </Carousel>
               </div>
               <div className='mb-4 mt-10 flex gap-2'>
                  <img
                     src='https://cdn.nhathuoclongchau.com.vn/unsafe/28x28/https://cms-prod.s3-sgn09.fptcloud.com/smalls/danh_muc_noi_bat_d03496597a.png'
                     alt='thuong_hieu_yeu_thich_e0c23dded6'
                  />
                  <p className='text-lg font-semibold'>Danh mục nổi bật</p>
               </div>
               <div className='mb-4 mt-10 flex gap-2'>
                  <img
                     src='https://cdn.nhathuoclongchau.com.vn/unsafe/28x28/https://cms-prod.s3-sgn09.fptcloud.com/smalls/san_pham_theo_doi_tuong_d7e7ffa80f.png'
                     alt='thuong_hieu_yeu_thich_e0c23dded6'
                  />
                  <p className='text-lg font-semibold'>Sản phẩm theo đối tượng</p>
               </div>
               <ProductsBySubject />
            </div>
         </section>
      </main>
   );
};

export default Home;
