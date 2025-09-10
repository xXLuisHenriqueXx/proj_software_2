export const pictureHelper = {
  isValidBase64Image(dataUri: string): boolean {
    const matches = dataUri.match(/^data:(image\/[a-zA-Z]+);base64,(.+)$/)
    if (!matches) return false

    const base64 = matches[2]

    try {
      const buffer = Buffer.from(base64, "base64")
      return buffer.length > 0
    } catch {
      return false
    }
  }
}
