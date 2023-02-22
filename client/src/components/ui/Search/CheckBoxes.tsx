import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

type CheckBoxesProps = {
  partners: string[];
};

export default function CheckBoxes({ partners }: CheckBoxesProps): JSX.Element {
  return (
    <FormGroup>
      {partners.map((partner) => (
        <FormControlLabel
          key={partner}
          control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
          label={partner}
        />
      ))}
    </FormGroup>
  );
}

// defaultChecked
