<template>

  <body class="home-bg">

    <div class="container">
      <!-- World Building Card (home page) -->
      <div class="d-flex justify-content-between mb-3">
        <div class="card mt-5 mb-3" style="width: 20rem;">

          <router-link :to="{ name: 'WorldBuilding' }">
            <img src="https://i.pinimg.com/564x/d4/35/89/d435898a09be8844a4217c2e5690f617.jpg" class="card-img-top btn">
          </router-link>

          <div class="card-body">
            <p class="card-text justify-content-center d-flex">
              <em>World building</em>
            </p>
          </div>
        </div>





        <!-- House Rules Card (home page) -->
        <div class="card mt-5 mb-3" style="width: 20rem;">

          <router-link :to="{ name: 'HouseRules' }">
            <img src="https://i.pinimg.com/564x/da/dd/27/dadd275d5f593ca544d63f65af8cef9e.jpg" class="card-img-top btn">
          </router-link>

          <div class="card-body">
            <p class="card-text justify-content-center d-flex">
              <em>House rules</em>
            </p>
          </div>
        </div>
      </div>





      <!-- Campaigns Card (home page) -->
      <div class="d-flex justify-content-between">
        <div class="card mt-5 mb-3" style="width: 20rem;">

          <router-link :to="{ name: 'Campaigns' }">
            <img src="https://i.pinimg.com/564x/08/ac/86/08ac865251cde1d84695097defa16cf4.jpg" class="card-img-top btn">
          </router-link>

          <div class="card-body">
            <p class="card-text justify-content-center d-flex">
              <em>Campaigns</em>
            </p>
          </div>
        </div>





        <!-- Social Card (home page) -->
        <div class="card mt-5 mb-3" style="width: 20rem;">

          <router-link :to="{ name: 'Social' }">
            <img src="https://i.pinimg.com/564x/07/1b/e8/071be870c2aa396291055c1c9cf0229b.jpg" class="card-img-top btn">
          </router-link>

          <div class="card-body">
            <p class="card-text justify-content-center d-flex">
              <em>Social</em>
            </p>
          </div>
        </div>
      </div>
    </div>

  </body>
</template>





<script>
export default {
  setup() {
    return {}
  }
}
</script>





<style scoped lang="scss">
body {
  min-height: 100vh;
  overscroll-behavior: none;
  background-image: url("https://i.pinimg.com/736x/d1/d1/0a/d1d10a5c78823685943f9097b8a150ed.jpg");
  background-color: grey;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.btn {
  transition: transform 290ms ease-in-out,
    opacity 250ms linear;
}

.btn:hover,
.btn:focus {
  transform: scale(1.17);
}
</style>
