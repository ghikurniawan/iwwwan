export function isValidImage(link: string) {
  return new Promise<boolean>((resolve) => {
    const img = new Image();

    img.onload = () => {
      // Image has successfully loaded, it's a valid image
      resolve(true);
    };

    img.onerror = () => {
      // Failed to load the image, it's not a valid image
      resolve(false);
    };

    img.src = link;
  });
}
