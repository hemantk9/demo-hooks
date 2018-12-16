/* eslint indent:0 */
module.exports = (scenario) => {
  //#region Auto-Adjustments
  //#region 1a. LPMI Pricing
  scenario.startRule('LPMI Pricing');
  if (scenario.creditScore >= 760) {
    if (scenario.propertyUsageType.equals('SECOND_HOME')) {
      scenario.adjustPoint(0.3);
    }
    if (scenario.numberOfUnits >= 3 && scenario.numberOfUnits <= 4) {
      scenario.adjustPoint(1.19);
    }
    if (scenario.loanPurpose.equals('REFINANCE')) {
      scenario.adjustPoint(0);
    }
    if (scenario.propertyUsageType.equals('INVESTMENT')) {
      scenario.adjustPoint(1.19);
    }
  } else if (scenario.creditScore >= 740 && scenario.creditScore < 759) {
    if (scenario.propertyUsageType.equals('SECOND_HOME')) {
      scenario.adjustPoint(0.3);
    }
    if (scenario.numberOfUnits >= 3 && scenario.numberOfUnits <= 4) {
      scenario.adjustPoint(1.19);
    }
    if (scenario.loanPurpose.equals('REFINANCE')) {
      scenario.adjustPoint(0);
    }
    if (scenario.propertyUsageType.equals('INVESTMENT')) {
      scenario.adjustPoint(1.19);
    }
  } else if (scenario.creditScore >= 720 && scenario.creditScore < 739) {
    if (scenario.propertyUsageType.equals('SECOND_HOME')) {
      scenario.adjustPoint(0.49);
    }
    if (scenario.numberOfUnits >= 3 && scenario.numberOfUnits <= 4) {
      scenario.adjustPoint(1.33);
    }
    if (scenario.loanPurpose.equals('REFINANCE')) {
      scenario.adjustPoint(0);
    }
    if (scenario.propertyUsageType.equals('INVESTMENT')) {
      scenario.adjustPoint(1.33);
    }
  } else if (scenario.creditScore >= 700 && scenario.creditScore < 719) {
    if (scenario.propertyUsageType.equals('SECOND_HOME')) {
      scenario.adjustPoint(0.7);
    }
    if (scenario.numberOfUnits >= 3 && scenario.numberOfUnits <= 4) {
      scenario.adjustPoint(1.5);
    }
    if (scenario.loanPurpose.equals('REFINANCE')) {
      scenario.adjustPoint(0.53);
    }
    if (scenario.propertyUsageType.equals('INVESTMENT')) {
      scenario.adjustPoint(1.75);
    }
  } else if (scenario.creditScore >= 680 && scenario.creditScore < 699) {
    if (scenario.propertyUsageType.equals('SECOND_HOME')) {
      scenario.adjustPoint(0.7);
    }
    if (scenario.numberOfUnits >= 3 && scenario.numberOfUnits <= 4) {
      scenario.adjustPoint(1.75);
    }
    if (scenario.loanPurpose.equals('REFINANCE')) {
      scenario.adjustPoint(0.53);
    }
    if (scenario.propertyUsageType.equals('INVESTMENT')) {
      scenario.adjustPoint(1.75);
    }
  } else if (scenario.creditScore >= 660 && scenario.creditScore < 679) {
    if (scenario.propertyUsageType.equals('SECOND_HOME')) {
      scenario.adjustPoint(1.23);
    }
    if (scenario.numberOfUnits >= 3 && scenario.numberOfUnits <= 4) {
      scenario.adjustPoint(1.9);
    }
    if (scenario.loanPurpose.equals('REFINANCE')) {
      scenario.adjustPoint(1.05);
    }
    if (scenario.propertyUsageType.equals('INVESTMENT')) {
      scenario.adjustPoint(1.75);
    }
  } else if (scenario.creditScore >= 640 && scenario.creditScore < 659) {
    if (scenario.propertyUsageType.equals('SECOND_HOME')) {
      scenario.adjustPoint(1.23);
    }
    if (scenario.numberOfUnits >= 3 && scenario.numberOfUnits <= 4) {
      scenario.adjustPoint(2);
    }
    if (scenario.loanPurpose.equals('REFINANCE')) {
      scenario.adjustPoint(1.05);
    }
    if (scenario.propertyUsageType.equals('INVESTMENT')) {
      scenario.adjustPoint(2);
    }
  }
  scenario.endRule();
  //#endregion 1a. LPMI Pricing
  //#endregion Auto-Adjustments
  return scenario;
};
