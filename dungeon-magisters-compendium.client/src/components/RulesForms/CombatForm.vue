<template>
  <div class="modal fade" id="newCombatModalEntry" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">

        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Entry title</h1>
        </div>

        <div class="modal-body">
          <div class="mt-3 mb-2">
            Description of the rule goes here.
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            No max length since it's scrollable.
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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
  },
  components: {

  },
}
</script>







<style scoped lang="scss"></style>