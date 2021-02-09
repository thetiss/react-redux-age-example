import { connect } from "react-redux";
import  styles  from "./App.module.css";
const App = ( { currentAge, ageHistory, onAgeUp, onAgeDown, onHistoryItemDeleted } ) => {
  return (
    <div className={styles.Age}>
      <div><span className={styles.Age_title}>Age: { currentAge }</span></div>
      <button onClick={ onAgeUp }>Age up(by 5)</button>
      <button onClick={ onAgeDown }>Age down(by 1)</button>
      <hr/>
      <div><h1>Age history, You can delete!</h1>
        <ul>
         { ageHistory && ageHistory.map(( item ) => {
            return(
              <li 
                key={item.id} 
                onClick={ () => onHistoryItemDeleted(item.id)} 
                className={ styles.Age_historyItem }>
                {item.id}_{item.value}
              </li>    
            )}) 
         }
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = ( state ) => {
  return {
    currentAge: state.age,
    ageHistory: state.ageHistory,
  }
};
const mapDispatchToProps = ( dispatch ) => {
  return {
    onAgeUp: () => dispatch({
        type: 'AGE_UP',
        payload: {
          val: 5
        }
      }),
    onAgeDown: () => dispatch({
        type: 'AGE_DOWN',
        payload: {
          val: 1
        }
      }),
    onHistoryItemDeleted: (itemId) => dispatch({
        type: 'DELETE_AGE_FROM_HISTORY',
        payload: {
          val: itemId
        }
    })
  }  
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
