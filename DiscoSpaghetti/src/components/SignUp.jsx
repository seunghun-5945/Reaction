import React, { useState } from 'react';
import '../styles/SignUp.css';

export default function SignUp() {
  // 사용자 이름, 아이디, 비밀번호, 비밀번호 확인 변수 선언
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  // 입력 유효성 검사를 위한 변수들임
  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [confirmPwValid, setConfirmPwValid] = useState(false);
  
  // 전체 유효성 검사를 위한 변수임
  const [notAllow, setNotAllow] = useState(true);

  // 사용자명 입력 핸들러임
  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);
    updateButtonState(newName, id, pw, confirmPw);
  };

  // 아이디 입력 핸들러임
  const handleId = (e) => {
    const newId = e.target.value;
    setId(newId);
    setIdValid(newId.length >= 7);
    updateButtonState(name, newId, pw, confirmPw);
  };

  // 비밀번호 입력 핸들러임
  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setPw(newPassword);
    setPwValid(newPassword.length >= 4);
    updateButtonState(name, id, newPassword, confirmPw);
  };

  // 비밀번호 확인 입력 핸들러임
  const handleConfirmPassword = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPw(newConfirmPassword);
    setConfirmPwValid(newConfirmPassword === pw);
    updateButtonState(name, id, pw, newConfirmPassword);
  };

  // 전체 유효성을 갱신하는 함수임
  const updateButtonState = (newName, newId, newPassword, newConfirmPassword) => {
    setNotAllow(
      !(
        newId.length >= 7 &&
        newPassword.length >= 4 &&
        newConfirmPassword === newPassword
      )
    );
  };

  // 회원가입 버튼 클릭 핸들러임
  const onClickSignUpButton = () => {
    if (!notAllow) {
      alert('회원가입에 성공했습니다.');
      console.log('회원가입 정보:', { name, id, pw }); //삭제해도 댐
    } else {
      alert('회원가입 정보를 올바르게 입력해주세요.'); //이것도 필요없을 거 같긴함
    }
  };

  // 엔터 키 다운 가능하게 만든 핸들러임
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !notAllow) {
      onClickSignUpButton();
    }
  };

  return (
    <div className='page1'>
      <div className='titleWrap1'>
        회원가입
      </div>

      <div className='contentWrap1'>
        <div className='inputTitle1'>사용자명</div>
        <div className='inputWrap1'>
          <input
            type='text'
            className='input1'
            placeholder='사용자명 입력'
            value={name}
            onChange={handleName}
          />
        </div>

        <div className='inputTitle1'>아이디</div>
        <div className='inputWrap1'>
          <input
            type='text'
            className='input1'
            placeholder='아이디 입력'
            value={id}
            onChange={handleId}
          />
          <button className='overLapButton' disabled={!idValid}>중복확인</button>
        </div>

        <div className='errorMessageWrap'>
          {!idValid && id.length > 0 && <div>7자 이상 입력하세요</div>}
        </div>

        <div className='inputTitle1'>비밀번호</div>
        <div className='inputWrap1'>
          <input
            type='password'
            className='input1'
            placeholder='비밀번호 입력'
            value={pw}
            onChange={handlePassword}
          />
        </div>

        <div className='errorMessageWrap'>
          {!pwValid && pw.length > 0 && <div>4자 이상 입력하세요</div>}
        </div>

        <div className='inputTitle1'>비밀번호 확인</div>
        <div className='inputWrap1'>
          <input
            type='password'
            className='input1'
            placeholder='비밀번호 확인 입력'
            value={confirmPw}
            onChange={handleConfirmPassword}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className='errorMessageWrap'>
          {!confirmPwValid && confirmPw.length > 0 && <div>비밀번호가 일치하지 않습니다</div>}
        </div>
      </div>

      <div className='reactionWrap1'>
        <div className='reactionText1'>
          R<span>e</span>action
        </div>
      </div>

      <div>
        <button onClick={onClickSignUpButton} disabled={notAllow} className='signupButton'>
          회원가입
        </button>
      </div>
    </div>
  );
}