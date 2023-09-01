import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
const ProductsBySubject = () => {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const subjects = ['Trẻ em', 'Mẹ và bé', 'Người cao tuổi', 'Người tiểu đường'];
   const matches = useMediaQuery('(min-width: 768px)');
   return (
      <>
         <div className='flex gap-2'>
            {subjects.map((subject, index) => (
               <Button active={index === selectedIndex} key={index} onClick={() => setSelectedIndex(index)}>
                  {subject}
               </Button>
            ))}
         </div>
         <div className='w-full md:w-[1216px]'>
            <Carousel
               numOfShowedItems={matches ? 6 : 2}
               gap={matches ? 20 : 12}
               className='mt-4 rounded-xl bg-blue-500 p-4'
            >
               <Card
                  imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00033432_nuoc_hong_sam_hongsamjin_plus_15_goi_x_70ml_6712_6214_large_49e8d43f3d.JPG'
                  originalPrice={{ price: 490000, unit: 'Hộp 3 Hộp lẻ x 5 Gói' }}
                  name='Nước Hồng Sâm Hongsamjin Plus hỗ trợ tăng cường sức khỏe và sức đề kháng (70ml x 15 gói)'
                  gift='Mua 2 tặng 1'
               />
               <Card
                  imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00033432_nuoc_hong_sam_hongsamjin_plus_15_goi_x_70ml_6712_6214_large_49e8d43f3d.JPG'
                  originalPrice={{ price: 490000, unit: 'Hộp 3 Hộp lẻ x 5 Gói' }}
                  name='Nước Hồng Sâm Hongsamjin Plus hỗ trợ tăng cường sức khỏe và sức đề kháng (70ml x 15 gói)'
               />
               <Card
                  imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00033432_nuoc_hong_sam_hongsamjin_plus_15_goi_x_70ml_6712_6214_large_49e8d43f3d.JPG'
                  originalPrice={{ price: 490000, unit: 'Hộp 3 Hộp lẻ x 5 Gói' }}
                  name='Nước Hồng Sâm Hongsamjin Plus hỗ trợ tăng cường sức khỏe và sức đề kháng (70ml x 15 gói)'
               />
               <Card
                  imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00033432_nuoc_hong_sam_hongsamjin_plus_15_goi_x_70ml_6712_6214_large_49e8d43f3d.JPG'
                  originalPrice={{ price: 490000, unit: 'Hộp 3 Hộp lẻ x 5 Gói' }}
                  name='Nước Hồng Sâm Hongsamjin Plus hỗ trợ tăng cường sức khỏe và sức đề kháng (70ml x 15 gói)'
               />
               <Card
                  imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00033432_nuoc_hong_sam_hongsamjin_plus_15_goi_x_70ml_6712_6214_large_49e8d43f3d.JPG'
                  originalPrice={{ price: 490000, unit: 'Hộp 3 Hộp lẻ x 5 Gói' }}
                  name='Nước Hồng Sâm Hongsamjin Plus hỗ trợ tăng cường sức khỏe và sức đề kháng (70ml x 15 gói)'
               />
               <Card
                  imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00033432_nuoc_hong_sam_hongsamjin_plus_15_goi_x_70ml_6712_6214_large_49e8d43f3d.JPG'
                  originalPrice={{ price: 490000, unit: 'Hộp 3 Hộp lẻ x 5 Gói' }}
                  name='Nước Hồng Sâm Hongsamjin Plus hỗ trợ tăng cường sức khỏe và sức đề kháng (70ml x 15 gói)'
               />
               <Card
                  imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00033432_nuoc_hong_sam_hongsamjin_plus_15_goi_x_70ml_6712_6214_large_49e8d43f3d.JPG'
                  originalPrice={{ price: 490000, unit: 'Hộp 3 Hộp lẻ x 5 Gói' }}
                  name='Nước Hồng Sâm Hongsamjin Plus hỗ trợ tăng cường sức khỏe và sức đề kháng (70ml x 15 gói)'
               />
            </Carousel>
         </div>
      </>
   );
};

export default ProductsBySubject;
