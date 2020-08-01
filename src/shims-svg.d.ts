declare module '*.svg' {
  import { defineComponent } from 'vue';

  interface SVGModule {
    default: string
  }

  export const VueComponent: ReturnType<typeof defineComponent>;
  export default SVGModule;
}
