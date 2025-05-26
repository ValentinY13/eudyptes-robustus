<script setup lang="ts">
  useRevealTransitionItems()
</script>

<template>
  <div class="home-container">
    <div class="left-container">
        <h1 class="reveal reveal-left-300">Gorfou <br> des Snares</h1>
        <h2 class="reveal reveal-left-400">Eudyptes robustus</h2>

        <p class="reveal reveal-left-500">GILSON Anaïs</p>
        <nuxt-link class="btn reveal reveal-left-600" to="/eudyptes-robustus">
          SUIVI DES MANCHOTS
          <i class="icon arrow"></i>
        </nuxt-link>

        <div class="pingu-container">
          <div class="pingu-card reveal reveal-bottom-300">
            <img src="/home/Georges_no_name.png" alt="Georges"/>
            Georges
          </div>
          <div class="pingu-card reveal reveal-bottom-400">
            <img src="/home/Hubert_no_name.png" alt="Hubert"/>
            Hubert
          </div>
          <div class="pingu-card reveal reveal-bottom-500">
            <img src="/home/Bob_no_name.png" alt="Bob"/>
            Bob
          </div>
        </div>
    </div>
    <img src="/home/Eudyptes_robustus.jpg" class="reveal reveal-fade-200" alt="Eudyptes robustus" />
  </div>
</template>

<style scoped>
  .home-container {
    overflow: hidden;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: stretch;
    height: 100dvh;
  }

  .banner img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  .left-container {
    padding-top: 76px;
    padding-left: 76px;
  }

  h1 {
    font-size: 4.5rem;
    font-weight: normal;
    margin: 0 0 24px;
  }

  h2 {
    margin: 0;
    font-weight: normal;
  }

  p {
    margin: 58px 0;
    font-weight: bold;
    font-size: 24px;
  }

  .pingu-container {
    display: flex;
    margin-top: 36px;
    justify-content: space-evenly;

  }

  .icon {
    display: inline-block;
  }

  .arrow {
    mask: url("/arrow.svg");
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: contain;
    width: 1em;
    height: 1em;

    background-color: black;
  }

  .pingu-card {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 1.25rem;
  }

  .pingu-card img {
    width: 100px;
    height: 75px;
    transition: all 0.4s ease;
    transform: translateY(0);
  }

  .pingu-card img:hover {
    transform: translateY(-0.5rem);
  }
</style>