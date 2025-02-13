<template>
    <swiper 
        :modules="modules"
        :slides-per-view="1"
        :navigation="navigationOptions"
        pagination
        :loop="true"
    >
        <swiper-slide v-for="(img, index) in images" :key="index">
            <img :src="img" class="slide-img" @click="toggleSwiperNavVisibility" />
        </swiper-slide> 
   </swiper>

   <vue-easy-lightbox :visible="visible" :imgs="modalImage" @hide="visible = false"/>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; 
import VueEasyLightbox from "vue-easy-lightbox";

export default {
    components: {Swiper, SwiperSlide, VueEasyLightbox},
    props: {
        images: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            modules: [ Navigation, Pagination ],
            navigationOptions: {
                hideOnClick: true,
            },
            swiperNavVisible: false,
            visible: false,
            modalImage: "",
        }
    },
    methods: {
        showLightbox(img) {
            this.modalImga = img;
            this.visible = true;
        }, 
        toggleSwiperNavVisibility() {
            this.toggleSwiperNavVisibility = !this.toggleSwiperNavVisibility;
        }
    }
}
</script>

<style scoped>
.slide-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.swiper-button-next, .swiper-button-prev {
  visibility: hidden;  /* Ocultar botones por defecto */
  transition: visibility 0.3s ease;
}

.swiper-button-next.swiper-button-visible,
.swiper-button-prev.swiper-button-visible {
  visibility: visible;  /* Mostrar botones cuando sean visibles */
}
</style>