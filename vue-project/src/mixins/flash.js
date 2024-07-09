import Swal from 'sweetalert2'

export default {
  methods: {
    flashMessage(title, message, icon = 'success') {
      return Swal.fire({
        title: title,
        text: message,
        icon: icon
      })
    }
  }
}
