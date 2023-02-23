<template>
  <div class="modal fade" id="newCombatModalEntry" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">

        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Entry title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <!-- FIXME: can't type into inputs without holding left click on input -->
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="rule name">
            <label for="floatingInput">Rule Title</label>
          </div>

          <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Description</label>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save</button>
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