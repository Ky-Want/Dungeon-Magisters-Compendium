<template>
  <div class="modal fade" id="newCombatModalEntry" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="combatFormBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="combatFormBackdropLabel">Entry title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Form parts Title and Description are listed below -->
        <div class="modal-body">
          <div class="mb-3">
            <label for="RuleTitleInput" class="form-label"></label>
            <input type="text" class="form-control" id="RuleTitleInput" placeholder="Rule Title">
          </div>
          <div class="mb-3">
            <label for="DescriptionInput" class="form-label"></label>
            <textarea class="form-control" id="DescriptionInput" rows="3" placeholder="Description"></textarea>
          </div>
        </div>

        <!-- Save button, should update the Combat Rules modal with new rule entry and close ONLY if an entry has been added -->
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
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