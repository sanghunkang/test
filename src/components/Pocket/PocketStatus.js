import React, { useContext, useEffect, useState } from "react";
import { addComma } from "../../utils/numberUtils";
import { FilterContext } from "./PocketContainer";
import "./PocketStatus.css";
import "../../font.css";

const PocketStatus = (props) => {
  const { filteredItems, filterBaseYear } = useContext(FilterContext);

  const [totalBalance, setTotalBalance] = useState(0);
  const [totalSave, setTotalSave] = useState(0);
  const [totalCannotsave, setTotalCannotsave] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const twoDigitYear = filterBaseYear.slice(-2);

  useEffect(() => {
    let total = { balance: 0, income: 0, expense: 0, save: 0, cannotsave: 0 };

    if (filteredItems.length > 0) {
      // 자산, 수입, 지출 합계 계산
      filteredItems.forEach((item) => {
        if (item.amountType === "income") { // 외식
          total.balance += +item.amount;
          total.income += +item.amount;
          total.cannotsave += item.savedamount;
        } else {
          total.balance += +item.amount; // 요리
          total.expense += +item.amount;
          total.save += item.savedamount;
        }
      });
    }
    
    setTotalBalance(total.balance);
    setTotalSave(total.save);
    setTotalCannotsave(total.cannotsave);
    setTotalIncome(total.income);
    setTotalExpense(total.expense);
    
  }, [filteredItems]);

  return (
      <div className="pocket__status">
       <div className="pocket__status-title">
        <h1 className="fs-normal fw-light">{twoDigitYear}년 지출 현황</h1>
        <strong className="fs-title fc-yellow">
          {addComma(totalBalance.toString())}원
        </strong>
      </div>
      <div className="pocket__status-title">
        <h1 className="fs-normal fw-light">{twoDigitYear}년 절약 현황</h1>
        <strong className="fs-title fc-purple">
          {addComma(totalSave.toString())}원
        </strong>
      </div>
      
      <div className="pocket__status-detail">
        <div className="pocket__status-detail--desc">
          <span className="fs-normal fw-light">외식비용</span>
          <strong className="fs-emphasis fc-green">
            {addComma(totalIncome.toString())}원
          </strong>
        </div>

        <div className="pocket__status-detail--desc">
          <span className="fs-normal fw-light">요리비용</span>
          <strong className="fs-emphasis fc-yellow">
            {addComma(totalExpense.toString())}원
          </strong>
        </div>
      </div>
    </div>
  );
};

export default PocketStatus;
