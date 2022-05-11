import React from 'react';
import styles from './Apply.module.scss';

const Apply = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.big}>[접수 모집 안내]</span>
        <br />
        모집 기간: 5월 12일(목)~22일(금)
        <br />
        수강 기간: 5월 23일(월)~6월 20일(월)
        <br />
        20명 초과 시, 추첨을 통해 선발합니다.
        <br />
        <br />
        <button className={styles.link} onClick={() => window.open('https://forms.gle/RGrwkVbvHWqNukbV8', '_blank')}>
          신청하기
        </button>
      </div>
    </div>
  );
};

export default Apply;
