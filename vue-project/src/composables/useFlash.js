import Swal from 'sweetalert2'

export function useFlash() {
  function flashMessage(title, message, icon = 'success') {
    return Swal.fire({
      title: title,
      text: message,
      icon: icon
    })
  }

  return { flashMessage }
}
