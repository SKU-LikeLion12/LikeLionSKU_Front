import React, { useState } from 'react';
import axios from 'axios';

const AssignmentForm = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubtitle] = useState(''); // 추가된 subtitle 입력 필드
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    // 제목이나 설명이 비어 있는 경우 경고 메시지 표시 및 요청 막기
    if (!title.trim() || !description.trim()) {
      alert('제목과 설명을 입력하세요');
      return;
    }

    try {
      let token = localStorage.getItem('token'); // 토큰 가져오기

      // 토큰을 콘솔에 출력
      console.log('Retrieved Token:', token);

      // 만약 토큰이 ""로 감싸져 있다면 제거
      if (token.startsWith('"') && token.endsWith('"')) {
        token = token.slice(1, -1);
      }

      // 수정된 토큰을 콘솔에 출력
      console.log('Processed Token:', token);

      // 서버로 데이터를 보내는 POST 요청
      const response = await axios.post(
        'https://back.sku-sku.com/admin/assignment/add',
        {
          trackType: 'FRONTEND', // 고정된 trackType
          title,
          subTitle,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Bearer 토큰 설정
            'Content-Type': 'application/json', // 요청이 JSON 형식임을 명시
          },
        },
      );

      if (response.status === 201) {
        alert('등록되었습니다.');
        onSubmit(response.data); // 등록 성공 시 추가된 과제를 전달
      } else {
        alert('등록에 실패하였습니다.');
      }
    } catch (error) {
      alert('등록에 실패하였습니다.');
      console.error('Error submitting assignment:', error);
    }
  };

  return (
    <div className="mt-8 w-full px-16 max-w-4xl mx-auto">
      <div className="text-xl fontBold mb-6">오늘의 과제 관리</div>
      <div className="space-y-6">
        <div className="flex items-center">
          <label className="block text-sm fontSB w-16">제목</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="mt-1 h-8 block flex-1 border border-gray-400 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="flex items-center">
          <label className="block text-sm fontSB w-16">부제</label>
          <input
            type="text"
            value={subTitle}
            onChange={e => setSubtitle(e.target.value)}
            className="mt-1 h-8 block flex-1 border border-gray-400 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="flex items-start">
          <label className="block text-sm fontSB w-16 pt-2">설명</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="mt-1 h-52 block flex-1 border border-gray-400 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="6"></textarea>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            className="px-4 py-2 border border-gray-400 text-xs rounded-md hover:bg-gray-300 fontRegular"
            onClick={handleSubmit}>
            등록
          </button>
          <button
            className="px-4 py-2 border border-gray-400 text-xs rounded-md hover:bg-gray-300 fontRegular"
            onClick={onCancel}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentForm;
