import React, {useState} from 'react';
import '../styles.css';

const Calculator = (props) => {

    const [ answerBox, setAnswerBox ] = useState("0");
    const [ mathExpression, setMathExpression ] = useState("");

    const calculateExpression = (mathExpression) => {
        try {
            setAnswerBox(eval (mathExpression));
            setMathExpression(eval (mathExpression));
        } catch(err) {
            setAnswerBox("Err, invalid expression.");
        }
    } 

    const addToExpression = (arg) => {
        setMathExpression(prevExpression => prevExpression + arg);
        if(answerBox !== "0"){
            setAnswerBox(prevExpression => prevExpression + arg);
        } else {
            setAnswerBox(arg);
        }
    }

    const clearExpression = () => {
        setMathExpression("")
        setAnswerBox("0")
    }

    return ( 
        <div className="calculatorbox">
            <div className="answerBox">
                <p>{answerBox}</p>
            </div>
            <div className="grid">
                <button onClick={() => {addToExpression("0")}} className="num0">0</button>
                <button onClick={() => {addToExpression("1")}} className="num1">1</button>
                <button onClick={() => {addToExpression("2")}} className="num2">2</button>
                <button onClick={() => {addToExpression("3")}} className="num3">3</button>
                <button onClick={() => {addToExpression("4")}} className="num4">4</button>
                <button onClick={() => {addToExpression("5")}} className="num5">5</button>
                <button onClick={() => {addToExpression("6")}} className="num6">6</button>
                <button onClick={() => {addToExpression("7")}} className="num7">7</button>
                <button onClick={() => {addToExpression("8")}} className="num8">8</button>
                <button onClick={() => {addToExpression("9")}} className="num9">9</button>
                <button onClick={() => {addToExpression(" + ")}} className="plus">+</button>
                <button onClick={() => {addToExpression(" - ")}} className="minus">-</button>
                <button onClick={() => {addToExpression(" / ")}} className="divide">/</button>
                <button onClick={() => {addToExpression(" * ")}} className="multiply">*</button>
                <button onClick={() => {calculateExpression(mathExpression)}} className="equals">=</button>
                <button onClick={() => {addToExpression(".")}} className="dot">.</button>
                <button onClick={() => {clearExpression()}} className="clear">CLEAR</button>
            </div>
        </div>
    );
}

export default Calculator;