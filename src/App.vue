<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Header from '@/components/base/Header'
  import Tabbar from '@/components/base/Tabbar'
  export default {
    name: 'App',
    components: {
      Header,
      Tabbar
    }
  }

</script>

<style>
body {
    margin: 0px;
}
</style>
