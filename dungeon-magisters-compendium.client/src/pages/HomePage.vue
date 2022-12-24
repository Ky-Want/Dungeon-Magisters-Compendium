<template>

  <body class="home-bg">

    <div class="container">
      <div class="d-flex justify-content-between mb-5">
        <div class="card mt-5" style="width: 18rem;">
          <img src="https://i.pinimg.com/564x/d4/35/89/d435898a09be8844a4217c2e5690f617.jpg"
            class="card-img-top selectable">
          <div class="card-body">
            <p class="card-text justify-content-center d-flex">
              World building
            </p>
          </div>
        </div>

        <div class="card mt-5" style="width: 18rem;">
          <img src="https://i.pinimg.com/564x/da/dd/27/dadd275d5f593ca544d63f65af8cef9e.jpg"
            class="card-img-top selectable">
          <div class="card-body">
            <p class="card-text justify-content-center d-flex">
              House rules
            </p>
          </div>
        </div>
      </div>





      <div class="d-flex justify-content-between">
        <div class="card mt-5 mb-5" style="width: 18rem;">
          <img src="https://i.pinimg.com/564x/08/ac/86/08ac865251cde1d84695097defa16cf4.jpg"
            class="card-img-top selectable">
          <div class="card-body">
            <p class="card-text justify-content-center d-flex">
              Campaigns
            </p>
          </div>
        </div>

        <div class="card mt-5 mb-5" style="width: 18rem;">
          <img src="https://i.pinimg.com/564x/07/1b/e8/071be870c2aa396291055c1c9cf0229b.jpg"
            class="card-img-top selectable">
          <div class="card-body">
            <p class="card-text justify-content-center d-flex">
              General
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
</style>
