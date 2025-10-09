<script setup lang="ts">
import { ImageSrcSet } from '../types/general';
import { createStaticImageRoute } from '../utility/staticImageRoute';
import { onMounted, ref } from 'vue';

const props = defineProps<{
  img: ImageSrcSet,
}>();

const newSrcSet = ref(""); 

const testImgSrcSet = {
  srcSet: [
    {
    src: 'bio-288w.jpg',
    width: '288w'
    },
    {
      src: 'bio-200w.jpg',
      width: '200w'
    },
    {
    src: 'bio-288w.jpg',
    width: '1024w'
    },
  ],
  sizes: "(width < 767px) 288w, 200w, (width > 1025px) 1024px",
  srcDefault: "/288S.png",
  alt: "img test directo"
}


const createImgSrcSetRoute = (imgArray : ImageSrcSet) => {
  /* 
    iterar en la prop srcSet dentro de imgArray (objeto)
    dentro de cada objeto en srcSet, llamar a useImageUrl para que cree la ruta de imagen
    concatenar ruta imagen + " " + width + ","
    guardar todo esto en un string
    sacarle la coma final al string
    devolverlo
  */
  let srcSetString = "";

  imgArray.srcSet.map((img)=> {
    /* console.log("img", img);
    console.log("img.src", img.src);
    console.log("img.width", img.width); */
    // srcWithRoute devuelve un objeto
    // hay que acceder a imgUrl.value para obtener el string
    // useImageUrl devuelve el objeto, hay que sacarle la prop
    let newImageRoute = createStaticImageRoute(img.src);
    srcSetString += `${newImageRoute} ${img.width}, `
    console.log("srcSetString", srcSetString);
  })

  if(srcSetString.endsWith(", ")) {
    srcSetString = srcSetString.slice(0, -2);
  }
  
  return srcSetString;
}

onMounted(()=> {
  createImgSrcSetRoute(testImgSrcSet);
  newSrcSet.value = createImgSrcSetRoute(props.img);
  console.log("newSrcSet",newSrcSet);
})

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

SI ACÁ ESTOY MANDANDO SOLO LAS RUTAS, TENGO INFO DE MÁS
Tendría que hacer un componente de ImageSrcSet que maneje la iteración y el template para un srcset con sizes
Sino, esto va a estar manejando más de una cosa

Tiene que iterar entre los objetos de srcSet
Tomar el src y armar el path con la new url
Crear un string con el src con url + space + width
Agregarle una coma al final, excepto al último
(O a todos y que le borre el último caracter)

*/


</script>

<template>
  <h1>Test sin v-for</h1>
  <img 
    srcset="/288S.png 288w, /200.png 200w, /288S.png 1024w"
    sizes="(max-width: 768px) 288px, (max-width: 1024px) 200px, 1024px"
    :src="createStaticImageRoute(props.img.srcDefault)"
    alt="test" />
  
  <h1>Test con props</h1>
  <img 
    :srcset="newSrcSet"
    :sizes="props.img.sizes"
    :src="createStaticImageRoute(props.img.srcDefault)"
    :alt="props.img.alt" />
</template>