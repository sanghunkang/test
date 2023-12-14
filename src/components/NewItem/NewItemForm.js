import React, { useCallback, useContext, useState, useEffect } from "react";
import { ItemDispatchContext } from '../../pages/ReportPage.jsx';
import {
  enteredOnlyNumber,
  addComma,
  deleteComma,
} from "../../utils/numberUtils.js";
import { StopEditContext } from "./NewItemContainer.js";
import "./NewItemForm.css";
import "../../button.css";
import "../../font.css";

const menudata = require('./MenuData');

const NewItemForm = () => {
  const [{ onAdd }, { nextItemId }] = useContext( ItemDispatchContext );
  const { stopEditingHandler } = useContext( StopEditContext );
  const TITLE_SIZE = 35;
  const [enteredTitle, setEnteredTitle] = useState( "" );
  const [enteredAmount, setEnteredAmount] = useState( "" );
  const [enteredAmountType, setEnteredAmountType] = useState( "income" );

  const [isTitleSizeOver, setIsTitleSizeOver] = useState( false );
  const [isEnteredWrongAmount, setIsEnteredWrongAmount] = useState( false );

  const getDate = useCallback( () => {
    return new Date().toISOString().substring( 0, 10 );
  }, [] );

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup)
    //console.log(showPopup)
    //console.log(!showPopup)
  }

  const titleChangeHandler = ( event ) => {
    let isSizeOver = event.target.value.length > TITLE_SIZE ? true : false;
    setIsTitleSizeOver( isSizeOver );

    setEnteredTitle( event.target.value );
  };

  const amountChangeHandler = ( event ) => {
    let isNotNumber = /^[^1-9][^0-9]{0,11}$/g.test( event.target.value )
      ? true
      : false;
    setIsEnteredWrongAmount( isNotNumber );
    if ( isNotNumber ) return;

    let amount = addComma( enteredOnlyNumber( event.target.value ) );
    setEnteredAmount( amount );
  };
  const [today, setToday] = useState(new Date());
  const amountTypeChangeHandler = ( event ) => {
    setEnteredAmountType( event.target.value );
  };

  const [enteredDate, setEnteredDate] = useState('');

  useEffect(() => {
    // 컴포넌트가 마운트될 때 오늘 날짜로 설정
    setToday(new Date());
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  const dateChangeHandler = (event) => {
    // 입력된 날짜를 상태에 업데이트
    setEnteredDate(event.target.value);
  };

  const submitHandler = ( event ) => {
    event.preventDefault(); // 페이지 리로드 방지

    const enteredData = {
      id: nextItemId,
      date: new Date( enteredDate || formatDate(today)),
      title: enteredTitle,
      amount: deleteComma( enteredAmount ),
      amountType: enteredAmountType,
      savedamount: calsavedamnt(enteredTitle), 
    };

    function calsavedamnt(enteredTitle)
    {
      let savedAmount;
      var index = menudata.indexOf(enteredTitle);
      if (index !== -1) {
        var menuName = menudata[index];
        var savedPrice = menudata[index + 1];
        console.log("메뉴: " + menuName + ", 절약한 가격: " + savedPrice);
        savedAmount = savedPrice;
      } else {
        savedAmount = Math.round(deleteComma( enteredAmount ) * 1.3);
      }
/*
      if (recipe.name === "홍합탕") {
        savedAmount = 7645;
      } else if (enteredTitle === "꼬막무침") {
        savedAmount = 6650;
      } else if (enteredTitle === "마라탕") {
        savedAmount = 7035;
      } else if (enteredTitle === "냉소바") {
        savedAmount = 7033;
      } else {
        savedAmount = 1000;
      }
*/
      return savedAmount;
    }

    onAdd( enteredData ); // 부모 컴포넌트로 enteredData 전달

    // 입력창 초기화
    setEnteredDate( "" );
    setEnteredTitle( "" );
    setEnteredAmount( "" );
    setEnteredAmountType( "income" );

    stopEditingHandler();
  };

  return (
    <form className="new-item__form" onSubmit={submitHandler}>
      <div className="new-item__form-info">
        <h2 className="fs-normal fw-regular">날짜</h2>
        <input
          type="date"
          value={enteredDate || formatDate(today)}
          onChange={dateChangeHandler}
          min="2020-01-01"
          max={formatDate(today)}
          required
        />
      </div>

      <div className="new-item__form-info">
        <div className="new-item__form-info--title">
          <h2 className="fs-normal fw-regular">제목</h2>
          <span
            className="fs-tiny ft-alert"
            style={{ display: isTitleSizeOver ? "inline-block" : "none" }}
          >
            {TITLE_SIZE}자까지만 입력할 수 있어요.
          </span>
        </div>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
          placeholder="음식 이름을 입력해주세요."
          maxLength={TITLE_SIZE}
          required
        />
      </div>

      <div className="new-item__form-info">
        <div className="new-item__form-info--title">
          <h2 className="fs-normal fw-regular">금액</h2>
          <span
            className="fs-tiny ft-alert"
            style={{ display: isEnteredWrongAmount ? "inline-block" : "none" }}
          >
            10억 미만의 정수만 입력할 수 있어요.
          </span>
        </div>

        <input
          type="text"
          value={enteredAmount}
          onChange={amountChangeHandler}
          placeholder="1인분 기준으로 사용하신 금액을 입력해주세요."
          maxLength="11"
          required
        />

        <div className="amount__type">
          <div className="amount__income">
            <input
              type="radio"
              id="income"
              name="amount-type"
              value="income"
              onChange={amountTypeChangeHandler}
              checked={enteredAmountType === "income" || ""}
              required
            />
            <label htmlFor="income" className="fs-small">
              외식
            </label>
          </div>
          <div className="amount__expense">
            <input
              type="radio"
              id="expense"
              name="amount-type"
              value="expense"
              onChange={amountTypeChangeHandler}
              checked={enteredAmountType === "expense" || ""}
              required
            />
            <label htmlFor="expense" className="fs-small">
              요리
            </label>
          </div>
        </div>
      </div>

      <div className="new-item__form-actions">
      <button type="submit" onClick={togglePopup} className="btn-yellow">
        등록
      </button>
      <button type="button" onClick={stopEditingHandler} className="btn-white">
        취소
      </button>
    </div>
    </form>
  );
};

export default NewItemForm;
