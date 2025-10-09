export const createStaticImageRoute = (imageInfo: string) => {
  if(!imageInfo){
    return "";
  }

  return `/images/${imageInfo}`;
}