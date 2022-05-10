import React from 'react';
import styles from './Main.module.scss';
import { BsCheck } from 'react-icons/bs';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import Table from '../../static/images/table.jpg';
import Logo from '../../static/images/logo.png';

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
      <div className={styles.wrapper3}>
        <div className={styles.text3}>
          <span className={styles.highlight}>왜 유아부모 인가요?</span>
          <br />
          <span className={styles.saying}>
            <RiDoubleQuotesL />
            세 살 버릇 여든까지 간다.
            <RiDoubleQuotesR />
          </span>
          <br />
          <span className={styles.line}>
            <span className={styles.strong}>프로이트</span>
            를 포함한 여러 저명한 교육학자들은
            <br />
            인간의 성격은 유아기 때의 경험과 환경에
            <br />
            가장 많은 영향을 받는다고 주장하였습니다.
          </span>
          <br />
          <span className={styles.blue}>즉, 우리 아이의 성격은 대부분 유아기 때 결정되는 것이죠.</span>
          <br />이 중요한 시기에 아이에게 가장 필요한 것은,
          <br /> 스마트한 부모입니다.
          <br />
          <GiMagnifyingGlass size={160} className={styles.magnify} />
        </div>
      </div>
      <div className={styles.wrapper4}>
        <div className={styles.text4}>
          <span className={styles.ques}>프로그램은 어떻게 진행되나요?</span>
          <br />
          <IoIosArrowDown size={30} />
          <br />
          <span className={styles.small}>유아부모를 위한 Parenty의 프리미엄 부모 교육 프로그램은</span>
          <br />
          <span className={styles.green}>서울대학교 교육학과 소속의 교육 전문가님과 함께</span>
          <br />
          <span className={styles.strong}>4주 동안</span> 유아부모의 소통 능력을 증진시켜줄
          <br />
          알찬 내용으로 진행됩니다.
          <br />
          <img className={styles.table} src={Table} alt={'table'} />
          <br />
          <br />
          <br />
          그동안 <span className={styles.strong}>비전문적이고 비효율적인 양육 정보</span>와
          <br />
          부모 교육으로 <span className={styles.strong}>많이 힘드셔죠?</span>
          <br />
          <br />
          <span className={styles.blue}>parenty 만의</span>
          <br />
          <span className={styles.blue}>전문적이고 효율적이고 맞춤식 교육</span>을 통해
          <br />
          부모님들의 고통을 해결해드리겠습니다.
        </div>
      </div>
      <div className={styles.wrapper5}>
        <div className={styles.text5}>
          <span className={styles.big}>Parenty의 수업은 이렇게 진행됩니다.</span>
          <br />
          <div className={styles.box}>
            <span>
              Parenty
              <br />
              (90분)
            </span>
            <div className={styles.line} />
            <span>
              유아부모 교육
              <br />
              (40분)
              <br />
              +<br />
              Parenty Time
              <br />
              (50분)
            </span>
          </div>
          <span className={styles.explain}>
            <br />
            ※한 수업에는 오직 20명의 부모님만 참가하실 수 있습니다.
            <br />
            ※본 프로그램은 주 1회, 총 4주 코스로 구성되어 있습니다.
          </span>
          <div className={styles.divideLine} />
          <br />
          <br />
          <span className={styles.que}>
            <RiDoubleQuotesL />
            유아부모 교육 시간에는 무엇을 배우나요
            <RiDoubleQuotesR />?
          </span>
          <br />
          유아부모 교육시간은 수강생분들이 프로그램 신청당시
          <br />
          제출하신 평소의 고민과 궁금한 점들에 대한 전문가의
          <br />
          답변 및 조언들로 구성될 예정입니다.
          <br />
          <br />
          <br />
          <span className={styles.ex}>
            전문가가 전달하고 싶은 것만 전달하는 방식이 아니라,
            <br />
            수강하시는 분들이 궁금하신 점을 미리 듣고
            <br />
            이를 바탕으로 전문가가 수업을 직접 구성하는 방식입니다.
          </span>
        </div>
      </div>
      <div className={styles.wrapper6}>
        <div className={styles.text6}>
          <span className={styles.big}>
            <span className={styles.blue}>
              <RiDoubleQuotesL />
              Parenty Time
              <RiDoubleQuotesR />
            </span>
            이란?
          </span>
          <br />
          <span className={styles.strong}>Parenty Time</span>은 신청 시 미저 제출하지 못한 내용을
          <br />
          <br />
          <span className={styles.strong}>
            전문가에게 실시간으로 직접 질문하고,
            <br />
            <br />
            바로 답변을 듣는 시간입니다.
          </span>
          <br />
          <br />
          <br />
          <br />
          <span className={styles.small}>
            다른 아이 이야기로 가득했던 기존 방식과는 달리
            <br />
            <span className={styles.strong}>
              우리 아이 교육과 관련된 의문을 전문가에게 직접 질문하고
              <br />
              곧바로 답변을 들어보세요.
            </span>
          </span>
          <br />
          <span className={styles.middle}>
            <span className={styles.strong}>*Parenty의 모든 수업</span>
            은 일방향적인 녹화 동영상이 아니라
            <br />
            <br />
            <span className={styles.strong}>
              전문가와의 <span className={styles.blue}>쌍뱡향 LIVE 화상 수업(ZOOM)</span>입니다.
            </span>
          </span>
        </div>
      </div>
      <div className={styles.wrapper7}>
        <div className={styles.text7}>
          <span className={styles.intro}>Parenty 전문 강사님</span>
          <br />
          <span className={styles.small}>
            유아부모를 위한 <span className={styles.strong}>가장 효율적인 프리미엄 프로그램</span>을
            <br />
            <span className={styles.strong}>4주 동안 진행해줄 전문가님을 소개</span>
            하겠습니다!
          </span>
          <br />
          <span className={styles.name}>
            <span className={styles.strong}>조애리</span> 강사님
          </span>
          <br />
          -서울대학교 사범대 교육학과 교육상담 석사 졸업
          <br />
          -서울대학교 사범대 교육학과 교육상담 박사 졸업
          <br />
          -2011년 ~ 현재 서울대 강사(&quot;생활지도 및 상담&quot; 강의)
          <br />
          -경인교대, 명지대, 중앙대, 단국대, 광운대 등 출강
          <br />
          <img id={styles.logo} src={Logo} alt={'SNU'} />
        </div>
      </div>
      <div className={styles.wrapper8}>
        <div className={styles.text8}>
          <div className={styles.box}>[ 교육 참가비 ]</div>
          <br />
          4주 과정 참가비: <span className={styles.price}>600,000원</span>
          <br />
          <span className={styles.blue}>런칭 기획가: 350,000원</span>
          <br />
          <span className={styles.strong}>얼리버드시 추가 할인</span>
          <br />
          5월 12일(목)~5월 17일(화) 23시 59분까지 신청시
          <br />
          30만원
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
          <br />
          결제 없이 우선 신청만 하세요.
          <br />
          <br />
          신청 기간에 따라 금액이 달라집니다.
        </div>
      </div>
      <div className={styles.wrapper9}>
        <div className={styles.text9}>
          <span className={styles.title}>
            We&apos;re
            <br />
            Parenty Team
          </span>
          <br />
          <span className={styles.small}>
            안녕하세요.
            <br />
            <span className={styles.strong}>
              유아부모 교육 혁신을 위한
              <br />
              가장 효율적인 프리미엄 교육 플랫폼
              <br />
              패런티(Parenty)입니다.
            </span>
          </span>
          <br />
          Parenty는
          <br />
          맘카페나 지인, 육아 서적이나 방송 프로그램을 통해서는
          <br />
          얻기 어려운,
          <span className={styles.strong}>
            오로지 나만을 위한 부모교육을 통해
            <br />
            가장 효율적으로 프리미엄 부모교육을 제공하는
            <br />
            플랫폼
          </span>
          입니다.
          <br />
          <br />
          어렵고 막막했던 좋은 부모 되기.
          <br />
          Parenty가 스마트하고 효율적으로 알려드리겠습니다.
          <br />
          <br />
          <button
            className={styles.applyButtonL}
            onClick={() => {
              navigate('/apply');
              setActive(2);
            }}
          >
            프로그램 신청하기
          </button>
          <br />
          기타 문의: 010-6661-8289
        </div>
      </div>
    </div>
  );
};

export default Main;
