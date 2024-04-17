<template>
    <div>
      <button @mouseover="incrementCount">Hovered {{ count }} times</button>
    </div>
  </template>
  <script>
  import CounterMixin from '../mixins/counter'
  export default{
      name: 'Hover',
      mixins: [CounterMixin]
  }
  </script>
  <style>
  </style>