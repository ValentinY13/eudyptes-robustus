<script setup lang="ts">
//@ts-ignore
import { Runtime, Inspector } from "@observablehq/runtime"
//@ts-ignore
import define from "c9988bd63d36a2be"
import * as d3 from "d3"

const selector = ref(null)
const selectValue = ref(null)
const map2 = ref(null)
const grapheDist = ref(null)
const mapDensity = ref(null)
const urlImg = ref(null)
const isLoading = ref(true)

useRevealTransitionItems()

onMounted(async () => {
  await nextTick()

  const response = await fetch("/donnees_nettoyees.csv")
  const text = await response.text()
  const rows = d3.csvParse(text)

  const polarData = await fetch("/Polar.json")
      .then(res => res.json())
      .then(d => d.coordinates[0]);

  const runtime = new Runtime()
  const main = runtime.module(define, name => {
    if (name === "viewof penguinSelector") return Inspector.into(selector.value)()
    if (name === "Map2") return Inspector.into(map2.value)()
    if (name === "graphdist") return Inspector.into(grapheDist.value)()
    if (name === "Mapdensity") return Inspector.into(mapDensity.value)()
    if (name === "penguinSelector") {
      return {
        fulfilled: value => {
          updateImage(value);
        }
      };
    }
  })

  main.redefine("data", rows)
  main.redefine("pf", polarData)



  // T13 male = george, T14 male = Bob, T32 = hubert
  function updateImage(value) {
    const imageMap = {
      "T13 male": "/georges.png",
      "T14male": "/bob.png",
      "T32male": "/hubert.png",
      ALL: "/all+penguins.png"
    };

    const imageUrl = imageMap[value] || "/images/default.jpg";

    const img = document.getElementById("penguin-img");
    if (img) {
      img.src = imageUrl;
      img.alt = value;
    }
  }

})

setTimeout(() => {
  isLoading.value = false
}, 300)

</script>

<template class="bg">

  <div ref="div" class="container">
        <h1 class="main-title reveal reveal-bottom-300">Suivi de 3 Gorfous des Snares (Eudyptes robustus) en période d'incubarion</h1>

        <div class="stats-container">
          <nuxt-link class="btn reveal reveal-left-300" to="/" title="Retour">
            <i class="icon arrow"></i>
            RETOUR
          </nuxt-link>
          <div class="left reveal reveal-left-400">
            <div class="select-container">
              <div id="selector" ref="selector" class=""></div>
              <img id="penguin-img" class="pingu-img" style="max-height: 100px;" />
            </div>
            <div ref="map2" class=""></div>
          </div>

          <div class="map-density-container reveal reveal-right-400">
            <p class="map-density-title">Densité du nombre de points GPS</p>
            <div ref="mapDensity" class="map-density"></div>
          </div>

          <div class="bottom">
            <div ref="grapheDist" class="graph-dist"></div>
            <p class="text-density">Dans ce projet réalisé sur ObservableHQ, j’ai exploré les déplacements de manchots à partir de données GPS, à travers des visualisations incluant une carte de densité, une carte animée des positions et un graphique des distances journalières. J’ai également tenté de représenter le temps passé en mer ou sur terre, sans aboutir, mais les essais sont consultables <nuxt-link to="https://observablehq.com/d/c9988bd63d36a2be" external target="_blank">ici</nuxt-link>.</p>
          </div>
        </div>
      </div>

</template>

<style scoped>

.loading-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}

  .bg {
    background-color: #edeced;
  }

  .container {
    padding: 32px 48px;
  }

  .main-title {
    text-align: center;
    font-weight: normal;
    margin: 0;
  }

  .stats-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 48px;
    gap: 24px;
  }

  .left {
    background-color: white;
    padding: 12px;
    position: relative;
  }

  .select-container {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    height: fit-content;
  }

  .pingu-img {
    position: absolute;
    right: 0;
    top: -40px;
  }

  ::v-deep(.graph-dist div svg) {
    max-height: 25rem;
    width: 100%;
  }

  .bottom-left {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .text-density {
    margin: 0;
    text-align: justify;
  }

  .map-density-container {
    align-self: end;
    background-color: white;
  }

  ::v-deep(.map-density div div svg) {
    width: 100%;
  }

  ::v-deep(.map-density div div div) {
    margin-left: 1rem;
  }


  ::v-deep(.map-density div div div button) {
    width: 32px;
    height: 32px;
  }


  .map-density-title {
    font-size: 24px;
    text-align: center;
    margin: 0 0;
    padding: 24px 0;
    background-color: white;
  }

  .bottom {
    grid-column: 1/3;

    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
  }

  .btn .arrow {
    rotate: 180deg;
  }

  .btn {
    grid-column: 1/3;
  }
</style>