const AGE = { MIN: 18, MAX: 75 };
const SYSBP = { MIN: 60, MAX: 210 };
const DIABP = { MIN: 40, MAX: 120 };
const TC = { MIN: 0, MAX: 400 };
const LDL = { MIN: 0, MAX: 300 };
const HDL = { MIN: 0, MAX: 100 };


const validate = function(name, value) {
  if (value === '') { return { value, valid: false, errorMessage: 'Please enter a value' }; }
  switch(name) {
    case 'age':
      if (value < AGE.MIN) { return { value, valid: false, errorMessage: `Age must be ${AGE.MIN} or more` }; }
      if (value > AGE.MAX) { return { value, valid: false, errorMessage: `Age must be ${AGE.MAX} or less` }; }
      return { value, valid: true, errorMessage: '' }
    case 'sysBP':
      if (value < SYSBP.MIN) { return { value, valid: false, errorMessage: `Systolic blood pressure must be ${SYSBP.MIN} or more` }; }
      if (value > SYSBP.MAX) { return { value, valid: false, errorMessage: `Systolic blood pressure must be ${SYSBP.MAX} or less` }; }
      return { value, valid: true, errorMessage: '' }
    case 'DIABP':
      if (value < DIABP.MIN) { return { value, valid: false, errorMessage: `Diastolic blood pressur must be ${DIABP.MIN} or more` }; }
      if (value > DIABP.MAX) { return { value, valid: false, errorMessage: `Diastolic blood pressur must be ${DIABP.MAX} or less` }; }
      return { value, valid: true, errorMessage: '' }
    case 'tc':
      if (value < TC.MIN) { return { value, valid: false, errorMessage: `Total cholesterol must be ${TC.MIN} or more` }; }
      if (value > TC.MAX) { return { value, valid: false, errorMessage: `Total cholesterol must be ${TC.MAX} or less` }; }
      return { value, valid: true, errorMessage: '' }
    case 'ldl':
      if (value < LDL.MIN) { return { value, valid: false, errorMessage: `LDL Cholesterol must be ${LDL.MIN} or more` }; }
      if (value > LDL.MAX) { return { value, valid: false, errorMessage: `LDL Cholesterol must be ${LDL.MAX} or less` }; }
      return { value, valid: true, errorMessage: '' }
    case 'hdl':
      if (value < HDL.MIN) { return { value, valid: false, errorMessage: `HDL Cholesterol must be ${HDL.MIN} or more` }; }
      if (value > HDL.MAX) { return { value, valid: false, errorMessage: `HDL Cholesterol must be ${HDL.MAX} or less` }; }
      return { value, valid: true, errorMessage: '' }
    default:
      return { value, valid: true, errorMessage: '' }
  }
};

export default validate;
