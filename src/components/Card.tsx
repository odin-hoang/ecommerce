import { GiftFilled } from '@ant-design/icons';
interface Props {
   gift?: string;
   sale?: number;
   originalPrice: {
      price: number;
      unit: string;
   };
   imageUrl: string;
   name: string;
}
function numberWithCommas(number: number) {
   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
const Card: React.FC<Props> = ({ gift, sale = 0, originalPrice, imageUrl, name = 'lorem15' }) => {
   return (
      <div className='relative flex cursor-pointer flex-col items-start justify-center rounded-xl border border-transparent bg-white p-2 transition-all duration-300 ease-out hover:border-blue-500'>
         {!!sale && (
            <span className='absolute left-0 top-0 m-auto h-[26px] rounded-br-xl rounded-tl-xl bg-gradient-to-r from-orange-600 to-red-600 p-1 text-center align-middle font-inter text-sm font-semibold tracking-wider  text-white'>
               -{sale}%
            </span>
         )}
         <div className='flex flex-col items-center justify-center'>
            <img src={imageUrl} alt={name} className='h-32 w-32 object-cover' />
            <p className='mt-1 line-clamp-3 text-sm font-semibold'>{name}</p>
         </div>
         <div>
            <p className='mt-2 font-inter text-sm font-semibold text-blue-500'>
               {numberWithCommas(originalPrice.price * (1 - sale / 100))}đ / {originalPrice.unit.split(' ')[0]}
            </p>
            {!!sale ? (
               <p className='font-inter text-xs line-through'>{numberWithCommas(originalPrice.price)}đ</p>
            ) : (
               <p className='h-[20px] w-full'></p>
            )}
         </div>
         {gift ? (
            <span className='flex items-center rounded-[4px] bg-gradient-to-r from-orange-400 to-red-500'>
               <GiftFilled className=' flex items-center justify-center rounded-[4px] bg-orange-400 p-1 text-sm text-white' />
               <p className='px-1 text-sm font-semibold text-white'>{gift}</p>
            </span>
         ) : (
            <span className='h-[20px] w-full'></span>
         )}
         <span className='mt-2 rounded-xl bg-gray-100 px-3 py-[2px]  text-sm font-semibold'>{originalPrice.unit}</span>
      </div>
   );
};

export default Card;
