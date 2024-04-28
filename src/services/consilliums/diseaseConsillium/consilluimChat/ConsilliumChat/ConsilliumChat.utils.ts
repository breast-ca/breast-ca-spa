import stc from "string-to-color";

export function getColorByString(str: string) {
  return stc(str);
}
