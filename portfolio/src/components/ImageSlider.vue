<template>
    <swiper 
        :modules="modules"
        :slides-per-view="1"
        :navigation="navigationOptions"
        pagination
        :loop="true"
    >
        <swiper-slide v-for="(img, index) in images" :key="index">
            <img :src="img" class="slide-img" />
        </swiper-slide> 
   </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; 

export default {
    components: {Swiper, SwiperSlide},
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
            }
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
</style>