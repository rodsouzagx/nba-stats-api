export function lbsToKg(weight: string | null): number | null {
  if (!weight) return null;
  return parseFloat(weight) * 0.453592;
}

export function feetToCm(height: string | null): number | null {
  if (!height) return null;
  const [feet, inches] = height.split("-");
  return parseFloat(feet) * 30.48 + parseFloat(inches) * 2.54;
}
