import React from 'react';
import styles from './Main.module.scss';
import { BsCheck } from 'react-icons/bs';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Main = ({ setActive }: any) => {
  const navigate = useNavigate();
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
      <div className={styles.wrapper2}>
        <div className={styles.text2}>
          <span className={styles.comment}>
            <RiDoubleQuotesL />
            엄마도 엄마가 처음이라서...
            <RiDoubleQuotesR />
          </span>
          <br />
          <span id={styles.small}>
            처음이기에 각종 정보들을 구해보지만
            <br />
            육아 서적, TV 프로그램, 맘카페 등에는
          </span>
          <br />
          <span id={styles.highlight}>온갖 다른 이야기뿐!</span>
          <br />
          <span className={styles.blue}>전문가</span>와 <span className={styles.underline}>일회성이 아닌</span>,
          <br />내 아이에 대해 <span className={styles.blue}>심도 깊은 이야기</span>를 나눌 수는 없을까?
          <br />
          <span className={styles.small}>
            그런 부모들을 위해 Parenty가 준비한
            <br />
            <RiDoubleQuotesL />
            유아부모를 위한 프리미엄 부모 교육 프로그램
            <RiDoubleQuotesR />
          </span>
          <br />
          <div className={styles.applyBox}>
            모집 기간: 5월 12일(목)-22일(금)
            <br />
            수강 기간: 5월 23일(월)-6월 20일(월)
            <br />
            (20명 초과 시, 추첨을 통해 선발)
          </div>
          <br />
          <span className={styles.explain}>
            본 교육은 <span className={styles.blue}>서울대학교</span> 교육학과 소속의
            <br />
            정상급 교육 전문가와 함께 진행하는 프로그램입니다.
          </span>
          <br />
          <button
            className={styles.applyButton}
            onClick={() => {
              navigate('/apply');
              setActive(2);
            }}
          >
            프로그램 신청하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
