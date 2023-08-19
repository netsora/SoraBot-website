<!-- 修改自 Vitepress -->

<script setup lang="ts">
defineProps<{
  text?: string
  type?: 'new' | 'update' | 'info' | 'tip' | 'warning' | 'danger' | 'private' | 'owner' | 'helper' | 'telegram'
}>()
</script>

<template>
  <span class="VPBadge" :class="type ?? 'tip'">
    <slot>{{ text }}</slot>
  </span>
</template>

<style scoped>
.VPBadge {
  display: inline-block;
  margin-left: 2px;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 0 10px;
  line-height: 22px;
  font-size: 12px;
  font-weight: 600;
  transform: translateY(-2px);
}

.vp-doc h1>.VPBadge {
  margin-top: 4px;
  vertical-align: top;
}

.vp-doc h2>.VPBadge {
  margin-top: 3px;
  line-height: 20px;
  padding: 0 8px;
  vertical-align: top;
}

.vp-doc h3>.VPBadge {
  line-height: 20px;
  vertical-align: middle;
}

.vp-doc h4>.VPBadge,
.vp-doc h5>.VPBadge,
.vp-doc h6>.VPBadge {
  vertical-align: middle;
  line-height: 18px;
}

.VPBadge.info {
  border-color: var(--vp-badge-info-border);
  color: var(--vp-badge-info-text);
  background-color: var(--vp-badge-info-bg);
}

.VPBadge.tip {
  border-color: var(--vp-badge-tip-border);
  color: var(--vp-badge-tip-text);
  background-color: var(--vp-badge-tip-bg);
}

.VPBadge.warning {
  border-color: var(--vp-badge-warning-border);
  color: var(--vp-badge-warning-text);
  background-color: var(--vp-badge-warning-bg);
}

.VPBadge.danger {
  border-color: var(--vp-badge-danger-border);
  color: var(--vp-badge-danger-text);
  background-color: var(--vp-badge-danger-bg);
}

.VPBadge.private {
  border-color: var(--vp-badge-private-border);
  color: var(--vp-badge-private-text);
  background-color: var(--vp-badge-private-bg);
}

.VPBadge.owner {
  border-color: var(--vp-badge-owner-border);
  color: var(--vp-badge-owner-text);
  background-color: var(--vp-badge-owner-bg);
}

.VPBadge.helper {
  border-color: var(--vp-badge-helper-border);
  color: var(--vp-badge-helper-text);
  background-color: var(--vp-badge-helper-bg);
}

.VPBadge.telegram {
  border-color: var(--vp-badge-telegram-border);
  color: var(--vp-badge-telegram-text);
  background-color: var(--vp-badge-telegram-bg);
}

.VPBadge.new {
  border-color: var(--vp-badge-new-border);
  color: var(--vp-badge-new-text);
  background-color: var(--vp-badge-new-bg);
}
.VPBadge.update {
  border-color: var(--vp-badge-update-border);
  color: var(--vp-badge-update-text);
  background-color: var(--vp-badge-update-bg);
}

</style>
