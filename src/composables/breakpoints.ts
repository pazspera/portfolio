import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";
import { computed } from "vue";

export const breakpoints = useBreakpoints(breakpointsTailwind);

export const isMobile = computed(()=> breakpoints.smaller("md").value);