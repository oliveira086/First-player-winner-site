/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import InputMask from 'react-input-date-mask';

interface DateInputProps {
  mask?: string;
  showMaskOnFocus?: boolean;
  showMaskOnHover?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  readOnly?: boolean;
  placeholder?: string;
  value?: string | number;
}

const DateInput: React.FC<DateInputProps> = ({
  onChange,
  mask,
  showMaskOnFocus,
  showMaskOnHover,
  disabled,
  readOnly,
  className,
  ...props
}) => {
  return (
    <InputMask
      {...props}
      mask={mask}
      className={className}
      readOnly={readOnly}
      onChange={onChange}
      disabled={disabled}
      showMaskOnFocus={showMaskOnFocus}
      showMaskOnHover={showMaskOnHover}
    />
  );
};

export default DateInput;
