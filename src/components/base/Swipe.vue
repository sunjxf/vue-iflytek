<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="http://qxbfile.iflytek.com:8000/group1/M00/01/4D/rBBkIFrO-YaAPaceAAGfU7H9_90545.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://qxbfile.iflytek.com:8000/group1/M00/00/F8/rBBkIFqzJmaATCyfAAD1JvCL03U642.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://qxbfile.iflytek.com:8000/group1/M00/00/E2/rBBkIFqiHiGAPKk5AAbcBv6mOdI369.jpg">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'name'

  }

</script>

<style scoped>
  img {
    height: 180px;
    width: 100%
  }

  .mint-swipe {
    height: 180px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

</style>
