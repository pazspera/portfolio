import { computed } from "vue";
import { IndividualImageSrc, ImageSrcSet } from "../types/general";

/* 
Le paso un array con el nombre de la imagen

let srcSet = [
  {
    src: 'bio-288w.jpg',
    width: '288w'
  },
  {
    src: 'bio-200w.jpg',
    width: '200w'
  },
]

Para el src necesito la ruta + el src del objeto, un espacio y el width
Ejemplo: /src/assets/images/bio-288w.jpg 288w, /src/assets/images/bio-200w.jpg 200w
Tengo que devolver un string con el src + space + width, separado por comas

También necesito los sizes, que son los tamaños en pixeles y las condiciones a cumplir

imgSrc podría ser un type que tenga:
- array de objetos con src y width
- string con sizes y condiciones



*/

export const useImageUrl = (imageInfo: string | ImageSrcSet) => {
  if(typeof imageInfo === "string") {
    const imgUrl = computed(()=> {
      return new URL(`../assets/images/${imageInfo}`, import.meta.url).href;
    })
  
    return { imgUrl };
  }

  // si no es string, va a ImageSrcSet
  console.log("le pasé un ImageSrcSet", imageInfo);
}