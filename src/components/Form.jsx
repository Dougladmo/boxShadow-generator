import { useState } from 'react'
import InputRange from './InputRange'
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

  const handleCSS = () => {
    navigator.clipboard.writeText(`box-shadow: ${offSetX}px ${offSetY}px ${blur}px ${spread}px ${inset ? 'inset' : '' } ${color}`).then(() => {
      alert('copied to clipboard')
    })
  }

// Tentar converter hex to rgb

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-full md:px-10 md:items-center md:justify-center flex justify-evenly py-24 md:flex md:flex-col md:gap-16'>
        <form className='flex flex-col gap-5'>
          <InputRange min={-120} max={120} text='Eixo Horizontal ' value={offSetX} handleOnChange={(e) => setOffSetX(e.target.value)} />
          <InputRange min={-80} max={100} text='Eixo Vertical ' value={offSetY} handleOnChange={(e) => setOffSetY(e.target.value)} />
          <InputRange min={0} max={120} text='Intensidade borrão (Blur) ' value={blur} handleOnChange={(e) => setBlur(e.target.value)} />
          <InputRange min={-120} max={120} text='Tamanho do espalhamento (Spread) ' value={spread} handleOnChange={(e) => setSpread(e.target.value)} />
          <InputColor text='Cor da sombra: ' value={color} handleOnChange={(e) => setColor(e.target.value)} />
          <button className='bg-blue-800 text-white h-14 w-auto rounded-lg border-2 border-blue-800 hover:bg-transparent hover:text-blue-800 transition duration-300' onClick={handleClick}>Sombra interna? (Inset)</button>
        </form>
          <div id='caixa preview' style={{boxShadow: `${offSetX}px ${offSetY}px ${blur}px ${spread}px ${inset ? 'inset' : '' } ${color}`}} className='flex justify-center items-center w-80 h-80 rounded-lg bg-indigo-800 md:w-48 md:h-48'>
            <h2 className='text-white text-2xl'>
              PREVIEW
            </h2>
          </div>
      </div>
        <div id='result' onClick={handleCSS} className='text-white mb-16 md:mx-10 bg-blue-800 p-10 rounded-xl border-2 border-blue-800 hover:bg-transparent hover:text-blue-800 transition duration-300 cursor-pointer'>
          <h2 className='text-2xl md:text-xl text-center'> Clique aqui para copiar a regra em CSS </h2>
          <p className='text-center mt-4 text-base'> box-shadow: {offSetX}px {offSetY}px {blur}px {spread}px  {inset ? ' inset' : '' } {color}; </p>
        </div>
    </div>
  )
}

export default Form