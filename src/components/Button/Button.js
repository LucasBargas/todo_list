import DefaultButton from './Button.styles';

const Button = ({ bg, bgHover }) => {
  return (
    <DefaultButton bg={bg} bgHover={bgHover}>
      Botão
    </DefaultButton>
  )
}

export default Button;
