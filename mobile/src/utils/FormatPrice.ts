export const formatPrice = (value: string) => {
    return value.replace(".", "").replace(",", ".").split(" ")[1];
}
  
