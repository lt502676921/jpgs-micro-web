import { ref } from 'vue'

export const navStatus = ref(true)

export const changeNavStatus = type => (navStatus.value = type)
