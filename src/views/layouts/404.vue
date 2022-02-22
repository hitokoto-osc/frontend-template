<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div class="not-found">
    <div class="full-height flex-center outer">
      <div class="flex-center position-ref">
        <div class="code">404</div>
        <div class="message" style="padding: 10px"><router-view /></div>
      </div>
      <div>
        <button class="back-button" @click="router.back()">
          {{ t('button.back') }}
        </button>
      </div>
    </div>
  </div>
</template>
