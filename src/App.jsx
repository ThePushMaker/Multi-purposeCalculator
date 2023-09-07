import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import React, { useRef } from 'react';

function App() {
  const [result, setResult] = useState(0)
  const numRefs = 7; // Número de pares de refs (h y m)
  const inputRefs = [];
  
  for (let i = 1; i <= numRefs; i++) {
    const refH = useRef(0);
    const refM = useRef(0);
    inputRefs.push({ refH, refM });
  }

  const convertMinutesToDecimal = (cadena) => {
    var numerosDespuesDelPunto=0;
    // Utilizar una expresión regular para encontrar el punto y los números después de él
    var match = cadena.match(/\.(.*)/);

    // Comprobar si se encontró un punto y obtener los números después de él
    if (match) {
      numerosDespuesDelPunto = match[1]; // El valor en el índice 1 contiene los números después del punto
      console.log("Números después del punto:", numerosDespuesDelPunto);
    } else {
      console.log("No se encontró un punto en la cadena.");
      numerosDespuesDelPunto=0; 
    }
    var minutesAsDecimal = (numerosDespuesDelPunto/60)*100;
  
    console.log(`Decimal igualitario: ${minutesAsDecimal} / 100`);
    return minutesAsDecimal;
  }
  
  const convertHours = (cadena) => {
    // console.log(cadena)
    let numerosAntesDelPunto= 0;
    // Utilizar una expresión regular para encontrar los números antes del punto
    var match = cadena.match(/^(\d+)\./);

    if (cadena.includes(".")) {
      // console.log("La cadena contiene un punto.");
       // Comprobar si se encontraron números antes del punto
      if (match) {
        numerosAntesDelPunto = match[1]; // El valor en el índice 1 contiene los números antes del punto
        console.log("Números antes del punto:", numerosAntesDelPunto);
      } else {
        console.log('No hay numros despues del punto');
      }
    } else {
        console.log("La cadena no contiene un punto.");
        numerosAntesDelPunto=cadena;
    }

    var hoursAsDecimal = numerosAntesDelPunto*100;
    // console.log(numerosAntesDelPunto)
    console.log(`horas: ${hoursAsDecimal}`);
    return hoursAsDecimal
  }

  const clearAllFields = (e) => {
    e.preventDefault();
    // pending
  }

  const handleClick  = (e) => {
    e.preventDefault();
    let hoursAndMinutesAsDecimalArray = []
    let resultArray = []
    
    const refArray = [];
    for (let i = 1; i <= 7; i++) {
      refArray.push(inputRefh[i].current.value);
    }
    // console.log(refArray)
    
    
    // console.log("-----------------------")
    // console.log("-----------------------")
    for (let i = 0; i < refArray.length; i++) {
      // console.log("-----------------------")
      // console.log(`sigue: ${i} como: ${refArray[i]}`)
      // console.log(refArray[i])
      let valor = refArray[i];
      // const valor = ref.current; // Obtiene el valor actual de la referencia
      // console.log(ref)
      // console.log(valor)
      
      let extractedHoursAsDecimal = convertHours(valor); // Llama a la función pasando el valor como parámetro
      let extractedMinutesAsDecimal = convertMinutesToDecimal(valor); 
      // console.log(`extractedHoursAsDecimal ${extractedHoursAsDecimal}`)
      // console.log(`extractedMinutesAsDecimal: ${extractedMinutesAsDecimal}`)
      
      hoursAndMinutesAsDecimalArray.push({ extractedHoursAsDecimal, extractedMinutesAsDecimal });  
    }
    
    console.log(hoursAndMinutesAsDecimalArray)
    
    console.log("-----------------------")
    console.log("-----------------------")
    for (let i = 0 ; i< hoursAndMinutesAsDecimalArray.length ; i++) {
      console.log(`sigue: ${i} como: ${hoursAndMinutesAsDecimalArray[i]}`)
      console.log(hoursAndMinutesAsDecimalArray[i])
      console.log(hoursAndMinutesAsDecimalArray[i].extractedHoursAsDecimal)
      console.log(hoursAndMinutesAsDecimalArray[i].extractedMinutesAsDecimal)
      
      console.log("-----------------------")
    }
     
     
     // Utilizar el valor en tu función o realizar cualquier acción necesaria
    //  console.log(inputRef1.current.value);
    //  console.log(inputRef2.current.value);
    //  console.log(inputRef3.current.value);
    //  console.log(inputRef4.current.value);
    //  console.log(inputRef5.current.value);
    //  console.log(inputRef6.current.value);
    //  console.log(inputRef7.current.value);
  }
  
 
  return (
    <>
      <div className='flex justify-center text-center bg-indigo-950 min-h-screen'>
        <div className='border-[1px] border-red-600 p-10 bg-blue-950 h-full'>
          <h1 className='text-amber-500 font-bold text-4xl'>Time Calculator</h1>
          <div className='bg-slate-950 text-amber-500 py-4 relative border-[1px] border-blue-500 my-3'>
            <label className='absolute top-2 left-5'>Result is: </label>
            <label className='text-red-500 text-2xl'>{result}</label>
          </div>
          <h2 className='text-xl text-blue-300'>Hours : Minutes</h2>
          <div className='grid grid-flow-col grid-rows-3 gap-6'>
            {inputRefs.map((refs, index) => (
              <div key={index}>
                <div className='py-2' >
                  <h3 className='py-1 text-lg text-amber-200'>Group #{index+1}</h3> 
                  <input
                    id={`inputH${index + 1}`}
                    ref={refs.refH}
                    type="text"
                    className='text-[17px] mx-2 w-20 rounded-xl p-2 bg-slate-900 border-[1px] border-blue-600 text-orange-600 placeholder-gray-400'
                    placeholder={`Hours ${index + 1}`}
                  /> 
                  <label>:</label>
                  <input
                    id={`inputM${index + 1}`}
                    ref={refs.refM}
                    type="text"
                    className='text-[17px] mx-2 w-20 rounded-xl p-2 bg-slate-900 border-[1px] border-blue-600 text-amber-400 placeholder-gray-400'
                    placeholder={`Minutes ${index + 1}`}
                    />
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <button className='bg-blue-600 text-white p-2 rounded-xl text-md m-3' onClick={handleClick}>Get Results</button>
            <button className='bg-red-500 text-white p-2 rounded-xl text-md m-3' onClick={clearAllFields}>Clear all fields</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
