<template>
<ion-page>
  <SlidePuzzleContainer />
</ion-page>
</template>

<script>
import {
  IonPage
} from '@ionic/vue';
import {
  defineComponent
} from 'vue';
import SlidePuzzleContainer from '@/components/SlidePuzzleContainer.vue';


export default defineComponent({
  name: 'SlidePuzzle',
  components: {
    SlidePuzzleContainer,
    IonPage,
  },
  setup() {
    return {}
  }
});
</script>
