<template>
  <div class="page">
    <Section class="hero_landing">
      MANKIND IS <span class="red">DEAD</span><br>
      <span class="red">BLOOD</span> IS FUEL<br>
      HELL IS <span class="red">FULL</span>
    </Section>
    <Section class="section_1">
      <div class="left">
        <video src="/videos/trailer.mp4" controls></video>
      </div>
      <div class="right">ajaja</div>
    </Section>
  </div>
</template>

<style lang="scss" scoped>
.hero_landing {
  margin-top: 0;
  background-image: url("~/assets/images/bg/dark.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 2em;

  .red {
    color: #f00;
  }
}

.section_1 {
  display: flex;
  text-align: left;
  * {
    display: flex;
    justify-content: center;
  }
  .left {
    video {
      height: 12em;
    }
  }
  .right {
    justify-content: flex-start;
    flex-grow: 1;
  }
}
</style>