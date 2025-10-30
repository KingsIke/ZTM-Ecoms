import './Form-input.scss'
import { FormInputLabel, InputForm, Group } from './FormInput.style.jsx';

const FormInput = ({ label, value = '', ...otherProps }) => {
  const shouldShrink = value?.toString().length > 0;

  return (
    <Group>
      <InputForm value={value} {...otherProps} />
      {label && (
        <FormInputLabel shrink={shouldShrink}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
