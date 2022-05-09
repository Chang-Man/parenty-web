import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TopNavigator.module.scss';

const TopNavigator = ({ active, setActive }: any) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.wrapper}>
      <div className={styles.title}>가장 효율적인 유아부모 교육 Parenty</div>
      <div className={styles.buttons}>
        <div
          className={active == 1 ? styles.intro_no : styles.intro}
          onClick={() => {
            navigate('/');
            setActive(1);
          }}
        >
          프로그램 소개
        </div>
        <div
          className={active == 2 ? styles.apply_no : styles.apply}
          onClick={() => {
            navigate('/apply');
            setActive(2);
          }}
        >
          신청서 작성
        </div>
      </div>
    </nav>
  );
};

export default TopNavigator;
