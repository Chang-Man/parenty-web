import React from 'react';
import styles from './Main.module.scss';
import { BsCheck } from 'react-icons/bs';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper1}>
        <div className={styles.text1}>
          <br />
          <br />
          <br />
          <br />
          <span id={styles.smart}>스마트한 부모 20명</span> 을 위한 유아부모 교육 플랫폼,
          <br />
          <span id={styles.parenty}>Parenty</span>
          <br />
          <span id={styles.small}>
            맘카페, 책, 지인, SNS 등...
            <br />
            비전문적이고 방대한 육아 정보에 지치셨나요?
          </span>
          <br />
          <RiDoubleQuotesL />
          <br />
          <span id={styles.pink}>다른 아이 이야기</span>로 가득 찬 비효율적인 방식이 아닌, <br />
          <span className={styles.yellow}>내 아이 이야기</span>로 가득 찬 <span className={styles.yellow}>LIVE 수업</span>을 경험하세요!
          <br />
          <RiDoubleQuotesR />
          <br />
          <span id={styles.checks}>
            <BsCheck />
            아이가 크면서 부모와 멀어지지 않을가 고민이 된다면?
            <br />
            <BsCheck />
            전문가의 맞춤식 부모 교육 수업을 경험해보고 싶다면?
            <br />
            <BsCheck />
            우리 아이를 위한 더 좋은 부모가 되고 싶다면?
          </span>
        </div>
      </div>
      <div className={styles.wrapper2}></div>
    </div>
  );
};

export default Main;
