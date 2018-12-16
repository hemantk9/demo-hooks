/* eslint indent:0 */
module.exports = (scenario) => {
  //#region Auto-Adjustments
  scenario.startRule('Credit Score');
  //#GRID
  if (scenario.creditScore >= 800) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(0.5);
    }
  } else if (scenario.creditScore >= 760 && scenario.creditScore <= 799) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(0.375);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(0.625);
    }
  } else if (scenario.creditScore >= 740 && scenario.creditScore <= 759) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(-0.125);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(-0.125);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0.375);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(0.625);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(0.750);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(0.750);
    }
  } else if (scenario.creditScore >= 720 && scenario.creditScore <= 739) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.125);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.375);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0.625);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(1.250);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(1.250);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(1.250);
    }
  } else if (scenario.creditScore >= 700 && scenario.creditScore <= 719) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.625);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.875);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(1.125);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(1.5);
    }
  } else if (scenario.creditScore >= 680 && scenario.creditScore <= 699) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.875);
    }
  }
  scenario.endRule();

  scenario.startRule('Loan Amount');
  //#GRID
  if (scenario.loanAmount < 625000) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(0.625);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(1.125);
    }
  } else if (scenario.loanAmount >= 625001 && scenario.loanAmount <= 1000000) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(0.625);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(1.125);
    }
  } else if (scenario.loanAmount >= 1000001 && scenario.loanAmount <= 1500000) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.125);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0.375);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(0.625);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(1.125);
    }
  } else if (scenario.loanAmount >= 1500001 && scenario.loanAmount <= 2000000) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(-0.125);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.125);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.375);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0.5);
    }
  } else if (scenario.loanAmount >= 2000001 && scenario.loanAmount <= 2500000) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.375);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0.625);
    }
  } else if (scenario.loanAmount >= 2500001 && scenario.loanAmount <= 3000000) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.5);
    }
  }
  scenario.endRule();

  scenario.startRule('Cash Out');
  if (scenario.loanPurposeType === 'CASH_OUT') {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.5);
    }
  }
  scenario.endRule();

  scenario.startRule('2-4 Unit');
  //#GRID
  if (scenario.numberOfUnits === 2) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.375);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.375);
    }
  } else if (scenario.numberOfUnits === 3 || scenario.numberOfUnits === 4) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.75);
    }
  }
  scenario.endRule();

  scenario.startRule('Second Home or Investment');
  //#GRID
  if (scenario.propertyUsageType === 'SECOND_HOME') {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0.125);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.375);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(1);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(1.250);
    }
  } else if (scenario.propertyUsageType === 'INVESTMENT') {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0.250);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0.250);
    }
  }
  scenario.endRule();
  scenario.startRule('Condo');
  if (['DETACHED_CONDO', 'CONDO_UNDER_5_STORIES', 'CONDO_5_8_STORIES', 'CONDO_OVER_8_STORIES'].includes(scenario.propertyType)) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0.25);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(0.5);
    }
  }
  scenario.endRule();

  scenario.startRule('Purchase');
  if (scenario.loanPurposeType === 'PURCHASE') {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(-0.250);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(0);
    }
  }
  scenario.endRule();

  scenario.startRule('State Adjustments');
  if (['FL', 'NV'].includes(scenario.propertyState)) {
    if (scenario.cltv <= 0.60) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.60 && scenario.cltv <= 0.65) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.65 && scenario.cltv <= 0.70) {
      scenario.adjustPoint(0);
    } else if (scenario.cltv > 0.70 && scenario.cltv <= 0.75) {
      scenario.adjustPoint(0.25);
    } else if (scenario.cltv > 0.75 && scenario.cltv <= 0.80) {
      scenario.adjustPoint(0.5);
    } else if (scenario.cltv > 0.80 && scenario.cltv <= 0.85) {
      scenario.adjustPoint(0.75);
    } else if (scenario.cltv > 0.85 && scenario.cltv <= 0.90) {
      scenario.adjustPoint(0.75);
    }
  }
  scenario.endRule();

  scenario.startRule('Escrow Waiver');
  if (scenario.escrow === 'ALL_WAIVED' && scenario.propertyState === 'CA' && scenario.ltv > 0.8) {
    scenario.adjustPoint(0.25);
  }
  scenario.endRule();
  //#endregion Auto-Adjustments
  return scenario;
};
