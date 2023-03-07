import './Button.css'

export default function Button({type,children,onClick, style}) {
  return (
    <button style={style} type={type} className='btn' onClick={onClick}>
      {children}
    </button>
  )
}
