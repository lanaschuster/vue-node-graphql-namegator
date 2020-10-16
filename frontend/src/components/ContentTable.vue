<template>
  <div>
    <h6 class="is-6">{{ title }} <span class="tag is-info">{{ quantity }}</span></h6>
    <div class="card">
      <div class="card-content">
        <table class="table is-fullwidth is-hoverable">
          <tr v-for="(item, index) in items" :key="index">
            <td>{{ (item.name) ? item.name : item }}</td>
            <td v-if="hasDeleteButton" class="has-text-right">
              <button
                class="button is-info is-right"
                @click="$emit('remove-item', index)">
                <span class="icon">
                  <i class="fa fa-trash"></i>
                </span>
              </button>
            </td>
            <td v-if="hasPurchaseButton" class="has-text-right">
              <button
                class="button is-info is-right"
                @click="$emit('buy-item', index)">
                <span class="icon">
                  <i class="fa fa-shopping-cart"></i>
                </span>
              </button>
            </td>
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
    hasDeleteButton: {
      type: Boolean,
      default: false
    },
    hasPurchaseButton: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
.card {
  margin-top: 5px;
  margin-bottom: 10px;
}
</style>