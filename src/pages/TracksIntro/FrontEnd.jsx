import React from 'react';
import { images } from '../../utils/images';

const FrontEnd = () => {
  return (
    <>
    <div className='container flex items-center justify-center mx-auto'>
        <div className='w-1/2'>
          <div>
            <span className='text-[#FF7816] font-bold text-6xl'>FRONT-END</span><br/>
            <span className='text-[#FFD7BA] font-bold text-6xl'>CURRICULUM</span>
          </div>
          
          <div className='py-32'>
            <img src={images.track_frontend_curri} alt="front_curriculum" className='w-2/3' />
          </div>

          <div className='leading-7'>
            <span className='font-bold text-2xl'>프론트엔드</span>는<br/>
            웹 애플리케이션 또는 모바일 앱의 사용자 인터페이스를 담당하는 부분입니다.<br/>
            사용자가 상호작용하는 화면을 구성하고 사용자 경험을 개선합니다.<br/>
            HTML, CSS, JavaScript를 사용하여 웹 페이지를 디자인하고 개발하며,<br/>
            사용자의 요청과 상호작용을 처리하고 화면에 표시합니다.<br/><br/>
            
            프론트엔드는 주로 웹 브라우저에서 실행되며,<br/>
            사용자가 직접 보는 부분으로, 시각적인 디자인과 사용자 경험에 중점을 둡니다.<br/>
          </div>
        </div>
        <div className='w-1/2 flex justify-center'>
          <img src={images.track_frontend_background} alt="background" />
        </div>
    </div>
    </>
  );
};

export default FrontEnd;
