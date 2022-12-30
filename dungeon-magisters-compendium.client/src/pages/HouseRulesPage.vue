<template>

  <body class="d-flex align-items-center gap-5 flex-direction-column padding-top">

    <div class="bg-primary combat-div align-items-center mx-3 selectable btn com-bg" data-bs-toggle="modal"
      data-bs-target="#combatModal">
      <div class="fs-3">
        <strong class="text-grey black-outline">Combat</strong>
      </div>
    </div>



    <div class="bg-primary combat-div align-items-center mx-3 selectable btn stat-bg" data-bs-toggle="modal"
      data-bs-target="#statsModal">
      <div class="fs-3">
        <strong class="text-grey black-outline">Stats</strong>
      </div>
    </div>



    <div class="bg-primary combat-div align-items-center mx-3 selectable btn act-bg" data-bs-toggle="modal"
      data-bs-target="#actionsModal">
      <div class="fs-3">
        <strong class="text-grey black-outline">Actions</strong>
      </div>
    </div>



    <div class="bg-primary combat-div align-items-center mx-3 selectable btn env-bg" data-bs-toggle="modal"
      data-bs-target="#environmentModal">
      <div class="fs-3">
        <strong class="text-grey black-outline">Environment</strong>
      </div>
    </div>



    <div class="bg-primary combat-div align-items-center mx-3 selectable btn mov-bg" data-bs-toggle="modal"
      data-bs-target="#movementModal">
      <div class="fs-3">
        <strong class="text-grey black-outline">Movement</strong>
      </div>
    </div>



    <div class="bg-primary combat-div align-items-center mx-3 selectable btn mis-bg" data-bs-toggle="modal"
      data-bs-target="#miscModal">
      <div class="fs-3">
        <strong class="text-grey black-outline">Miscellaneous</strong>
      </div>
    </div>


    <CombatModal />
    <StatsModal />
    <EnvironmentModal />
    <MiscModal />
    <MovementModal />
    <ActionsModal />
  </body>
</template>







<script>
import CombatModal from "../components/RulesModals/CombatModal.vue";
import StatsModal from "../components/RulesModals/StatsModal.vue";
import EnvironmentModal from "../components/RulesModals/EnvironmentModal.vue";
import MiscModal from "../components/RulesModals/MiscModal.vue";
import MovementModal from "../components/RulesModals/MovementModal.vue";
import ActionsModal from "../components/RulesModals/ActionsModal.vue";

export default {
  setup() {

    return {
    }
  },
  components: {
    CombatModal,
    StatsModal,
    EnvironmentModal,
    MiscModal,
    MovementModal,
    ActionsModal
  },
}
</script>







<style scoped lang="scss">
body {
  min-height: 90vh;
  overscroll-behavior: none;
  background-image: url("https://wallpapers.com/images/file/dnd-campfire-in-the-forest-8fxrd7afks7oag5l.jpg");
  background-color: rgb(2, 18, 9);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.padding-top {
  padding-top: 4.5rem;
}

.combat-div {
  width: 50rem;
  height: 3.5rem;
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
  transform: scale(1.25);
}

.black-outline {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

/*#region: Tab Background Images*/
.env-bg {
  background-image: url("https://i.pinimg.com/736x/4d/83/0d/4d830d8aa2e772ae2f2c512cbf53eb53.jpg");
}

.mis-bg {
  background-image: url("https://i.pinimg.com/564x/4e/fe/0b/4efe0b74b966a98c546486f3ddb52173.jpg");
}

.act-bg {
  background-image: url("https://i.pinimg.com/564x/19/54/28/195428fc00abc7ab76509ba1a32b5b8c.jpg");
}

.mov-bg {
  background-image: url("https://i.pinimg.com/564x/87/9c/91/879c9107a98e61b534c3ae4446452f29.jpg");
}

.stat-bg {
  background-image: url("https://i.pinimg.com/736x/d4/21/58/d421586411038497d44f9c268ef8a5a5.jpg");
}

.com-bg {
  background-image: url("https://i.pinimg.com/564x/97/69/16/97691622cecbaa7c9bf1b8087939a31d.jpg");
}

/*#endregion*/
</style>