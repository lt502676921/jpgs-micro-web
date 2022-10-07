import { ref } from 'vue'

export const headerStatus = ref(true)

export const changeHeaderStatus = type => (headerStatus.value = type)
