import { useState } from 'react'
import hexRgb from 'hex-rgb';
import InputRange from './InputRange'
import SubmitButton from './SubmitButton';
import InputColor from './InputColor';

const Form = () => {
  const [offSetX, setOffSetX] = useState(10)
  const [offSetY, setOffSetY] = useState(10)
  const [blur, setBlur] = useState(10)
  const [spread, setSpread] = useState(10)
  const [color, setColor] = useState('#000')
  const [inset, setInset] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    inset ? setInset(false) : setInset(true) 
  }
// Tentar converter hex to rgb

  return (
    <div className='flex justify-between w-1/2 py-20'>
      <form className='flex flex-col gap-5'>
        <InputRange min={-120} max={120} text='Eixo Horizontal ' value={offSetX} handleOnChange={(e) => setOffSetX(e.target.value)} />
        <InputRange min={-80} max={100} text='Eixo Vertical ' value={offSetY} handleOnChange={(e) => setOffSetY(e.target.value)} />
        <InputRange min={0} max={120} text='Intensidade borrão (Blur) ' value={blur} handleOnChange={(e) => setBlur(e.target.value)} />
        <InputRange min={-120} max={120} text='Tamanho do espalhamento (Spread) ' value={spread} handleOnChange={(e) => setSpread(e.target.value)} />
        <InputColor text='Cor da sombra: ' value={color} handleOnChange={(e) => setColor(e.target.value)} />
        <button className='bg-blue-800 text-white h-14 w-auto rounded-lg border-2 border-blue-800 hover:bg-transparent hover:text-blue-800 transition duration-300' onClick={handleClick}>Sombra interna? (Inset)</button>
        <SubmitButton text='Criar'/>
      </form>
      <div>
        <div id='caixa preview' style={{boxShadow: `${offSetX}px ${offSetY}px ${blur}px ${spread}px ${inset ? 'inset' : '' } ${color}`}} className='flex justify-center items-center w-80 h-80 rounded-lg bg-indigo-800'>
          <h2 className='text-white text-4xl'>
            PREVIEW
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Form