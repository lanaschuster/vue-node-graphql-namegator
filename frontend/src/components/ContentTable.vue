<template>
  <div>
    <h6 class="is-6">{{ title }} <span class="tag is-info">{{ quantity }}</span></h6>
    <div class="card">
      <div class="card-content">
        <table class="table is-fullwidth is-hoverable">
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ item }}</td>
          </tr>
        </table>
        <slot name="fields" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentTable',
  props: {
    title: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
  }
}
</script>
<style scoped>
.card {
  margin-top: 5px;
  margin-bottom: 10px;
}
</style>