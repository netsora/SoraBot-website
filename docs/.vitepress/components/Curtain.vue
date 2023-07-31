<!--
 Author: I Love Study <1450069615@qq.com>
 Co-Author: Redlnn <w731347477@gmail.com>
-->

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Curtain',
  props: {
    title: {
      type: String,
      default: '你知道的太多了',
    },
  },
})
</script>

<template>
  <span :title="title" class="heimu">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
.heimu {
  color: #10B981;
  border-radius: 4px;
  padding: 1.5px 4px;
  margin: 0 2px;
  text-shadow: none;
  background-color: #10B981;
  transition: color 0.13s linear, background-color 0.13s linear;

  html.dark & {
    background-color: #10B981;
    color: #10B981;
  }

  &:deep() {
    code {
      padding: 0.1rem 0.25rem;
      background-color: #10B981;
      color: #10B981;
      html.dark & {
        background-color: #10B981;
        color: #10B981;
      }
    }
    a {
      color: #10B981;
      html.dark & {
        color: #10B981;
      }
    }
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--vp-c-bg) !important;

    &:deep() code {
      background-color: var(--vp-c-bg) !important;
      color: #10B981 !important;
    }

    html.dark &:deep() a,
    &:deep() a {
      color: var(--vp-c-bg);
      text-decoration: underline;
    }
  }
}
</style>
