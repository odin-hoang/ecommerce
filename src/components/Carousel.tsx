import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { MutableRefObject, useRef, useState } from 'react';
import React from 'react';
import { cn } from '../utils/cn';

interface Props {
   children: React.ReactNode;
   width?: number;
   numOfShowedItems?: number;
   gap?: number;
   snap?: string;
   className?: string;
}
const Carousel: React.FC<Props> = ({
   children,
   width = 880,
   numOfShowedItems = 3,
   snap = 'snap-start',
   gap = 12,
   className,
}) => {
   const sliderRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
   const count = React.Children.count(children);
   const [active, setActive] = useState(numOfShowedItems);
   const handleSide = (side: number) => {
      // left is -1 and right is +1
      if (sliderRef.current) {
         const offset = width / numOfShowedItems;
         sliderRef.current.scrollLeft += side * offset;
      }
      setActive((prev) => prev + side);
   };
   return (
      <div className={cn(`relative z-10 w-full max-w-full ${className} `)}>
         <div
            ref={sliderRef}
            className={cn(
               `grid snap-x snap-mandatory auto-cols-[calc((100%/${numOfShowedItems})-${
                  numOfShowedItems * 3
               }px)] grid-flow-col flex-nowrap gap-[${gap}px] overflow-hidden scroll-smooth`,
            )}
         >
            {active != numOfShowedItems && (
               <LeftOutlined
                  className='absolute left-[-20px] top-[50%] z-20 flex h-10 w-10 -translate-y-[50%] cursor-pointer items-center justify-center rounded-full border bg-white font-semibold text-blue-500 hover:border-blue-500'
                  onClick={() => handleSide(-1)}
               />
            )}
            {active != count && (
               <RightOutlined
                  className='absolute right-[-20px] top-[50%] z-20 flex h-10 w-10 -translate-y-[50%] cursor-pointer items-center justify-center rounded-full border bg-white font-semibold text-blue-500 hover:border-blue-500'
                  onClick={() => handleSide(1)}
               />
            )}
            {React.Children.map(children, (child) => (
               <div className={cn(`${snap}`)}>{child}</div>
            ))}
         </div>
      </div>
   );
};

export default Carousel;
