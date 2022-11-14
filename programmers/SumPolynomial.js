function solution(polynomial) {
  const nomials = polynomial.split('+');
  let xValue = 0;
  let constant = 0;
  nomials.forEach((nomial) => {
    nomial = nomial.trim();
    console.log(nomial);
    if (nomial.includes('x')) {
      const value =
        nomial.length === 1 ? 1 : Number(nomial.slice(0, nomial.length - 1));
      xValue += value;
    } else {
      constant += Number(nomial);
    }
  });

  return `${xValue}x + ${constant}`;
}

solution('3x + 7 + x');
