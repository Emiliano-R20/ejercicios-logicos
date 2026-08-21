//Primwe resultado
export function convertToBinary(n: number): string {
  return n.toString(2);
  return "";
}

//Segundo resultado
export function convertToBinary(n: number): string {
  if (n == 0) return '0'
   let binario = ''

   while (n>0){

    binario = n % 2 + binario
    n = Math.floor(n/2);
   }

  return binario;
}