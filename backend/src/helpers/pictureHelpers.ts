export const pictureHelper = {
    isValidBase64Image(base64String: string): boolean {
        const regex = /^data:image\/[a-zA-Z]+;base64,/;
        return regex.test(base64String);
    }
};
