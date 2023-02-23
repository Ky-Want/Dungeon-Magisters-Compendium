<template>
  <div class="modal fade modal-fullscreen" id="combatModal" tabindex="-1" aria-labelledby="combatModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="combatModalLabel">Combat Rules</h1>
          <button type="button" class="btn-close elevation-3" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <!-- Button trigger modal -->
          <button type="button" class="" data-bs-toggle="modal" data-bs-target="#newCombatModalEntry">
            New Entry
          </button>

          <!-- TODO: add an edit function for pre-existing entries -->
          <div class="mt-5 mb-3 p-2 selectable">
            Title of entry goes here, when clicked it should expand into the full description, and shrink when clicked
            again.
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Combat form will be used to make additional entries, which will be included in the Combat modal -->
  <CombatForm />
</template>







<script>
import CombatForm from "../RulesForms/CombatForm.vue";

export default {
  setup() {
    return {};
  },

  component: {
    CombatForm
  },
  components: { CombatForm }
}
</script>







<style scoped lang="scss"></style>