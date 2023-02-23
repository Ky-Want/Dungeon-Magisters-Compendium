<template>
  <div class="modal fade modal-fullscreen" id="actionsModal" tabindex="-1" aria-labelledby="actionsModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="actionsModalLabel">Actions Rules</h1>
          <button type="button" class="btn-close elevation-3" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <div>
            <button>New Entry</button>
          </div>

          <div class="mt-5 mb-3 p-2 selectable">
            Title of entry goes here, when clicked modal of full description should pop up.
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>







<script>
export default {

  setup() {

    return {

    }
  }
}
</script>







<style scoped lang="scss"></style>