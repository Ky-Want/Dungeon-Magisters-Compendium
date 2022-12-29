<template>

  <div class="d-flex gap-5 flex-direction-column mt-5 align-items-center">
    <div class="bg-primary combat-div align-items-center mx-3 selectable btn" data-bs-toggle="modal"
      data-bs-target="#combatModal">
      <div class="fs-4">
        <strong>Combat</strong>
      </div>
    </div>



    <div class="bg-primary combat-div align-items-center mx-3 selectable btn">
      <div class="fs-4">
        <strong>Stats</strong>
      </div>
    </div>



    <div class="bg-primary combat-div align-items-center mx-3 selectable btn">
      <div class="fs-4">
        <strong>Actions</strong>
      </div>
    </div>



    <div class="bg-primary combat-div align-items-center mx-3 selectable btn">
      <div class="fs-4">
        <strong>Environment</strong>
      </div>
    </div>



    <div class="bg-primary combat-div align-items-center mx-3 selectable btn">
      <div class="fs-4">
        <strong>Movement</strong>
      </div>
    </div>



    <div class="bg-primary combat-div align-items-center mx-3 selectable btn">
      <div class="fs-4">
        <strong>Miscellaneous</strong>
      </div>
    </div>


    <CombatModal />
  </div>
</template>







<script>
import CombatModal from "../components/RulesModals/CombatModal.vue";

export default {
  setup() {

    return {
    }
  },
  components: {
    CombatModal
  },
}
</script>







<style scoped lang="scss">
.combat-div {
  width: 50rem;
  height: 3rem;
  border-radius: .2rem;
}

.flex-direction-column {
  flex-direction: column;
}

.btn {
  transition: transform 300ms ease-in-out,
    opacity 250ms linear;
}

.btn:hover,
.btn:focus {
  transform: scale(1.1);
}
</style>