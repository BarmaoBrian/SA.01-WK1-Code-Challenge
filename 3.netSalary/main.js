function calculateSalary() {
  const basicSalary = parseFloat(document.getElementById("basicSalary").value);
  const benefits = parseFloat(document.getElementById("benefits").value);

  if (isNaN(basicSalary) || isNaN(benefits)) {
      document.getElementById("result").textContent = "Please enter valid numbers for basic salary and benefits.";
      return;
  }

  const grossSalary = basicSalary + benefits;
  const payeeTax = calculatePayeeTax(grossSalary);
  const nhifDeductions = calculateNHIFDeductions(grossSalary);
  const nssfDeductions = calculateNSSFDeductions(grossSalary);
  const netSalary = grossSalary - payeeTax - nhifDeductions - nssfDeductions;

  const resultText = `
      Basic Salary: KES ${basicSalary.toFixed(2)}
      Benefits: KES ${benefits.toFixed(2)}
      Gross Salary: KES ${grossSalary.toFixed(2)}
      Payee Tax: KES ${payeeTax.toFixed(2)}
      NHIF Deductions: KES ${nhifDeductions.toFixed(2)}
      NSSF Deductions: KES ${nssfDeductions.toFixed(2)}
      Net Salary: KES ${netSalary.toFixed(2)}
  `;

  document.getElementById("result").textContent = resultText;
}

function calculatePayeeTax(grossSalary) {
  let taxableIncome = grossSalary;
  let tax = 0;

  if (taxableIncome <= 24000) {
      tax = taxableIncome * 0.1;
  } else if (taxableIncome <= 32333) {
      tax = 2400 + ((taxableIncome - 24000) * 0.25);
  } else {
      tax = 4483 + ((taxableIncome - 32333) * 0.3);
  }

  return tax;
}

function calculateNHIFDeductions(grossSalary) {
  let nhifDeductions = 0;

  if (grossSalary <= 5999) {
      nhifDeductions = 150;
  } else if (grossSalary <= 7999) {
      nhifDeductions = 300;
  } else if (grossSalary <= 11999) {
      nhifDeductions = 400;
  } else if (grossSalary <= 14999) {
      nhifDeductions = 500;
  } else if (grossSalary <= 19999) {
      nhifDeductions = 600;
  } else if (grossSalary <= 24999) {
      nhifDeductions = 750;
  } else if (grossSalary <= 29999) {
      nhifDeductions = 850;
  } else if (grossSalary <= 34999) {
      nhifDeductions = 900;
  } else if (grossSalary <= 39999) {
      nhifDeductions = 950;
  } else if (grossSalary <= 44999) {
      nhifDeductions = 1000;
  } else if (grossSalary <= 49999) {
      nhifDeductions = 1100;
  } else if (grossSalary <= 59999) {
      nhifDeductions = 1200;
  } else if (grossSalary <= 69999) {
      nhifDeductions = 1300;
  } else if (grossSalary <= 79999) {
      nhifDeductions = 1400;
  } else if (grossSalary <= 89999) {
      nhifDeductions = 1500;
  } else if (grossSalary <= 99999) {
      nhifDeductions = 1600;
  } else {
      nhifDeductions = 1700;
  }

  return nhifDeductions;
}

function calculateNSSFDeductions(grossSalary) {
  const nssfRate = 0.06; // 6% of gross salary up to a maximum of KES 200
  const maxNSSFDeductions = 200;
  const nssfDeductions = Math.min(grossSalary * nssfRate, maxNSSFDeductions);
  return nssfDeductions;
}