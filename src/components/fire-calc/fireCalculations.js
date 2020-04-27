const fireCalculations = (capital, yieldRate, taxRate, monthlyInvestment, referenceYear) => {
  return capitalOfYear(capital, referenceYear, monthlyInvestment, yieldRate, taxRate);
};

const yieldCalc = (capital, yieldRate, taxRate) => {
  return (capital * (yieldRate / 100) * (1 - taxRate / 100));
};

const capitalOfYear = (startCapital, year, monthlyInvestment, yieldRate, taxRate) => {
  /** At the beginning, capital equals startCapital */
  if (year === 0) {
    return { capital: startCapital, yield: yieldCalc(startCapital, yieldRate, taxRate) };
  }

  /**
   * Calculate capital recursively:
   * current capital = last year's capital + new savings + last year's yield
   */
  const lastYearsCapital = capitalOfYear(startCapital, year - 1, monthlyInvestment, yieldRate, taxRate).capital;
  const lastYearsYield = yieldCalc(lastYearsCapital, yieldRate, taxRate);
  const currentCapital = lastYearsCapital + monthlyInvestment * 12 + lastYearsYield;
  const yieldForecast = yieldCalc(currentCapital, yieldRate, taxRate);
  return { capital: currentCapital, yield: yieldForecast };
};

const yieldPaidDays = (dailyExpences, investmentsYield) => {
  return dailyExpences ? (investmentsYield / dailyExpences) : 1000;
};

export { yieldPaidDays, fireCalculations};
