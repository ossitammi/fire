const fireCalculations = (capital, yieldRate, taxRate, monthlyInvestment, referenceYear) => {
  return capitalOfYear(capital, referenceYear, monthlyInvestment, yieldRate, taxRate);
};

const yieldCalc = (capital, yieldRate, taxRate) => {
  return (capital * (yieldRate / 100) * (1 - taxRate / 100));
};

const capitalOfYear = (startCapital, year, monthlyInvestment, yieldRate, taxRate) => {
  /** At the beginning, capital equals startCapital */
  if (year === 0) {
    return startCapital;
  }

  /**
   * Calculate capital recursively:
   * current capital = last year's capital + new savings + last year's yield
   */
  const lastYearsCapital = capitalOfYear(startCapital, year - 1, monthlyInvestment, yieldRate, taxRate);
  return lastYearsCapital + monthlyInvestment * 12 + yieldCalc(lastYearsCapital, yieldRate, taxRate);
};

export default fireCalculations;
