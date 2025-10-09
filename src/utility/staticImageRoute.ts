const ASSETS_BASE_URL = new URL("../assets/images/", import.meta.url).href;

export const createStaticImageRoute = (imageInfo: string) => {
  if(!imageInfo){
    return "";
  }

  return `${ASSETS_BASE_URL}/${imageInfo}`;
}