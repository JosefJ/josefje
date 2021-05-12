<template>
  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container">
    <div class="row">
      <div class="one-half culumn" style="margin-top: 25%">
        <div class="nav">
          <a href="/#/">
            <img id="logo" src="../assets/backs.png">
            <span id="backNav"> BACK </span>
          </a>
        </div>
<!--        <h1> ../</h1>-->
        <h2> {{ context.headline }} </h2>
        <p>
          {{ context.description }}
        </p>
      </div>
      <div class="one-half" style="margin-top: 5%" v-bind:key="item" v-for="item in context.items">
        <h4 v-if="item.link"> <a :href="item.link" target="_blank"> {{ item.name }} </a> </h4>
        <h4 v-else> {{ item.name }} </h4>
        <p> {{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Context',
  data () {
    return {

    }
  },
  computed: {
    context () {
      return this.$attrs
    }
  }
}
</script>

<style scoped>
#logo {
  height: 54px;
  margin: 12px 0px;
  opacity: 0.1;
  -webkit-animation: pulse 3s infinite ease-in-out;
  -o-animation: pulse 3s infinite ease-in-out;
  -ms-animation: pulse 3s infinite ease-in-out;
  -moz-animation: pulse 3s infinite ease-in-out;
  animation: pulse 3s infinite ease-in-out;
}

#backNav{
  position: absolute;
  top: 4%;
  -webkit-animation: pulse 3s infinite ease-in-out;
  -o-animation: pulse 3s infinite ease-in-out;
  -ms-animation: pulse 3s infinite ease-in-out;
  -moz-animation: pulse 3s infinite ease-in-out;
  animation: pulse 3s infinite ease-in-out;
}

.nav a {
  color: #000;
}

h1 {
  font-size: 72px;
  font-family: Roboto;
  letter-spacing: 16px;
  font-weight: 600;
}

h2 {
  opacity: 1;
}

h4 > a {
  color: #000;
  text-decoration: none;
  border-bottom: 2px dotted;
}

h4 > a::after {
  background-image: url('../assets/backs.png');
  background-size: 10px 10px;
  content: "";
  display: inline-block;
  height: 10px;
  width: 10px;
  position: absolute;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
  border-bottom: 0;
}

@-webkit-keyframes pulse {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
}

@keyframes pulse {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}

</style>
