import { ref, watch } from 'vue'
export function useLocalStorage(key, defaultValue = null) {
  let storedValue = readFromLocalStorage()
  let reactiveValue = ref('')

  if (storedValue) {
    reactiveValue = ref(storedValue)
  } else {
    reactiveValue = ref(defaultValue)
    writeToLocalStorage()
  }

  watch(reactiveValue, writeToLocalStorage)

  function readFromLocalStorage() {
    return localStorage.getItem(key)
  }

  function writeToLocalStorage() {
    if (reactiveValue.value === null || reactiveValue.value === '') {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, reactiveValue.value)
    }
  }

  return reactiveValue
}
