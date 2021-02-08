import { connect } from "react-redux";
import  styles  from "./App.module.css";
const App = ( { currentAge, onAgeUp, onAgeDown} ) => {
  return (
    <div className={styles.Age}>
      <div><span className={styles.Age_title}>Age: { currentAge }</span></div>
      <button onClick={ onAgeUp }>Age up(by 5)</button>
      <button onClick={ onAgeDown }>Age down(by 1)</button>
      {/* <hr/>
      <div>
        <ul>

        </ul>
      </div> */}
    </div>
  );
};
const mapStateToProps = ( state ) => {
  return {
    currentAge: state.age,
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
      })
  }  
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
