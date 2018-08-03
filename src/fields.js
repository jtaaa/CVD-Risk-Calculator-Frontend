const fields = [
  {
    label: 'Age',
    name: 'age',
    placeholder: 'Age',
    type: 'number',
    min: 20,
    max: 105,
  },
  {
    label: 'Sex',
    name: 'sex',
    options: ['Male', 'Female'],
    type: 'option',
  },
  {
    label: 'Ethnicity',
    name: 'ethnicity',
    options: ['Afro-Caribbean', 'Indo-Caribbean', 'Mixed-Caribbean'],
    type: 'option',
  },
  {
    label: 'Level of Education',
    name: 'educationLevel',
    options: ['Pre-Secondary', 'Secondary', 'Tertiary'],
    type: 'option',
  },
  {
    label: 'Married',
    name: 'married',
    type: 'checkbox',
  },
  {
    label: 'Smoker Status',
    name: 'smokerStatus',
    options: ['Smoker', 'Non-Smoker', 'Ex-Smoker'],
    type: 'option',
  },
  {
    label: 'TC/HDL (mg/dL)',
    name: 'tcHdl',
    placeholder: 'TC/HDL',
    type: 'number',
  },
  {
    label: 'LDL (mg/dL)',
    name: 'ldl',
    placeholder: 'LDL',
    type: 'number',
  },
  {
    label: 'Systolic Blood Pressure',
    name: 'sysBloodPressure',
    placeholder: 'Systolic Blood Pressure',
    type: 'number',
  },
  {
    label: 'Diastolic Blood Pressure',
    name: 'diaBloodPressure',
    placeholder: 'Diastolic Blood Pressure',
    type: 'number',
  },
  {
    label: 'Presence of High Cholesterol',
    name: 'highCholesterol',
    type: 'checkbox',
  },
  {
    label: 'Presence of Atrial Fibrillation',
    name: 'atrialFibrillation',
    type: 'checkbox',
  },
  {
    label: 'Presence of High Blood Pressure',
    name: 'highBloodPressure',
    type: 'checkbox',
  },
  {
    label: 'Presence of CVD in Family',
    name: 'familialCVD',
    type: 'checkbox',
  },
];

export default fields;
