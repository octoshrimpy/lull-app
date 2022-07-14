import { writable } from "svelte/store"
// import Sounds from '@/pages/Sounds.svelte'


export const page = writable()

// @todo eventually will want to group these by categories
export const sounds = writable([
  {
    name: "rain",
    icon: "nf-weather-rain",
    engine: {},
    volume: 0.0,
    enabled: false
  },
  {
    name: "birds",
    icon: "nf-fa-twitter",
    engine: {},
    volume: 0.0,
    enabled: false
  },
  {
    name: "train",
    icon: "nf-weather-train",
    engine: {},
    volume: 0.0,
    enabled: false
  },
  {
    name: "wind",
    icon: "nf-mdi-weather_windy",
    engine: {},
    volume: 0.0,
    enabled: false
  },
  {
    name: "coffee shop",
    icon: "nf-fa-coffee",
    engine: {},
    volume: 0.0,
    enabled: false
  },
  {
    name: "ocean",
    icon: "nf-mdi-beach",
    engine: {},
    volume: 0.0,
    enabled: false
  }
])

export const album = writable([
  {
    name: "rainy bus ride",
    sounds: [
      {
        name: "train",
        volume: 0.0,
        enabled: true
      },
      {
        name: "rain",
        volume: 0.0,
        enabled: true
      },
      {
        name: "wind",
        volume: 0.0,
        enabled: true
      }
    ],
    icon: "nf-mdi-bus_side",
    masterVol: 0.0
  },
  {
    name: "coffee by the beach",
    sounds: [
      {
        name: "ocean",
        volume: 0.0,
        enabled: true
      },
      {
        name: "coffee shop",
        volume: 0.0,
        enabled: true
      },
      {
        name: "birds",
        volume: 0.0,
        enabled: true
      }
    ],
    icon: "nf-mdi-sunglasses",
    masterVol: 0.0
  }
])
