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
          <!-- New rule form button -->
          <button type="button" class="mb-5" data-bs-toggle="modal" data-bs-target="#newCombatModalEntry">
            New Entry
          </button>

          <!-- #region: Collapsible rules description -->
          <div class="wrap-collapsible">
            <input id="collapsible" class="toggle" type="checkbox">
            <label for="collapsible" class="lbl-toggle">Rule Title</label>
            <div class="collapsible-content">
              <div class="content-inner">
                <p>
                  Description of rule goes here.
                </p>
                <br>

                <div class="d-flex justify-content-between">
                  <button class="selectable p-1">
                    Delete Rule
                  </button>
                  <button class="selectable p-1">
                    Edit Rule
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- #endregion -->

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







<style scoped lang="scss">
input[type='checkbox'] {
  display: none;
}

.lbl-toggle {
  display: block;

  font-weight: bold;
  font-family: monospace;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;

  padding: 1rem;

  color: #131330;
  background: #aba1b0;

  cursor: pointer;

  border-radius: 7px;
  transition: all 0.25s ease-out;
}

.lbl-toggle:hover {
  color: #353148;
}

.lbl-toggle::before {
  content: ' ';
  display: inline-block;

  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;

  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);

  transition: transform .2s ease-out;
}

.collapsible-content .content-inner {
  background: rgba(67, 47, 156, 0.2);
  border-bottom: 1px solid rgba(24, 19, 68, 0.45);

  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: .5rem 1rem;
}

.collapsible-content {
  max-height: 0px;
  overflow: hidden;

  transition: max-height .25s ease-in-out;
}

.toggle:checked+.lbl-toggle+.collapsible-content {
  max-height: 100vh;
}

.toggle:checked+.lbl-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.toggle:checked+.lbl-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>