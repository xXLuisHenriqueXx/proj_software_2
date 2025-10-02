// formValidator.ts
export type FieldValidation<T> = {
  field: keyof T;
  rules: ((
    value: string,
    allValues: Record<string, string>
  ) => string | null)[];
};

export function validateForm<T extends Record<string, string>>(
  fields: T,
  schema: FieldValidation<T>[]
): { values: T | null; error: string | null } {
  for (const { field, rules } of schema) {
    const value = fields[field] ?? "";
    for (const rule of rules) {
      const error = rule(value, fields);
      if (error) {
        return { values: null, error };
      }
    }
  }

  const trimmed = Object.fromEntries(
    Object.entries(fields).map(([k, v]) => [k, v?.trim() ?? ""])
  ) as T;

  return { values: trimmed, error: null };
}
