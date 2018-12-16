/* eslint indent:0 */
module.exports = (scenario) => {
  //#region 1. Hard Stop
  //#region 1a. Loan Doc Type
  if (scenario.loanDocType !== 'FULL_DOC') {
    scenario.addEligibilityGuideline(false, 'Full Loan documentation required.');
  }
  //#endregion 1a. Guarantor
  //#region 1b. Lender Paid MI
  if (scenario.lenderPaidMI) {
    scenario.addEligibilityGuideline(false, 'Lender Paid MI not allowed.');
  }
  //#endregion 1b. Lender Paid MI
  //#region 1c. Credit score
  if (scenario.creditScore < 640) {
    scenario.addEligibilityGuideline(false, 'FICO < 640 not allowed.');
  }
  //#endregion 1c. Credit score
  //#region 1d. LTV / CLTV
  if (scenario.ltv > 0.95 || scenario.cltv > 0.95) {
    scenario.addEligibilityGuideline(false, 'LTV, CLTV > 95% not allowed.');
  }
  //#endregion 1d. LTV / CLTV
  //#region 1e. Manual UW
  if (scenario.aus === 'MANUAL_UW') {
    scenario.addEligibilityGuideline(false, 'Manual UW not allowed.');
  }
  //#endregion 1e. Manual UW
  //#region 1f. Texas Cashout
  if (scenario.propertyState === 'TX' && scenario.loanPurposeType === 'CASH_OUT') {
    scenario.addEligibilityGuideline(false, 'Texas Cashout not allowed.');
  }
  //#endregion 1f. Texas Cashout
  //#region 1g. Residency Status
  if (scenario.residencyStatus === 'FOREIGN_NATIONAL') {
    scenario.addEligibilityGuideline(false, 'Foreign National Not Allowed.');
  }
  //#endregion 1g. Residency Status
  //#region 1h. LP TODO
  //#endregion 1h. LP
  //#region 1i. Mortgage Lates
  if (scenario.mortgageLate30 > 0) {
    if (scenario.creditScore < 680) {
      scenario.addEligibilityGuideline(false, 'FICO < 680 and late 30 day Not Allowed');
    } else if (scenario.mortgageLate30 > 1) {
      scenario.addEligibilityGuideline(false, 'late 30 day > 1 Not Allowed');
    }
  }
  if (scenario.mortgageLate60 > 0) {
    scenario.addEligibilityGuideline(false, 'Mortgage Late 60 Not Allowed');
  }
  if (scenario.mortgageLate90 > 0) {
    scenario.addEligibilityGuideline(false, 'Mortgage Late 90 Not Allowed');
  }
  if (scenario.mortgageLate120 > 0) {
    scenario.addEligibilityGuideline(false, 'Mortgage Late 120 Not Allowed');
  }
  //#endregion 1i. Mortgage Lates
  //#region 1j. Cashout
  if (scenario.loanPurposeType === 'CASH_OUT') {
    if (scenario.cltv > 0.85 || scenario.ltv > 0.85) {
      scenario.addEligibilityGuideline(false, 'Cashout and CLTV, LTV > 85% Not Allowed.');
    } else if (scenario.creditScore < 740 && (scenario.cltv > 0.80 || scenario.ltv > 0.80)) {
      scenario.addEligibilityGuideline(false, 'Cashout and CLTV , LTV> 80% and FICO < 740 Not Allowed.');
    }
    if (scenario.numberOfUnits >= 2 && scenario.numberOfUnits <= 4) {
      if (scenario.ltv > 0.75 || scenario.cltv > 0.75) {
        scenario.addEligibilityGuideline(false, 'Cashout and CLTV , LTV> 75% and Units between 2 and 4 Not Allowed.');
      }
    }
    if (scenario.cltv > 0.80 || scenario.ltv > 0.80) { // TODO
      scenario.addEligibilityGuideline(false, 'Cashout and LTV, CLTV > 80% Not Allowed.');
    }
  }
  //#endregion 1j. Cashout
  //#region 1k. Geographic Restrictions
  if (['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY',
    'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA',
    'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'].includes(scenario.propertyState)) {
    if (scenario.escrow !== 'NONE_WAIVED' && scenario.ltv > 0.95) {
      scenario.addEligibilityGuideline(false, 'AL & AK & AZ & AR & CA & CO & CT & DE & DC & FL & GA & GU & HI & ID & IL & IN & IA & KS & KY & LA & ME & MD & MA & MI & MN & MS & MO & MT & NE & NV & NH & NJ & NY & NC & ND & OH & OK & OR & PA & PR & RI & SC & SD & TN & TX & UT & VT & VI & VA & WA & WV & WI & WY, not Streamline, All Waived & Hazard Insurance Waived & Property Taxes Waived with > 95% LTV Not Allowed.');
    }
  }
  if (scenario.propertyState === 'NM') {
    if (scenario.escrow !== 'NONE_WAIVED' && scenario.ltv > 0.80) {
      scenario.addEligibilityGuideline(false, 'NM, All Waived & Hazard Insurance Waived & Property Taxes Waived with > 80% LTV Not Allowed.');
    }
  }
  //#endregion 1k. Geographic Restrictions
  //#region 1l. Property Restrictions
  if (scenario.numberOfUnits === 2) {
    if (scenario.ltv > 0.85 || scenario.cltv > 0.85) {
      scenario.addEligibilityGuideline(false, '2 units and LTV, CLTV > 85% Not Allowed.');
    }
  } else if (scenario.numberOfUnits <= 3 && scenario.numberOfUnits >= 4) {
    if (scenario.aus === 'DO_DU_FNMA' && scenario.ltv > 0.75 || scenario.cltv > 0.75) {
      scenario.addEligibilityGuideline(false, '3 to 4 units, DU and LTV, CLTV > 75% Not Allowed.');
    } else if (scenario.ltv > 0.80 || scenario.cltv > 0.80) {
      scenario.addEligibilityGuideline(false, '3 to 4 units and LTV, CLTV > 80% Not Allowed.');
    }
  }
  //#endregion 1l. Property Restrictions
  //#region 1m. Second Home
  if (scenario.propertyUsageType === 'SECOND_HOME') {
    if (scenario.ltv > 0.90 || scenario.cltv > 0.90) {
      scenario.addEligibilityGuideline(false, 'Second Home and LTV, CLTV > 90% Not Allowed.');
    }
    if (scenario.numberOfUnits >= 2 && scenario.numberOfUnits <= 4) {
      scenario.addEligibilityGuideline(false, 'Second Home and Units between 2 to 4 Not Allowed.');
    }
    if (scenario.pitiReserve < 2) {
      scenario.addEligibilityGuideline(false, 'Second Home with < 2 months reserves Not Allowed.');
    }
  }
  if (scenario.propertyUsageType === 'SECOND_HOME' || scenario.propertyUsageType === 'INVESTMENT') {
    if (scenario.loanPurposeType === 'CASH_OUT' && (scenario.ltv > 0.75 || scenario.cltv > 0.75)) {
      scenario.addEligibilityGuideline(false, 'Second Home, Investment and Cashout with CLTV, LTV > 75% Not Allowed.');
    }
  }
  //#endregion 1m. Second Home
  //#region 1n. Investment
  if (scenario.propertyUsageType === 'INVESTMENT') {
    if (scenario.ltv > 0.85 || scenario.cltv > 0.85) {
      scenario.addEligibilityGuideline(false, 'Investment and LTV, CLTV > 85% Not Allowed.');
    }
    if (scenario.numberOfUnits >= 2 && scenario.numberOfUnits <= 4) {
      if (scenario.ltv > 0.75 || scenario.cltv > 0.75) {
        scenario.addEligibilityGuideline(false, 'Investment, Units between 2 to 4 and LTV, CLTV > 75% Not Allowed.');
      } else if (scenario.loanPurposeType === 'CASH_OUT' && (scenario.ltv > 0.70 || scenario.cltv > 0.70)) {
        scenario.addEligibilityGuideline(false, 'Investment, Cashout, Units between 2 to 4 and LTV, CLTV > 70% Not Allowed.');
      }
    }
    if (scenario.pitiReserve < 6) {
      scenario.addEligibilityGuideline(false, 'Investment with < 6 months reserves Not Allowed.');
    }
    if (scenario.loanPurposeType === 'RATE_TERM' && scenario.aus === 'DO_DU_FNMA') {
      if (scenario.ltv > 0.75 || scenario.cltv > 0.75) {
        scenario.addEligibilityGuideline(false, 'Investment, Rate and Term, DU and LTV, CLTV > 75% Not Allowed.');
      }
    }
  }
  //#endregion 1n. Investment
  //#endregion 1. Hard Stop
  //#region 2. Soft Stop
  if (scenario.eligible) {
    //
  }
  //#endregion 2. Soft Stop

  return scenario;
};
