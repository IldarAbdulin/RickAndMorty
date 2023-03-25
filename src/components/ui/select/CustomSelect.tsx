import { FC, PropsWithChildren } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type CustomSelectProps = {
  className: string;
  inputLabel: string;
  elemValue: string;
  setElemValue: (value: string) => void;
};

const CustomSelect: FC<PropsWithChildren<CustomSelectProps>> = ({
  className,
  inputLabel,
  elemValue,
  setElemValue,
  children,
}) => {
  const changeValue = (event: SelectChangeEvent<string>) => {
    event.preventDefault();
    const value = event.target.value;
    setElemValue(value);
  };
  return (
    <FormControl className={className}>
      <InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={inputLabel}
        value={elemValue}
        onChange={changeValue}
      >
        {children}
      </Select>
    </FormControl>
  );
};
export default CustomSelect;
