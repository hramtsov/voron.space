<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" >
        <!-- @click.self="$emit('close')" -->
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
            <a class="modal-default-button" @click="$emit('close')">
              <i class="fal fa-times closeIcon"></i>
            </a>
          </div>

          <div class="modal-body">
            <slot name="body"> default body </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

// <script>
// export default {
//   props: {
//     car: {
//       required: true,
//     },
//   },
//   data() {
//     return {

//     };
//   },
// };
//
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 100%;
  max-width: 450px;
  margin: 0px auto;
  /* padding: 30px 50px; */
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33); */
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 15px 40px;
  background: #f4f4f4;
}

.modal-header h3 {
  margin-top: 0;
  color: #000;
  padding-top: 0;
  margin: 0;
}

.modal-body {
  /* margin: 20px 0; */
  padding: 25px 40px;
}

.modal-body label {
  font-size: 14px;
  margin-bottom: 5px !important;
}

/*
	* The following styles are auto-applied to elements with
	* transition="modal" when their visibility is toggled
	* by Vue.js.
	*
	* You can easily play with the modal transition by editing
	* these styles.
	*/

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.closeIcon {
  font-size: 24px;
}
</style>