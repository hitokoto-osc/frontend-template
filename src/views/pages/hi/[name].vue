<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const route = useRoute('/hi/[name]')
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  if (route.params.name) {
    user.setNewName(route.params.name)
  }
})

const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-pedestrian inline-block />
    </div>
    <p>
      {{ t('intro.hi', { name: route.params.name }) }}
    </p>

    <p text-sm opacity-75>
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <div mt-4 text-sm>
        <span opacity-75>{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <RouterLink :to="`/hi/${otherName}`" replace>
              {{ otherName }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </template>

    <div>
      <button class="btn mt-5" @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  @apply px-6 py-2 rounded-2xl bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-lg font-medium;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}
</style>
