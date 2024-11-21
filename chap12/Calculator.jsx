import React, { useState } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

function toCelsius(fahrenheit){
    return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius){
    return (celsius * 9) / 5 + 32;
}
function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if (Number.isNaN(input)){
        return"";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator() {
    const [temperature, setTemperature] = useState('')
    const [scale, setScale] = useState('c')

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//화씨 입력 컴포넌트 호출
//섭씨 입력 컴포넌트 호출
    const onChangeFahrenheit = (temperature)=>{
        setTemperature(temperature);
        setScale('f')
    }

    const onChangeCelsius = (temperature)=>{
        setTemperature(temperature);
        setScale('c')
    }
    
  return (
    <div>
    <TemperatureInput
        scale='f'
        temperature={fahrenheit}
        onTemperatureChange={onChangeFahrenheit
        }/>

    <TemperatureInput
        scale='c'
        temperature={celsius}
        onTemperatureChange={onChangeCelsius
        }/>
    
    <BoilingVerdict celsius = {parseFloat(temperature)}/>
    </div>
  )
}

export default Calculator