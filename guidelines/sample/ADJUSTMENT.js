/* eslint indent:0 */
module.exports = (scenario) => {
  //#region Auto-Adjustments
  //#reload
  //#region 1a. Credit Score LTV/Loan Term
  scenario.startRule('Credit Score/LTV Loan Term > 15 Yr');
  //#grid_2_params
  if (scenario.creditScore >= 740) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.25);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.25);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0.25);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(0.25);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(0.25);
    } else if (scenario.cltv > 0.90 && scenario.cltv <= 0.95) {
      scenario.adjustPoint(0.25);
    } else if (scenario.cltv > 0.95 && scenario.cltv <= 0.97) {
      scenario.adjustPoint(0.75);
    }
  } else if (scenario.creditScore > 720 && scenario.creditScore <= 739) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.25);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.25);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(0.75);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.90 && scenario.cltv <= 0.95) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.95 && scenario.cltv <= 0.97) {
      scenario.adjustPoint(1.0);
    }
  } else if (scenario.creditScore > 700 && scenario.creditScore <= 719) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(1.0);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(1.25);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(1.0);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(1.0);
    } else if (scenario.cltv > 0.90 && scenario.cltv <= 0.95) {
      scenario.adjustPoint(1.0);
    } else if (scenario.cltv > 0.95 && scenario.cltv <= 0.97) {
      scenario.adjustPoint(1.5);
    }
  } else if (scenario.creditScore > 680 && scenario.creditScore <= 699) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(1.25);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(1.75);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(1.5);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(1.25);
    } else if (scenario.cltv > 0.90 && scenario.cltv <= 0.95) {
      scenario.adjustPoint(1.25);
    } else if (scenario.cltv > 0.95 && scenario.cltv <= 0.97) {
      scenario.adjustPoint(1.5);
    }
  } else if (scenario.creditScore > 660 && scenario.creditScore <= 679) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(1.5);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(1.5);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(2.75);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(3.25);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(3.5);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(3.0);
    } else if (scenario.cltv > 0.90 && scenario.cltv <= 0.95) {
      scenario.adjustPoint(3.0);
    } else if (scenario.cltv > 0.95 && scenario.cltv <= 0.97) {
      scenario.adjustPoint(3.0);
    }
  } else if (scenario.creditScore > 640 && scenario.creditScore <= 659) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(1.25);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(2.0);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(2.0);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(3.5);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(3.75);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(4.0);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(3.5);
    } else if (scenario.cltv > 0.90 && scenario.cltv <= 0.95) {
      scenario.adjustPoint(3.5);
    } else if (scenario.cltv > 0.95 && scenario.cltv <= 0.97) {
      scenario.adjustPoint(3.5);
    }
  }
  //#end_grid_2_params
  scenario.endRule();
  //#endregion 1a. Credit Score LTV/Loan Term
  //#region 1b. Cashout
  scenario.startRule('Cashout');
  if (scenario.loanPurpose.equals('REFINANCE') && scenario.loanPurposeType.equals('CASH_OUT')) {
    //#grid_2_params
    if (scenario.creditScore >= 740) {
      if (scenario.cltv <= 0.60) {
        scenario.adjustPoint(0.375);
      } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
        scenario.adjustPoint(0.625);
      } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
        scenario.adjustPoint(0.625);
      } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
        scenario.adjustPoint(0.625);
      } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
        scenario.adjustPoint(0.875);
      }
    } else if (scenario.creditScore > 720 && scenario.creditScore <= 739) {
      if (scenario.cltv <= 0.60) {
        scenario.adjustPoint(0.375);
      } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
        scenario.adjustPoint(1.0);
      } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
        scenario.adjustPoint(1.0);
      } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
        scenario.adjustPoint(1.0);
      } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
        scenario.adjustPoint(1.125);
      }
    } else if (scenario.creditScore > 700 && scenario.creditScore <= 719) {
      if (scenario.cltv <= 0.60) {
        scenario.adjustPoint(0.375);
      } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
        scenario.adjustPoint(1.0);
      } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
        scenario.adjustPoint(1.0);
      } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
        scenario.adjustPoint(1.0);
      } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
        scenario.adjustPoint(1.125);
      }
    } else if (scenario.creditScore > 680 && scenario.creditScore <= 699) {
      if (scenario.cltv <= 0.60) {
        scenario.adjustPoint(0.375);
      } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
        scenario.adjustPoint(1.125);
      } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
        scenario.adjustPoint(1.125);
      } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
        scenario.adjustPoint(1.125);
      } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
        scenario.adjustPoint(1.750);
      }
    } else if (scenario.creditScore > 660 && scenario.creditScore <= 679) {
      if (scenario.cltv <= 0.60) {
        scenario.adjustPoint(0.625);
      } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
        scenario.adjustPoint(1.125);
      } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
        scenario.adjustPoint(1.125);
      } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
        scenario.adjustPoint(1.125);
      } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
        scenario.adjustPoint(1.875);
      }
    } else if (scenario.creditScore > 640 && scenario.creditScore <= 659) {
      if (scenario.cltv <= 0.60) {
        scenario.adjustPoint(0.625);
      } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
        scenario.adjustPoint(1.625);
      } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
        scenario.adjustPoint(1.625);
      } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
        scenario.adjustPoint(1.625);
      } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
        scenario.adjustPoint(2.625);
      }
    }
    //#end_grid_2_params
  }
  scenario.endRule();
  //#endregion 1b. Cashout
  //#region 1c. Investment Properties
  scenario.startRule('Investment Property');
  if (scenario.propertyUsageType.equals('INVESTMENT')) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(2.125);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(2.125);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(2.125);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(2.125);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(3.375);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(4.125);
    }
  }
  scenario.endRule();
  //#endregion 1c. Investment Properties
  //#region 1d. State Adjustments
  scenario.startRule('State Adjustments');
  if (['CA', 'CO', 'DC', 'HI', 'MD', 'ME', 'MN', 'NV', 'RI'].includes(scenario.propertyState)) {
    scenario.adjustPoint(0.125);
  } else if (scenario.propertyState.equals('NY')) {
    scenario.adjustPoint(0.250);
  }
  scenario.endRule();
  //#endregion 1d. State Adjustments
  //#endregion Auto-Adjustments
  //#region Manual Adjustments
  if (scenario.adjustment) {
    //#region 1. Broker Status
    scenario.startRule('Broker Status');
    if (scenario.isChecked('Standard')) {
      scenario.adjustPoint();
    } else if (scenario.isChecked('Premium')) {
      scenario.adjustPoint();
    } else if (scenario.isChecked('Elite')) {
      scenario.adjustPoint();
    }
    scenario.endRule();
    //#endregion 1. Broker Status
    //#region 2. LEED CERTIFIED PROPERTY
    scenario.startRule('Leed Certified Property');
    if (scenario.isChecked('Leed Certified Property')) {
      scenario.adjustPoint();
    }
    scenario.endRule();
    //#endregion 2. LEED CERTIFIED PROPERTY
    //#region 3. Pre-payment Penalty
    scenario.startRule('Prepayment Penalty');
    if (scenario.isChecked('Remove Prepay')) {
      scenario.adjustPoint();
    }
    scenario.endRule();
    //#endregion 3. Pre-payment Penalty
    //#region 4. Non-owner occupied
    scenario.startRule('Waive NOO Points');
    if (scenario.propertyUsageType.equals('INVESTMENT')) {
      if (scenario.isChecked('Waive NOO Points')) {
        scenario.adjustPoint(0.2);
      }
    }
    scenario.endRule();
    //#endregion 4. Non-owner occupied
  }
  //#endregion Manual Adjustments

  return scenario;
};
