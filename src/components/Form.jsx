import { useState } from 'react'
import hexRgb from 'hex-rgb';
import InputRange from './InputRange'

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
  const hexToRgb = () => {
    setColor(hexRgb(`${color}`))
    console.log(color)
  }

  return (
    <div className='flex justify-between w-1/2 py-20'>
      <form>
        <InputRange min={-120} max={120} text='Eixo Horizontal: ' value={offSetX} handleOnChange={(e) => setOffSetX(e.target.value)} />
        <InputRange min={-80} max={100} text='Eixo Vertical: ' value={offSetY} handleOnChange={(e) => setOffSetY(e.target.value)} />
        <InputRange min={0} max={120} text='Intensidade borrão(Blur): ' value={blur} handleOnChange={(e) => setBlur(e.target.value)} />
        <InputRange min={-120} max={120} text='Tamanho do espalhamento(Spread): ' value={spread} handleOnChange={(e) => setSpread(e.target.value)} />
        <input type="color" onChange={hexToRgb} />
        <button className='bg-slate-400 py-1 px-4 rounded-lg' onClick={handleClick}>Sombra interna? (Inset)</button>
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