import React, { useCallback } from 'react';
import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';

export const MaskedInput = React.forwardRef(function TextInput(
  props: any,
  ref
) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+0 (000) 000-00-00"
      definitions={{
        '#': /[1-9]/,
      }}
      placeholder={'+X (XXX) XXX-XX-XX'}
      inputRef={ref}
      onAccept={useCallback(
        (value: any) => onChange({ target: { name: props.name, value } }),
        []
      )}
      overwrite
    />
  );
});

MaskedInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
