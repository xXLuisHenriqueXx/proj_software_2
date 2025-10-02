export const validationRules = {
  required:
    (msg: string = "Preencha todos os campos") =>
    (value: string) =>
      value?.trim() ? null : msg,

  email:
    (msg: string = "Preencha um e-mail válido") =>
    (value: string) =>
      value && /\S+@\S+\.\S+/.test(value) ? null : msg,

  minLength: (min: number, msg?: string) => (value: string) =>
    value?.length >= min ? null : msg || `Mínimo de ${min} caracteres`,

  match:
    (fieldToMatch: string, msg?: string) =>
    (value: string, allValues: Record<string, string>) =>
      value === allValues[fieldToMatch]
        ? null
        : msg || "Os valores não coincidem",
};
