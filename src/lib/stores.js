import { writable } from "svelte/store"
import Sounds from '@/pages/Sounds.svelte'

let _sounds = [
  {
    name: "rain",
    icon: "nf-weather-rain",
    engine: {},
    volume: 0.5,
    enabled: true
  },
  {
    name: "birds",
    icon: "nf-fa-twitter",
    engine: {},
    volume: 0.2,
    enabled: false
  }
]


export const page = writable(Sounds)
export const count = writable(0)
export const sounds = writable(_sounds)
