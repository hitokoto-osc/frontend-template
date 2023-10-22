<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div class="not-found">
    <div class="main">
      <div class="tips">
        <div class="code">404</div>
        <div class="message" style="padding: 10px"><router-view /></div>
      </div>
      <div>
        <button class="button" @click="router.back()">
          {{ t('button.back') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  @apply h-screen flex items-center justify-center;
  @apply text-dark-900;

  .main {
    @apply w-[90%] md:w-[50%] lg:w-[30%] xl:w-[20%] 2xl:w-[15%] flex flex-col items-center justify-center;
    @apply gap-10;

    .tips {
      @apply flex flex-col items-center justify-center gap-5;

      .code {
        @apply text-9xl font-bold;
      }

      .message {
        @apply text-2xl font-semibold;
      }
    }

    .button {
      @apply px-5 py-2 rounded-2xl bg-dark-900 text-white text-lg font-medium;
    }
  }
}
</style>
