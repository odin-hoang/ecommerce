import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../components/Card';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const Trending = () => {
   return (
      <div className='relative'>
         <input id='more' type='checkbox' className='peer mx-auto appearance-none md:hidden ' />
         <label
            htmlFor='more'
            className='absolute bottom-0 left-[50%] z-10 translate-x-[-50%] cursor-pointer whitespace-nowrap border-none peer-checked:hidden md:hidden'
         >
            <FontAwesomeIcon icon={faAngleDoubleDown} className='mr-2 text-xs' />
            <span className='font-semibold'>Xem thêm 6 sản phẩm</span>
         </label>

         <div className='mx-auto grid h-[945px] max-w-[1216px] grid-cols-2 gap-2 overflow-hidden peer-checked:h-full sm:h-[926px] md:h-full md:grid-cols-6 md:gap-5'>
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/kutie_skin_1_86b388eab2.jpg'
               name='Tinh dầu bạch đàn chanh Kutieskin giúp đuổi muỗi và côn trùng (30ml)'
               sale={10}
               originalPrice={{ price: 186000, unit: 'Hộp' }}
            />
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09210_5c9ea963ea.jpg'
               sale={20}
               name='Nước Collagen5000 Đông Trùng Hạ Thảo  Biok hỗ trợ ngăn ngừa quá trình lão hóa, tăng sức đề kháng (10 chai x 75ml)'
               originalPrice={{ price: 525000, unit: 'Hộp 10 chai' }}
            />
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00028493_omexxel_3_6_9_excelife_100v_8294_633e_large_b8e1f18c7e.jpg'
               name='Viên uống Omexxel 3-6-9 Excelife bổ tim, bổ não, sáng mắt, đẹp da (100 viên)'
               sale={20}
               originalPrice={{ price: 378000, unit: 'Hộp 100 viên' }}
            />
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00031036_omexxel_ginkgo_120_2x15_5958_633e_large_cb67aacf67.jpg'
               name='Viên uống Omexxel Ginkgo 120 Excelife hỗ trợ tăng cường tuần hoàn máu não, tốt cho tim mạch (30 viên)'
               sale={20}
               originalPrice={{ price: 364000, unit: 'Hộp 2 Vỉ x 15 viên' }}
            />
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/DSC_08384_9ef40feeb4.jpg'
               name='Viên uống Natural Vitamin E 400IU Naturecare cải thiện sức khỏe da và phục hồi da (60 viên)'
               sale={20}
               originalPrice={{ price: 235000, unit: 'Hộp 60 viên' }}
            />
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00032963_brauer_baby_kids_liquid_vitamin_d_400iu_chai_10ml_9699_623c_large_1c75b2ed2c.jpg'
               name='Siro Brauer Baby Kids Liquid Vitamin D 400IU hỗ trợ bổ sung Vitamin D3 (10ml)'
               gift='Mua 1 tặng 1'
               originalPrice={{ price: 378000, unit: 'Hộp' }}
            />
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00032485_may_do_huyet_ap_bap_tay_tu_dong_and_ua_611_2417_615f_large_e007ee73d9.jpg'
               name='Máy đo huyết áp bắp tay tự động AND UA-611 hỗ trợ đo huyết áp và nhịp tim'
               sale={10}
               originalPrice={{ price: 900000, unit: 'Hộp' }}
            />
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/DSC_00481_7d75df71b4.jpg'
               name='Viên uống Feroglobin B12 Vitabiotics bổ sung khoáng chất cho hồng cầu (30 viên)'
               gift='Quà tặng'
               originalPrice={{ price: 327000, unit: 'Hộp 2 Vỉ x 15 viên' }}
            />
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/DSC_00511_937fafcbf1.jpg'
               name='Viên uống Pregnacare Plus Omega-3 Vitabiotics bổ sung vitamin và khoáng chất (56 viên)'
               gift='Quà tặng'
               originalPrice={{ price: 584000, unit: 'Hộp 56 viên' }}
            />
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00032797_xit_hong_afree_thai_minh_pharma_30ml_5716_6228_large_d54d1049b8.jpg'
               name='Dung dịch xịt họng Afree Thái Minh điều trị ho, nhiễm khuẩn, viêm đường hô hấp (30ml)'
               sale={20}
               originalPrice={{ price: 125000, unit: 'Lọ' }}
            />
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00345416_vien_uong_bo_sung_vitamin_multi_vitas_lab_well_60_vien_7536_6327_large_6e1736472c.jpg'
               name='Viên uống Multi Vitas Lab Well bổ sung vitamin và khoáng chất cho cơ thể (60 viên)'
               sale={20}
               originalPrice={{ price: 340000, unit: 'Hộp 60 viên' }}
            />
            <Card
               imageUrl='https://cdn.nhathuoclongchau.com.vn/unsafe/128x128/https://cms-prod.s3-sgn09.fptcloud.com/00008543_kem_chong_nang_eucerin_sun_protection_spf50_6202_5c8f_large_3d83b930d7.jpg'
               name='Kem chống nắng Eucerin Sun Dry Touch Oil Control SPF 50+ kiểm soát nhờn (50ml)'
               sale={50}
               originalPrice={{ price: 549000, unit: 'Tuýp' }}
               gift='Mua 1 tặng 1'
            />
         </div>
         <div className='h-8 w-full peer-checked:hidden'></div>
      </div>
   );
};

export default Trending;
