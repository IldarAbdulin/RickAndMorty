import { ChangeEvent, FC } from 'react';
import { TextField } from '@mui/material';

type CustomLinProps = {
  className: string;
  label: string;
  value: string;
  setValue: (e: string) => void;
};

const CustomInput: FC<CustomLinProps> = ({
  className,
  label,
  value,
  setValue,
}) => {
  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  return (
    <>
      <TextField
        className={className}
        id="filled-basic"
        label={label}
        variant="filled"
        value={value}
        onChange={changeInput}
      />
    </>
  );
};
export default CustomInput;
