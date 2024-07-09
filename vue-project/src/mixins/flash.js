import Swal from 'sweetalert2'

export default {
  methods: {
    flashMessage(message) {
      return Swal.fire({
        title: 'Congratulations!',
        text: message,
        icon: 'success'
      })
    }
  }
}
