<template>
  <!-- Primary Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container">
    <div class="row">
      <div class="one-half culumn" style="margin-top: 25%">
        <h1> Josef Je </h1>
        <h2> Simple website of a simple man </h2>
        <h4> Wasting my time on many things: </h4>
        <ul>
          <li> <router-link to="/build">building</router-link> funny stuff </li>
          <li> <router-link to="/organize">organizing</router-link> meetups & events </li>
          <li> <router-link to="/support">supporting</router-link> projects & communities </li>

        </ul>
      </div>
      <div class="" style="margin-top: 10%">
        <h4> Get in touch </h4>
        <p> <a href="mailto:me@josef.je?subject=Hey there!"> me@josef.je</a> </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
    }
  },
  methods: {
    transIn: () => {
      document.getElementById('bg').classList.add('trans')
      document.getElementById('transparency').classList.add('transText')
    },
    transOut: () => {
      document.getElementById('bg').classList.remove('trans')
      document.getElementById('transparency').classList.remove('transText')
    },
    transTog: () => {
      if (document.getElementById('bg').classList.length === 0) {
        document.getElementById('bg').classList.add('trans')
        document.getElementById('transparency').classList.add('transText')
      } else {
        document.getElementById('bg').classList.remove('trans')
        document.getElementById('transparency').classList.remove('transText')
      }
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 64px;
    margin: 12px 0px;
  }

  h2 {
    margin-bottom: 10vh;
  }

  #transparency:hover {
    color: #FFFFFF;
    cursor: none;
    opacity: 1;
  }

  .transText {
    color: #FFFFFF;
    cursor: none;
    opacity: 1;
  }

  #mandatory {
    color: #FFFFFF;
    opacity: 1;
  }

  h2 {
    opacity: 0.42;
  }
  a {
    color: #000;
    text-decoration: none;
    border-bottom: 2px dotted;
    font-weight: 600;
  }

  a:hover {
    color: #1EAEDB;
  }

  ul {
    list-style-type: none;
    margin: 0px 0px 20px 20px;
    padding: 0;
  }
</style>
