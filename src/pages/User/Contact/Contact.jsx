import React, { useEffect, useState } from 'react';
import { images } from '../../../utils/images';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center justify-between w-full px-5 xl:flex-row xl:px-20">
        <div className="w-full xl:w-[610px] mb-10 xl:mb-0 xl:mr-20 text-center xl:text-left">
          <span className="text-4xl leading-tight text-blue-500 xl:text-6xl fontEB">
            반가워요!
            <br />
          </span>
          <span className="text-4xl leading-tight text-white xl:text-6xl fontEB">
            어떤 것을
            <br />
            도와드릴까요?
          </span>
        </div>
        <ContactTabs />
      </div>
    </div>
  );
};

const ContactTabs = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState('etc');

  useEffect(() => {
    const tab = location.search.replace('?', '');
    setSelectedTab(tab);
  }, [location]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto mb-20 ml-0 xl:flex-row xl:h-64 xl:ml-40">
      <div className="flex flex-col w-full space-y-4 text-center xl:space-y-28 xl:w-1/5 xl:text-left">
        <div className="relative">
          <button
            className={`text-xl xl:text-3xl fontMedium ${selectedTab === 'etc' ? 'text-white' : 'text-gray-500'}`}
            onClick={() => setSelectedTab('etc')}>
            [기타 의뢰]
          </button>
          {/* 데스크탑 보기에서 화살표 아이콘 */}
          <span className="absolute bottom-0 left-0 flex items-center hidden w-full h-1 mt-2 xl:block">
            <img src={images.arrow} alt="arrow" className="w-full mt-4" />
          </span>
          {selectedTab === 'etc' && (
            <div className="block xl:hidden bg-[#1C58DA] text-white p-4 rounded-lg w-10/12 max-w-md mx-auto mt-4 flex fontLight text-base justify-center h-auto">
              {/* 모바일 보기에서 콘텐츠 박스 */}
              <div className="p-4">
                <span className="text-lg fontSB">기타 의뢰</span>는 카카오톡 채널 <br />
                "멋쟁이사자처럼 at 성결대"
                <br />로 문의 바랍니다.
                <br />
                <br />
                감사합니다!
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className={`text-xl xl:text-3xl fontMedium ${
              selectedTab === 'Collaboration' ? 'text-white' : 'text-gray-500'
            }`}
            onClick={() => setSelectedTab('Collaboration')}>
            [협업 문의]
          </button>
          {/* 데스크탑 보기에서 화살표 아이콘 */}
          <span className="absolute bottom-0 left-0 flex items-center hidden w-full h-1 mt-2 xl:block">
            <img src={images.arrow} alt="arrow" className="w-full mt-4" />
          </span>
          {selectedTab === 'Collaboration' && (
            <div className="block xl:hidden bg-[#34C242] text-white p-4 rounded-lg w-10/12 max-w-md mx-auto mt-4 flex fontLight text-base justify-center h-auto">
              {/* 모바일 보기에서 콘텐츠 박스 */}
              <div className="p-4">
                <span className="text-lg fontSB">협업 문의</span>는 "sungkyul.univ@likelion.org" 위 메일 주소로 문의
                바랍니다.
                <br />
                <br />
                감사합니다!
              </div>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className={`text-xl xl:text-3xl fontMedium ${selectedTab === 'inquiry' ? 'text-white' : 'text-gray-500'}`}
            onClick={() => setSelectedTab('inquiry')}>
            [문의 사항]
          </button>
          {/* 데스크탑 보기에서 화살표 아이콘 */}
          <span className="absolute bottom-0 left-0 flex items-center hidden w-full h-1 mt-2 xl:block">
            <img src={images.arrow} alt="arrow" className="w-full mt-4" />
          </span>
          {selectedTab === 'inquiry' && (
            <div className="block xl:hidden bg-[#747474] text-white p-4 rounded-lg w-10/12 max-w-md mx-auto mt-4 flex fontLight text-base justify-center h-auto">
              {/* 모바일 보기에서 콘텐츠 박스 */}
              <div className="p-4">
                <span className="text-lg fontSB">문의 사항</span>은 인스타그램 @likelion_sku DM으로 문의 바랍니다.
                <br />
                <br />
                감사합니다!
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="relative flex items-center justify-center flex-grow h-full xl:h-auto">
        {/* 데스크탑 보기에서 콘텐츠 박스 */}
        {selectedTab === 'etc' && (
          <div className="hidden xl:block absolute top-0 xl:top-auto bg-[#1C58DA] text-white p-4 rounded-lg w-60 xl:w-72 h-36 xl:h-44 flex fontLight text-base xl:text-xl">
            <div>
              <span className="text-lg fontSB xl:text-xl">기타 의뢰</span>는 카카오톡 채널 <br />
              "멋쟁이사자처럼 at 성결대"
              <br />로 문의 바랍니다.
              <br />
              <br />
              감사합니다!
            </div>
          </div>
        )}
        {selectedTab === 'Collaboration' && (
          <div className="hidden xl:block absolute top-0 bg-[#34C242] text-white p-4 rounded-lg w-60 xl:w-72 h-36 xl:h-44 flex items-center justify-center fontLight text-base xl:text-xl">
            <div>
              <span className="text-lg fontSB xl:text-xl">협업 문의</span>는 "sungkyul.univ@likelion.org" 위 메일 주소로
              문의 바랍니다.
              <br />
              <br />
              감사합니다!
            </div>
          </div>
        )}
        {selectedTab === 'inquiry' && (
          <div className="hidden xl:block absolute top-0 xl:top-28 bg-[#747474] text-white p-4 rounded-lg w-60 xl:w-72 h-36 xl:h-44 flex items-center justify-center text-base xl:text-xl fontLight">
            <div>
              <span className="text-lg fontSB xl:text-xl">문의 사항</span>은 인스타그램 @likelion_sku DM으로 문의
              바랍니다.
              <br />
              <br />
              감사합니다!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
