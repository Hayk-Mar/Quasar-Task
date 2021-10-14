<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-purple-10 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <q-icon name="store" style="font-size: 1.4em;" />
          </q-avatar>
          Stores
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <StoresList />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import StoresList from "../components/StoresList.vue";

export default defineComponent({
  name: "MainLayout",
  components: { StoresList },
});
</script>
