<template>
  <DataTable :value="data" class="marg">
    <template #header>
        <div>
            <h2 style="text-align: center;">Tâches</h2>
        </div>
    </template>
    <Column field="type" header="Type"></Column>
    <Column field="status" header="Status">
      <template #body="slotProps">
        <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
      </template>
    </Column>
    <template #footer> Au total le site aura {{ data ? data.length : 0 }} tâches. </template>
</DataTable>
</template>

<script>
import { Column, DataTable, Tag } from "primevue";
import userData from "../assets/learn.json"


export default {

  name: 'json-inf',
  props: {
    Path: String
  },
  components: {
    Column,
    DataTable,
    Tag
  },
  data() {
    return {data: userData}
  },
  methods: {
    getSeverity(status) {
            switch (status) {
                case 'fini':
                    return 'success';

                case 'en cours':
                    return 'warn';

                case 'futur':
                    return 'danger';

                default:
                    return null;
            }
        }
  }
}
</script>

<style scoped>

.marg {
  margin-bottom: 50px;
  background-color: #CE6A6B;
}

</style>
