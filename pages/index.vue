<template>
  <div>
    <Section class="hero_landing">
      <div class="hero_landing_text">
        MANKIND IS <span class="red">DEAD</span><br>
        <span class="red">BLOOD</span> IS FUEL<br>
        HELL IS <span class="red">FULL</span>
      </div>
    </Section>
    <UltraKillSection id="section_1" style="--bgcol: #970202ff;">
      <div class="left">
        <video src="/videos/trailer.mp4" controls></video>
      </div>
      <div class="right"><span style="font-size: 3em;">
          <UltraKillLogo />
        </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex necessitatibus voluptatibus culpa velit
        voluptate dignissimos inventore, voluptatem esse quod consectetur nobis sint quaerat ut quis illum modi et eum
        nam aliquid quasi veritatis unde odio. Quidem reprehenderit ducimus, iusto laboriosam, eligendi beatae et rem
        nemo natus vero dolores tempora voluptatum amet illum necessitatibus! Numquam omnis veniam dolorum error
        accusantium sint aut praesentium exercitationem ex, optio architecto ut pariatur doloribus. Voluptatem ea iste
        deleniti! Iste quae, architecto corporis facilis, illo exercitationem voluptatibus sint sit rem odio magnam
        nostrum maiores nesciunt facere explicabo quisquam, minima tempore eligendi natus dicta porro maxime deserunt.
      </div>
    </UltraKillSection>
    <UltraKillSection id="section_2" style="--bgcol: #970202ff;">
      <div class="left">
        <span style="font-size: 3em;">
          <img src="~/assets/images/logo/logo_minimal.svg" style="height: 1em; vertical-align: bottom;">
        </span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum dolorem eius, numquam dolorum
        necessitatibus minima placeat illum ex, eveniet reprehenderit deleniti, vitae alias rem. Aut labore, consectetur
        veniam molestiae quo repellat, obcaecati a quos itaque iusto blanditiis nesciunt fugiat commodi? Sapiente ex
        impedit voluptatibus non soluta aut a, blanditiis ea eaque fuga maxime magnam minima vitae similique ratione,
        accusantium, error perferendis sed eos doloribus! Ea fuga fugit earum fugiat laborum ad eaque. Adipisci illo
        nulla
        neque inventore aut temporibus quos consectetur porro expedita iure cum, blanditiis totam ipsum non praesentium,
        obcaecati nihil, minus maxime modi? Reprehenderit, dicta. Delectus, debitis!
      </div>
      <div class="right">
        <img src="~/assets/images/thumb/ultrasite.jpg" style="height: 12em;">
      </div>
    </UltraKillSection>
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
  font-size: 4em;

  .hero_landing_text {
    .red {
      animation: hero_landing_red_entry 3s cubic-bezier(0.22, 1, 0.36, 1);
      color: #f00;
    }

    animation: hero_landing_text_entry 5s cubic-bezier(0.16, 1, 0.3, 1);
  }
}

@keyframes hero_landing_text_entry {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes hero_landing_red_entry {
  from { color: #fff; }
  30% { color: #fff; }
  100% { color: #f00; }
}

#section_1 {
  display: flex;
  text-align: left;
  flex-direction: row;

  .left {
    padding: 0.5em;

    video {
      height: 12em;
    }
  }

  .right {
    padding: 0.5em;
  }
}

#section_2 {
  display: flex;
  text-align: left;
  flex-direction: row;

  .left {
    padding: 0.5em;
    flex-grow: 1;
  }

  .right {
    padding: 0.5em;
  }
}
</style>