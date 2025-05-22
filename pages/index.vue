<template>
  <div id="page">
    <Section class="hero_landing">
      <div class="hero_landing_text">
        MANKIND IS <span class="red">DEAD</span><br>
        <span class="red">BLOOD</span> IS FUEL<br>
        HELL IS <span class="red">FULL</span>
      </div>
    </Section>
    <div id="content_container">
      <UltraKillSection id="section_1" style="--bgcol: #970202ff;">
        <div class="left">
          <video src="/videos/trailer.mp4" controls></video>
        </div>
        <div class="right"><span style="font-size: 3em;">
            <UltraKillLogo />
          </span>Ultrakill is a 2020 fast-paced first person shooter developed by Hakita 'Arsi' Pitala and published by
          New Blood Interactive. Humanity has gone extinct, the only beings left on earth are machines fueled by blood.
          As
          blood has run out on the surface, machines venture deep into hell to find more. You take the role as V1, an
          advanced combat machine developed for war as it ventures to find blood. Hell itself is filled with the undead,
          demons, and other machines. Strategy and movement is key to stay alive, <b>for hell is full, and blood is
            fuel.</b>
        </div>
      </UltraKillSection>
      <UltraKillSection id="section_2" style="--bgcol: #970202ff;">
        <div class="left">
          <span style="font-size: 3em;">
            <img src="~/assets/images/logo/logo_minimal.svg" style="height: 1em; vertical-align: bottom;">
          </span>
          Ultrasite is a fansite for fans of the overwhelmingly popular game. This site serves as a space for fans to
          talk
          about the game, discuss strategies, show achievements and clips, <s>as well as being a place to beg for Hakita
            to
            release layer 8 cmon its been 5 years we want to p-rank everything now</s>. Ultrasite also offers valuable
          links
          and guides for new players, as well as a forum for discussions and conversations.
        </div>
        <div class="right">
          <img src="~/assets/images/thumb/ultrasite.jpg" style="height: 12em;">
        </div>
      </UltraKillSection>
    </div>
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
  from {
    color: #fff;
  }

  30% {
    color: #fff;
  }

  100% {
    color: #f00;
  }
}

#page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#content_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;

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
}
</style>