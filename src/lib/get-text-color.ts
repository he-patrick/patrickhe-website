export const getTextColor = (background: string) => {
  const rgb = hexToRgb(background);
  if (!rgb) return "black"; // Default to black if invalid hex code

  const luminance = (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) / 255;
  return luminance > 0.5 ? "black" : "white";
};

// Utility function to convert a hexadecimal color to RGB
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  if (!/^#?([a-f\d]{3}){1,2}$/i.test(hex)) {
    return null; // Return null for invalid hex code
  }

  // Expand shorthand hex code to full length if necessary
  if (hex.length === 4 || hex.length === 3) {
    hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`);
  }

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null; // Return null for invalid hex code

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};
