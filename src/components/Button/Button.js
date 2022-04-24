import DefaultButton from './Button.styles';

const Button = ({ bg, bgHover, width, children, ...props }) => {
  return (
    <DefaultButton bg={bg} bgHover={bgHover} width={width} {...props}>
      {children}
    </DefaultButton>
  )
}

export default Button;
