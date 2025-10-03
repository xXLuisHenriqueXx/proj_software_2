export const pictureHelper = {
    isValidBase64Image(base64String: string): boolean {
        const regex = /^data:image\/[a-zA-Z]+;base64,/;
        return regex.test(base64String);
    },
    applyPicturePlaceholder(toys: any[]) {
    return toys.map((toy) => ({
      ...toy,
      ToyPictures:
        toy.ToyPictures && toy.ToyPictures.length > 0
          ? toy.ToyPictures.map((p: any) => ({
              ...p,
              picture: p.picture
                ? p.picture
                : "/public/assets/image_not_found.jpg",
            }))
          : [
              {
                id: "placeholder",
                order: 1,
                picture: "/public/assets/image_not_found.jpg",
              },
            ],
    }));
  },
};
