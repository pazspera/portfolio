<template>
    <swiper 
        :modules="modules"
        :grab-cursor="true"
        :slides-per-view="1"
        navigation
        pagination
        :loop="true"
        :class="{ 'swiper-nav-visible' : swiperNavVisible}"
    >
        <swiper-slide v-for="(img, index) in images" :key="index" class="mb-3">
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
            swiperNavVisible: false,
            visible: false,
            modalImage: "",
        }
    },
    methods: {
        showLightbox(img) {
            this.modalImage = img;
            this.visible = true;
        }, 
        toggleSwiperNavVisibility() {
            this.swiperNavVisible = !this.swiperNavVisible;
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
  visibility: hidden;
  transition: visibility 0.3s ease;
}

.swiper-nav-visible .swiper-button-next,
.swiper-nav-visible .swiper-button-prev {
  visibility: visible;
}

</style>