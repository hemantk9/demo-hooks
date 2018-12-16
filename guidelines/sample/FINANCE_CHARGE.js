/* eslint indent:0 */
module.exports = (scenario) => {
  //#region 1. Processing Fee
    scenario.startFeeRule('Processing Fee');
    if (scenario.loanAmount < 1000000) { // Under $1MM
      scenario.adjustFee(595.00);
    } else { // $1MM and above
      scenario.adjustFee(1095.00);
    }
    scenario.endFeeRule();
  //#endregion 1. Processing Fee
  //#region 2. Origination Fee
    scenario.startFeeRule('Origination Fee');
    scenario.adjustFee(0.0, { type: 'POINT' });
    scenario.endFeeRule();
  //#endregion 2. Origination Fee
  //#region 3. Messenger Fee
    scenario.startFeeRule('Messenger Fee');
    scenario.adjustFee(30.00);
    scenario.endFeeRule();
  //#endregion 3. Messenger Fee
  //#region 4. Flood Cert Fee
    scenario.startFeeRule('Flood Cert Fee');
    scenario.adjustFee(6.00);
    scenario.endFeeRule();
  //#endregion 4. Flood Cert Fee
  //#region 5. Insurance Monitoring Fee
    scenario.startFeeRule('Insurance Monitoring Fee');
    scenario.adjustFee(55.00);
    scenario.endFeeRule();
  //#endregion 5. Insurance Monitoring Fee
  //#region 6. Tax Service Fee
    scenario.startFeeRule('Tax Service Fee');
    scenario.adjustFee(80.00);
    scenario.endFeeRule();
  //#endregion 6. Tax Service Fee
  //#region 7. Title Escrow/Settlement Fee
    scenario.startFeeRule('Title Escrow/Settlement Fee');
    if (scenario.loanAmount <= 636150) { // Conforming
      scenario.adjustFee(975.00);
    } else { // Jumbo
      scenario.adjustFee(2400.00);
    }
    scenario.endFeeRule();
  //#endregion 7. Title Escrow/Settlement Fee
  //#region 8. 15 days prepaid interest
    scenario.startFeeRule('15 days prepaid interest');
    scenario.adjustFee(0.0, { type: 'INTEREST', days: 15 });
    scenario.endFeeRule();
  //#endregion 8. 15 days prepaid interest

  return scenario;
};
