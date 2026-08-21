function capitalizeFirstLetter(text: string): string {
  if(text == "")
  return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// No modificar: necesario para evaluar el resultado.
export { capitalizeFirstLetter };