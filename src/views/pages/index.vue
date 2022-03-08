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
  <div>
    <div class="logo">
      <img src="/favicon.svg" alt="logo" />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/hiokoto-osc" target="_blank">
        @hitokoto-osc
      </a>
    </p>
    <p>
      <em class="desc">{{ t('intro.desc') }}</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button btn m-3 text-sm :disabled="!name" @click="go">
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.demo {
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
