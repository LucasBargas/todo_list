import DefaultInput from './Input.styles';

const Input = ({ ...props }) => {
  return (
    <DefaultInput type="text" {...props} />
  )
}

export default Input;
