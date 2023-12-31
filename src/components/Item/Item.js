import React, { useCallback, useContext, useState } from "react";
import { ItemDispatchContext } from '../../pages/ReportPage';
import { addComma } from "../../utils/numberUtils.js";
import DateLabel from "../../components/DateLabel/DateLabel";
import "./Item.css";

const Item = ( props ) => {
  const [{ onRemove }] = useContext( ItemDispatchContext );

  const [isItemClick, setIsItemClick] = useState( false );
  const [itemClickCount, setItemClickCount] = useState( 0 );

  const itemStyleByAmountType = "item " + props.amountType;
  let fontStyleByAmountType = "fs-emphasis fc-green";

  const itemTitle = props.title;
  let itemAmount = addComma(props.amount?.toString() || "0");
  let savedAmount = addComma(props.savedamount?.toString() || "0");

  if ( props.amountType === "expense" ) {
    fontStyleByAmountType = fontStyleByAmountType.replace( "green", "yellow" );
    itemAmount = itemAmount.replace( "+", "" );
  }

  const itemClickHandler = useCallback( () => {
    if ( itemClickCount % 2 === 0 ) {
      setIsItemClick( true );
    } else {
      setIsItemClick( false );
    }

    setItemClickCount( ( prevClickCount ) => prevClickCount + 1 );
  }, [itemClickCount] );

  const handleRemove = ( event ) => {
    event.stopPropagation(); // 이벤트 버블링 막기

    onRemove( props.id );
  };

  return (
    <div className={itemStyleByAmountType} onClick={itemClickHandler}>
      <div>
        <DateLabel date={props.date} />
        
        <div className="item__title">
          <button
            className="item__delete-button fs-tiny btn-navy"
            style={{ display: isItemClick === true ? "flex" : "none" }}
            onClick={handleRemove}
          >
            <span className="sr-only">아이템 삭제</span>
          </button>
          <h3 className="fs-normal fw-regular">{itemTitle}</h3>
        </div>
      </div>
      <div>
        {props.amountType === "expense" && (
          <div>
            <strong className="fs-emphasis fc-purple" style={{ textAlign: "right", margin: 0 }}>
              {savedAmount}원 절약
            </strong>
          </div>
        )}
        <strong className={fontStyleByAmountType}>{itemAmount}원</strong>
      </div>
    </div>
  );
};

export default Item;
