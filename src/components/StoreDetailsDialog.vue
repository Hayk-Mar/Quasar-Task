<template>
  <q-dialog v-model="dialog" ref="dialogRef" @hide="hide">
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section>
        <div class="text-h6">{{ openedStore.name }}</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-markup-table separator="cell">
          <tbody>
            <tr v-for="(info, index) in showInformation" :key="index">
              <td class="text-left text-weight-bold">{{ info.name }}</td>
              <td
                :class="`text-right text-weight-bold ${
                  !openedStore[info.type] ? 'text-red' : ''
                }`"
              >
                {{ openedStore[info.type] || "No data" }}
              </td>
            </tr>
          </tbody>
        </q-markup-table>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn rounded flat label="Close" @click="hide" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    openedStore: Object,
  },
  setup() {
    const dialog = ref(false);
    const showInformation = [
      {
        type: "city",
        name: "City",
      },
      {
        type: "state",
        name: "State",
      },
      {
        type: "address",
        name: "Address",
      },
      {
        type: "companyName",
        name: "Company Name",
      },
      {
        type: "code",
        name: "Code",
      },
    ];

    function show() {
      dialog.value = true;
    }

    function hide() {
      dialog.value = false;
    }

    return {dialog, showInformation, show, hide};
  },
};
</script>
