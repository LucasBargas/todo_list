import DefaultButton from './styles';

const Button = ({ bg, bgHover, width, children, ...props }) => (
  <DefaultButton bg={bg} bgHover={bgHover} width={width} {...props}>
    {children}
  </DefaultButton>
);

export default Button;
