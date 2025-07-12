declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '@splidejs/vue-splide/css' {
  const content: string; // O Record<string, string>;
  export default content;
}