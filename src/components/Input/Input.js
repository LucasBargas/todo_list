import DefaultInput from './Input.styles';

const Input = ({ input, ...props }) => {
  return (
    <DefaultInput ref={input} type="text" {...props} />
  )
}

export default Input;
