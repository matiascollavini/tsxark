export const normalizeString = (str: string) => {
  return str
    ?.normalize('NFD') // Normaliza caracteres acentuados
    ?.replace(/[\u0300-\u036f]/g, '') // Elimina los caracteres acentuados
    ?.replace(/[^a-zA-Z0-9]/g, '') // Elimina todo lo que no sea alfanumérico
    ?.toLowerCase(); // Convierte a minúsculas
}