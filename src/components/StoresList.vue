<template>
  <div class="q-layout-padding">
    <q-inner-loading :showing="!storesList.length">
      <q-spinner-gears size="50px" color="pink-8" />
    </q-inner-loading>

    <div v-if="storesList.length">
      <StoreDetailsDialog ref="detailsDialogRef" :openedStore="openedStore" />
      <div class="row justify-center">
        <div
          class="col-lg-3 col-md-4 col-sm-6 col-xs-12 q-pa-xs"
          v-for="store in storesList"
          :key="store.code"
        >
          <q-card class="my-card bg-pink-8">
            <q-card-section class="text-white">
              <div class="text-h6">{{ store.name }}</div>
              <div class="text-subtitle2">{{ store.city }}</div>
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn
                outline
                rounded
                color="white"
                @click="() => openDetailsDialog(store)"
              >
                <q-icon name="info_outline" class="q-mr-sm" />
                Details
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import StoreDetailsDialog from "../components/StoreDetailsDialog.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const $store = useStore();
    const storesList = computed(() => $store.getters["storeModule/stores"]);
    const openedStore = ref(null);

    onMounted(() => $store.dispatch('storeModule/updateStores'));

    function openDetailsDialog(storeInfo) {
      openedStore.value = storeInfo;
      this.$refs.detailsDialogRef.show();
    }

    return {
      storesList,
      openedStore,
      openDetailsDialog,
    };
  },
  components: { StoreDetailsDialog },
});
</script>
