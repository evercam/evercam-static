<template>
    <!-- Search Input -->
    <input
      v-model="searchInput"
      @input="onInputChange"
      @blur="onInputBlur"
      placeholder="Search..."
      class="form-control"
    />
  </template>
  
  <script>
  import debounce from 'lodash/debounce'
  
  export default {
    props: {
      search: {
        type: Function,
        required: true,
      },
    },
    data: () => ({
      searchInput: '',
      suggestions: [],
    }),
    methods: {
      onInputChange: debounce(async function () {
        this.suggestions = await this.search(this.searchInput)
      }, 300),
      onInputBlur() {
        setTimeout(() => (this.suggestions = []), 300)
      },
    },
  }
  </script>