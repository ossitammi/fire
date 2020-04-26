const fireCalculations = (capital, yieldRate, taxRate, monthlyInvestment, referenceYear) => {
  return capitalOfYear(capital, referenceYear, monthlyInvestment, yieldRate, taxRate);
};

const yieldCalc = (capital, yieldRate, taxRate) => {
  return (capital * (yieldRate / 100) * (1 - taxRate / 100));
};

const capitalOfYear = (startCapital, year, monthlyInvestment, yieldRate, taxRate) => {
  /** At the beginning, capital equals startCapital */
  if (year === 0) {
    return { capital: startCapital, yield: 0 };
  }

  /**
   * Calculate capital recursively:
   * current capital = last year's capital + new savings + last year's yield
   */
  const lastYearsCapital = capitalOfYear(startCapital, year - 1, monthlyInvestment, yieldRate, taxRate).capital;
  const lastYearsYield = yieldCalc(lastYearsCapital, yieldRate, taxRate);
  const currentCapital = lastYearsCapital + monthlyInvestment * 12 + lastYearsYield;
  return { capital: currentCapital, yield: lastYearsYield };
};

const daysInHammoc = (dailyExpences, investmentsYield) => (investmentsYield / dailyExpences);

export { daysInHammoc, fireCalculations};
