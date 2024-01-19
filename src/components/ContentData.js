import DirectNumber from './DirectNumber';
import Equation from './Equation';
import LCMandHCF from './LCMandHCF';
import Polynomails from './Polynomails';
import Factorization from './Factorization';
// ...其他組件的導入

/*export const contentComponent = [
  { id: 1, name: 'Directed Number', component: 'DirectNumber' },
  { id: 2, name: 'Equation', component: 'Equation' },
  { id: 6, name: 'Factorization', component: 'Factorization' },
  { id: 3, name: 'LCM and HCF', component: 'LCMandHCF' },
  { id: 4, name: 'Polynomails', component: 'Polynomails' },
  // ...其他項目
];*/

export const contentComponent = [
  { id: 1, name: 'Directed Number', function: DirectNumber },
  { id: 2, name: 'Equation', function: Equation },
  { id: 3, name: 'LCM and HCF', function: LCMandHCF },
  { id: 4, name: 'Polynomails',  function: Polynomails },
  { id: 5, name: 'Factorization',  function: Factorization },
  // ...其他項目
];

