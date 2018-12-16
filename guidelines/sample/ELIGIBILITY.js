/* eslint indent:0 */
module.exports = (scenario) => {
  //#region 1. Hard Stop
  //#region 1a. Property State
  if (scenario.propertyState.equals('TX') && scenario.loanPurposeType.equals('CASH_OUT')) {
    scenario.addEligibilityGuideline(false, 'Texas Cash Out');
  } else if (['MD', 'DE'].includes(scenario.propertyState)) {
    scenario.addEligibilityGuideline(false, `NEVER lend in ${scenario.extraInfo.propertyState} state`);
  } else if (['AK', 'AL', 'AR', 'IA', 'IN', 'KS', 'KY', 'LA', 'MO',
      'MS', 'ND', 'NE', 'OK', 'SD', 'TN', 'WI', 'WV'].includes(scenario.propertyState)) {
    scenario.addEligibilityGuideline(false, `NOT lend in ${scenario.extraInfo.propertyState} state`);
  } else if (['MI', 'OH'].includes(scenario.propertyState)) {
    scenario.addEligibilityGuideline(false, `MAY lend in ${scenario.extraInfo.propertyState} state at a later date`);
  }
  //#endregion 1a. Property State
  //#region 1b. QM
  if (scenario.qualifiedMortgage === false) {
    scenario.addEligibilityGuideline(false, 'NON QM');
  }
  if (scenario.salable === false) {
    scenario.addEligibilityGuideline(false, 'Non-salable');
  }
  //#endregion 1b. QM
  //#region 1c. Loan Purpose
  if (scenario.loanPurpose.equals('PURCHASE')) {
    if (scenario.lienPosition !== 1) {
      scenario.addEligibilityGuideline(false, 'First Lien Only');
    } else if (scenario.propertyUsageType.equals('PRIMARY_RESIDENCE')) {
      if (scenario.numberOfUnits > 4) {
        scenario.addEligibilityGuideline(false, 'Units limited to 4');
      } else if (scenario.cltv > 0.80) {
        scenario.addEligibilityGuideline(false, 'CLTV > 80%');
      } else if (scenario.creditScore < 680) {
        scenario.addEligibilityGuideline(false, 'Credit Score < 680');
      }
    } else if (scenario.propertyUsageType.equals('SECOND_HOME')) {
      if (scenario.numberOfUnits > 1) {
        scenario.addEligibilityGuideline(false, 'Units limited to 1');
      } else if (scenario.cltv > 0.80) {
        scenario.addEligibilityGuideline(false, 'CLTV > 80%');
      } else if (scenario.creditScore < 680) {
        scenario.addEligibilityGuideline(false, 'Credit Score < 680');
      }
    } else if (scenario.propertyUsageType.equals('INVESTMENT')) {
      if (scenario.numberOfUnits > 4) {
        scenario.addEligibilityGuideline(false, 'Units limited to 4');
      } else if (scenario.cltv > 0.80) {
        scenario.addEligibilityGuideline(false, 'CLTV > 80%');
      } else if (scenario.creditScore < 680) {
        scenario.addEligibilityGuideline(false, 'Credit Score < 680');
      }
    }
  } else if (scenario.loanPurpose.equals('REFINANCE')) {
    if (scenario.lienPosition !== 1) {
      scenario.addEligibilityGuideline(false, 'First Lien Only');
    } else if (scenario.propertyUsageType.equals('PRIMARY_RESIDENCE')) {
      if (scenario.numberOfUnits > 4) {
        scenario.addEligibilityGuideline(false, 'Units limited to 4');
      } else if (scenario.cltv > 0.80) {
        scenario.addEligibilityGuideline(false, 'CLTV > 80%');
      } else if (scenario.creditScore < 680) {
        scenario.addEligibilityGuideline(false, 'Credit Score < 680');
      }
    } else if (scenario.propertyUsageType.equals('SECOND_HOME')) {
      if (scenario.numberOfUnits > 1) {
        scenario.addEligibilityGuideline(false, 'Units limited to 1');
      } else if (scenario.cltv > 0.80) {
        scenario.addEligibilityGuideline(false, 'CLTV > 80%');
      } else if (scenario.creditScore < 680) {
        scenario.addEligibilityGuideline(false, 'Credit Score < 680');
      }
    } else if (scenario.propertyUsageType.equals('INVESTMENT')) {
      if (scenario.numberOfUnits > 4) {
        scenario.addEligibilityGuideline(false, 'Units limited to 4');
      } else if (scenario.cltv > 0.80) {
        scenario.addEligibilityGuideline(false, 'CLTV > 80%');
      } else if (scenario.creditScore < 680) {
        scenario.addEligibilityGuideline(false, 'Credit Score < 680');
      }
    }
  }
  //#endregion 1c. Loan Purpose
  //#region 1d. Guarantor
  if (!scenario.propertyUsageType.equals('INVESTMENT') && scenario.guarantorExists) {
    scenario.addEligibilityGuideline(false, 'Guarantor exists');
  }
  //#endregion 1d. Guarantor
  //#endregion 1. Hard Stop
  //#region 2. Soft Stop
  if (scenario.eligible) {
    //#region 2a. CLTV & PITI Reserves
    if (scenario.propertyUsageType.equals('PRIMARY_RESIDENCE') && scenario.numberOfUnits.between(1, 4)) {
      if (scenario.loanAmount < 100000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.80) {
          scenario.addEligibilityGuideline(true, 'CLTV > 80%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.75) {
          scenario.addEligibilityGuideline(true, 'CLTV > 75%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 6 months');
      } else if (scenario.loanAmount >= 100000 && scenario.loanAmount <= 500000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.80) {
          scenario.addEligibilityGuideline(true, 'CLTV > 80%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.75) {
          scenario.addEligibilityGuideline(true, 'CLTV > 75%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 6 months');
      } else if (scenario.loanAmount > 500000 && scenario.loanAmount <= 650000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.80) {
          scenario.addEligibilityGuideline(true, 'CLTV > 80%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.75) {
          scenario.addEligibilityGuideline(true, 'CLTV > 75%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 9 months');
      } else if (scenario.loanAmount > 650000 && scenario.loanAmount <= 1100000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.80) {
          scenario.addEligibilityGuideline(true, 'CLTV > 80%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.75) {
          scenario.addEligibilityGuideline(true, 'CLTV > 75%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 12 months');
      } else if (scenario.loanAmount > 1100000 && scenario.loanAmount <= 2000000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.80) {
          scenario.addEligibilityGuideline(true, 'CLTV > 80%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.60) {
          scenario.addEligibilityGuideline(true, 'CLTV > 60%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 18 months');
      } else if (scenario.loanAmount > 2000000 && scenario.loanAmount <= 3000000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.75) {
          scenario.addEligibilityGuideline(true, 'CLTV > 75%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.55) {
          scenario.addEligibilityGuideline(true, 'CLTV > 55%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 24 months');
      } else if (scenario.loanAmount > 3000000 && scenario.loanAmount <= 5000000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.50) {
          scenario.addEligibilityGuideline(true, 'CLTV > 50%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.40) {
          scenario.addEligibilityGuideline(true, 'CLTV > 40%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 36 months');
      } else if (scenario.loanAmount > 5000000) {
        if (scenario.loanPurposeType.equals('PURCHASE')) {
          scenario.addEligibilityGuideline(true, 'CLTV - ELC');
        } else if (scenario.loanPurposeType.equals('RATE_TERM')) {
          scenario.addEligibilityGuideline(true, 'CLTV - ELC');
        } else if (scenario.loanPurposeType.equals('CASH_OUT')) {
          scenario.addEligibilityGuideline(true, 'CLTV - ELC');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves - ELC');
      }
    } else if (scenario.propertyUsageType.equals('SECOND_HOME') && scenario.numberOfUnits === 1) {
      if (scenario.loanAmount < 100000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.80) {
          scenario.addEligibilityGuideline(true, 'CLTV > 80%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.75) {
          scenario.addEligibilityGuideline(true, 'CLTV > 75%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 6 months');
      } else if (scenario.loanAmount >= 100000 && scenario.loanAmount <= 500000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.80) {
          scenario.addEligibilityGuideline(true, 'CLTV > 80%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.75) {
          scenario.addEligibilityGuideline(true, 'CLTV > 75%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 6 months');
      } else if (scenario.loanAmount > 500000 && scenario.loanAmount <= 650000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.80) {
          scenario.addEligibilityGuideline(true, 'CLTV > 80%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.60) {
          scenario.addEligibilityGuideline(true, 'CLTV > 60%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 9 months');
      } else if (scenario.loanAmount > 650000 && scenario.loanAmount <= 1100000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.80) {
          scenario.addEligibilityGuideline(true, 'CLTV > 80%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.60) {
          scenario.addEligibilityGuideline(true, 'CLTV > 60%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 12 months');
      } else if (scenario.loanAmount > 1100000 && scenario.loanAmount <= 1500000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.75) {
          scenario.addEligibilityGuideline(true, 'CLTV > 75%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.60) {
          scenario.addEligibilityGuideline(true, 'CLTV > 60%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 18 months');
      } else if (scenario.loanAmount > 1500000 && scenario.loanAmount <= 2000000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.75) {
          scenario.addEligibilityGuideline(true, 'CLTV > 75%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.55) {
          scenario.addEligibilityGuideline(true, 'CLTV > 55%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 18 months');
      } else if (scenario.loanAmount > 2000000 && scenario.loanAmount <= 3000000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.60) {
          scenario.addEligibilityGuideline(true, 'CLTV > 60%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.55) {
          scenario.addEligibilityGuideline(true, 'CLTV > 55%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 24 months');
      } else if (scenario.loanAmount > 3000000 && scenario.loanAmount <= 5000000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.55) {
          scenario.addEligibilityGuideline(true, 'CLTV > 55%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.50) {
          scenario.addEligibilityGuideline(true, 'CLTV > 50%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.40) {
          scenario.addEligibilityGuideline(true, 'CLTV > 40%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 36 months');
      } else if (scenario.loanAmount > 5000000) {
        if (scenario.loanPurposeType.equals('PURCHASE')) {
          scenario.addEligibilityGuideline(true, 'CLTV - ELC');
        } else if (scenario.loanPurposeType.equals('RATE_TERM')) {
          scenario.addEligibilityGuideline(true, 'CLTV - ELC');
        } else if (scenario.loanPurposeType.equals('CASH_OUT')) {
          scenario.addEligibilityGuideline(true, 'CLTV - ELC');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves - ELC');
      }
    } else if (scenario.propertyUsageType.equals('INVESTMENT') && scenario.numberOfUnits.between(1, 4)) {
      if (scenario.loanAmount < 100000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.60) {
          scenario.addEligibilityGuideline(true, 'CLTV > 60%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 6 months');
      } else if (scenario.loanAmount >= 100000 && scenario.loanAmount <= 500000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.60) {
          scenario.addEligibilityGuideline(true, 'CLTV > 60%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 6 months');
      } else if (scenario.loanAmount > 500000 && scenario.loanAmount <= 650000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.60) {
          scenario.addEligibilityGuideline(true, 'CLTV > 60%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 9 months');
      } else if (scenario.loanAmount > 650000 && scenario.loanAmount <= 1100000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.60) {
          scenario.addEligibilityGuideline(true, 'CLTV > 60%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 12 months');
      } else if (scenario.loanAmount > 1100000 && scenario.loanAmount <= 1500000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.70) {
          scenario.addEligibilityGuideline(true, 'CLTV > 70%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.60) {
          scenario.addEligibilityGuideline(true, 'CLTV > 60%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 18 months');
      } else if (scenario.loanAmount > 1500000 && scenario.loanAmount <= 2000000) {
        if (scenario.loanPurposeType.equals('PURCHASE') && scenario.cltv > 0.65) {
          scenario.addEligibilityGuideline(true, 'CLTV > 65%');
        } else if (scenario.loanPurposeType.equals('RATE_TERM') && scenario.cltv > 0.60) {
          scenario.addEligibilityGuideline(true, 'CLTV > 60%');
        } else if (scenario.loanPurposeType.equals('CASH_OUT') && scenario.cltv > 0.55) {
          scenario.addEligibilityGuideline(true, 'CLTV > 55%');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves 18 months');
      } else if (scenario.loanAmount > 2000000) {
        if (scenario.loanPurposeType.equals('PURCHASE')) {
          scenario.addEligibilityGuideline(true, 'CLTV - ELC');
        } else if (scenario.loanPurposeType.equals('RATE_TERM')) {
          scenario.addEligibilityGuideline(true, 'CLTV - ELC');
        } else if (scenario.loanPurposeType.equals('CASH_OUT')) {
          scenario.addEligibilityGuideline(true, 'CLTV - ELC');
        }
        // PITI Reserves
        scenario.addInfoMessage('PITI Reserves - ELC');
      }
    }
    //#endregion 2a. CLTV & PITI Reserves
    //#region 2b. Credit Score
    if (scenario.creditScore < 720) {
      scenario.addEligibilityGuideline(true, 'Credit Score < 720');
    }
    //#endregion 2b. Credit Score
    //#region 2c. Loan Amount
    //#endregion 2c. Loan Amount
    //#region 2d. Cash Out
    if (scenario.loanPurposeType.equals('RATE_TERM')) {
      if (scenario.cashOut > Math.min(0.01 * scenario.loanAmount, 10000)) {
        scenario.addEligibilityGuideline(true, `Cash Out > ${Math.min(0.01 * scenario.loanAmount, 10000)}`);
      }
    }
    //#endregion 2d. Cash Out
    //#region 2e. Misc.
    if (scenario.loanAmount < 100000) {
      scenario.addEligibilityGuideline(true, 'Loan Amount < $100K');
    }
    if (scenario.loanAmount > 5000000) {
      scenario.addEligibilityGuideline(true, 'Loan Amount > $5MM - ELC');
    }
    if (scenario.qualifiedMortgage === null || scenario.qualifiedMortgage === undefined) {
      scenario.addInfoMessage('Must have a QM DTI <= 43.00%');
    }
    //#endregion 2e. Misc.
    //#region 2f. Property States
    //#endregion 2f. Property States
  }
  //#endregion 2. Soft Stop

  return scenario;
};
