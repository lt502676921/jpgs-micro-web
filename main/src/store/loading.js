import { ref } from 'vue'

export let loadingStatus = ref(true)

export const changeLoading = type => (loadingStatus.value = type)
