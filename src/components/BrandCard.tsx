import React from 'react';
interface Props {
   promotion: string;
}
const BrandCard: React.FC<Props> = ({ promotion }) => {
   return (
      <div className='rounded-lg border border-zinc-300 bg-white px-2 py-4 transition-all duration-300 ease-out hover:border-blue-500'>
         <div className='flex  justify-center'>
            <img
               src='https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/Brauer_3c994beb38.png'
               alt='Greenbird_bd9e939393'
               className='h-[160px] object-cover'
            />
         </div>
         <div className='relative mt-4 h-14 w-full rounded-lg border border-zinc-300 p-1 '>
            <img
               src='https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/smalls/Greenbird_2_afcc23aa0f.png'
               alt='Greenbird_2_afcc23aa0f'
               className='h-full w-full rounded-lg'
               loading='lazy'
            />
         </div>
         <p className='mt-4 text-center  font-inter text-blue-700'>{promotion}</p>
      </div>
   );
};

export default BrandCard;
