import React, {useState} from 'react';
import '../styles.css';

const Calculator = (props) => {
    const [ sumBox, setSumBox ] = useState("0");
    const [ mathStatement, setMathStatement ] = useState("");
    const calculateStatement = (mathStatement) => {
        try {
            setSumBox(eval (mathStatement));
            setMathStatement(eval (mathStatement));
        } catch(err) {
            setSumBox("error");
        }
    } 

    const addToStatement = (arg) => {
        setMathStatement( prevStatement => prevStatement + arg);
        if(sumBox !== "0"){
            setSumBox(prevStatement => prevStatement + arg);
        } else {
            setSumBox(arg);
        }
    }

    const clearStatement = () => {
        setMathStatement("")
        setSumBox("0")
    }

    return ( 
        <div className="calcBox">
            <div className="sumBox">
                <p>{sumBox}</p>
            </div>
            <div className="grid">
                <button onClick={() => {addToStatement("0")}} className="num0">0</button>
                <button onClick={() => {addToStatement("1")}} className="num1">1</button>
                <button onClick={() => {addToStatement("2")}} className="num2">2</button>
                <button onClick={() => {addToStatement("3")}} className="num3">3</button>
                <button onClick={() => {addToStatement("4")}} className="num4">4</button>
                <button onClick={() => {addToStatement("5")}} className="num5">5</button>
                <button onClick={() => {addToStatement("6")}} className="num6">6</button>
                <button onClick={() => {addToStatement("7")}} className="num7">7</button>
                <button onClick={() => {addToStatement("8")}} className="num8">8</button>
                <button onClick={() => {addToStatement("9")}} className="num9">9</button>
                <button onClick={() => {addToStatement(" + ")}} className="plus">+</button>
                <button onClick={() => {addToStatement(" - ")}} className="minus">-</button>
                <button onClick={() => {addToStatement(" / ")}} className="divide">/</button>
                <button onClick={() => {addToStatement(" * ")}} className="multiply">*</button>
                <button onClick={() => {calculateStatement(mathStatement)}} className="equals">=</button>
                <button onClick={() => {addToStatement(".")}} className="dot">.</button>
                <button onClick={() => {clearStatement()}} className="clear">CLEAR</button>
            </div>
        </div>
    );
}

export default Calculator;