import DefaultButton from './Button.styles';

const Button = ({ bg, bgHover, width, children }) => {
  return (
    <DefaultButton bg={bg} bgHover={bgHover} width={width}>
      {children}
    </DefaultButton>
  )
}

export default Button;
