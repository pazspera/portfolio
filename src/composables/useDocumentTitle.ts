import { onMounted } from "vue";

export function useDocumentTitle(title:string) {
  onMounted(()=> {
    document.title = title;
  })

  return { useDocumentTitle };
}