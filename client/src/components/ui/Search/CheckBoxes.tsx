import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckBoxes(): JSX.Element {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} defaultChecked />}
        label="со скидкой"
      />
      <FormControlLabel
        control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} size="small" />}
        label="бесплатные"
      />
    </FormGroup>
  );
}
