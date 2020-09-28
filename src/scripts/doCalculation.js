const doCalculation = (n1, action, n2) => {
  let result = "";
  let m1 = parseFloat(n1);
  let m2 = parseFloat(n2);
  switch (true) {
    case action === "plus":
      result = m1 + m2;
      break;
    case action === "minus":
      result = m1 - m2;
      break;
    case action === "multi":
      result = m1 * m2;
      break;
    case action === "divide":
      result = m1 / m2;
      break;
  }

  return result;
};

export default doCalculation;
