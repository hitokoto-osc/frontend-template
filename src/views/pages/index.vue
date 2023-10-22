<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div class="home">
    <div class="logo">
      <img src="/favicon.svg" alt="logo" />
    </div>
    <p class="name">
      <a rel="noreferrer" href="https://github.com/hiokoto-osc" target="_blank">
        @hitokoto-osc
      </a>
    </p>
    <p class="desc">
      <em class="desc">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />

    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button class="btn" :disabled="!name" @click="go">
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  @apply w-90% md:w-50% lg:w-30% xl:w-20% 2xl:w-15% mx-auto;
  @apply text-base text-gray-700 dark:text-gray-200 grid gap-5;

  .logo {
    @apply h-[150px] flex items-center justify-center;

    img {
      @apply w-[100px] h-[100px];
    }
  }

  .name {
    @apply text-3xl font-bold;
  }

  .desc {
    @apply text-lg font-semibold;
  }

  #input {
    @apply px-4 py-4 w-full;
    @apply text-center bg-transparent rounded-2xl border-1 border-gray-200 dark:border-gray-700;
    @apply outline-none active:outline-none;
  }

  .btn {
    @apply px-6 py-2 rounded-2xl bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-lg font-medium;
    @apply disabled:opacity-50 disabled:cursor-not-allowed;
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
