import React, { useEffect, useState, useMemo } from "react";
import NewItemContainer from '../components/NewItem/NewItemContainer';
import PocketContainer from "../components/Pocket/PocketContainer";
// import NewItemContainer from "./components/NewItem/NewItemContainer";
// import "./styles/reset.css";
// import "./styles/font.css";
// import "./styles/button.css";
// import "./styles/common.css";
import './ReportPage.css';
import { useCallback } from "react";
import { HomePageFooter } from './HomePage';


export const ItemDispatchContext = React.createContext();

export default function ReportPage() {
  const [isAddItem, setIsAddItem] = useState( false );
  const [nextItemId, setNextItemId] = useState( 0 );
  const [items, setItems] = useState( [] );

  useEffect( () => {
    const localItems = JSON.parse( localStorage.getItem( "items" ) );

    if ( localItems === null ) {
      localStorage.setItem( "items", JSON.stringify( items ) );
      localStorage.setItem( "nextItemId", nextItemId );

      return;
    }

    const localNextItemId = +localStorage.getItem( "nextItemId" );
    let copyLocalItems = [...localItems];

    copyLocalItems.forEach( ( item, index ) => {
      copyLocalItems[index].date = new Date( item.date );
    } );

    setItems( copyLocalItems );
    setNextItemId( localNextItemId );
  }, [] );

  useEffect( () => {
    localStorage.setItem( "items", JSON.stringify( items ) );
    localStorage.setItem( "nextItemId", nextItemId );
  }, [items] );

  const onAdd = useCallback( ( addItemData ) => {
    setNextItemId( ( nextItemId ) => nextItemId + 1 );
    setIsAddItem( true );
    setItems( ( prevItems ) => [...prevItems, addItemData] );
  }, [] );

  const onRemove = useCallback( ( deleteItemData ) => {
    setIsAddItem( false );
    setItems( ( items ) =>
      [...items].filter( ( item ) => item.id !== deleteItemData )
    );
  }, [] );

  const memoizedDispatches = useMemo( () => {
    return { onAdd, onRemove };
  }, [] );

  const memoizedNextItemId = useMemo( () => {
    return { nextItemId };
  }, [nextItemId] );

  return (
    <>
      <ItemDispatchContext.Provider
        value={[memoizedDispatches, memoizedNextItemId]}
      >
        <div className='New-Item'>
          <NewItemContainer />
        </div>
        <div className='Pocket-container'>
          <PocketContainer items={items} isAddItem={isAddItem} />
        </div>
        
        <div className='Home-Footer'>
          < HomePageFooter />
        </div>
      </ItemDispatchContext.Provider>
    </>
  );
};


