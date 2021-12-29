export type ColorType =
  | "primary"
  | "secondary"
  | "success"
  | "cancel"
  | "edit"
  | "default";

export const colorTheme = (color?: string) => {
  let result = "#d7dadd";
  switch (color) {
    case "primary":
      result = "#008CBA";
      break;
    case "secondary":
      result = "#09aeae";
      break;
    case "success":
      result = "#4CAF50";
      break;
    case "cancel":
      result = "#f44336";
      break;
    case "edit":
      result = "#e6bc15";
      break;
    default:
      result = "#ffffff";
  }
  return result;
};
