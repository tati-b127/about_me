import './assets/main.css'

import { createApp } from 'vue'
import Vue3TouchEvents from 'vue3-touch-events'
import App from './App.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GSDevTools from 'gsap/all'
import Observer from 'gsap/Observer'
import { MotionPathPlugin, TextPlugin } from 'gsap/all'

const app = createApp(App)
app.use(Vue3TouchEvents)
app.mount('#app')

gsap.registerPlugin(ScrollTrigger, ScrollTrigger, Observer)
gsap.registerPlugin(MotionPathPlugin, TextPlugin)
gsap.registerPlugin(GSDevTools)

const skills = document.getElementById('skills')
const aboutMeTitle = document.querySelector('.about-me__title')
const aboutMeDescr = document.querySelector('.about-me__descr')
const contactsDescr = document.querySelector('.contacts__description')

gsap.defaults({ ease: 'none' })

const tl1 = gsap.timeline({ repeat: 0 })
tl1.to(aboutMeTitle, { duration: 1, text: 'Hi!<br/> I’m Tatyana Baranova,' })
tl1.to(aboutMeDescr, {
  duration: 6,
  delay: 1,
  text: 'an aspiring Frontend Developer with a strong visual sense and a passion for creating  user-friendly interfaces. Continuously seeking new and innovative solutions, I actively  explore external libraries and integrate AI, including GPT chat, into my projects.'
})
const tlSkills = gsap.timeline({
  scrollTrigger: {
    trigger: skills,
    start: 'top top',
    end: 'bottom +=500',
    scrub: 1,
    pin: true,
    markers: true,
    animation: 'Tween'
  }
})
gsap.utils.toArray('.skills__item').forEach((title) => {
  tlSkills.fromTo(title, { xPercent: -20 }, { xPercent: 25 }, 0)
})
const tlPort = gsap.timeline({
  scrollTrigger: {
    trigger: '#portfolio',
    scrub: 1
  }
})

// if (window.matchMedia("(max-width: 560px)").matches) {
// анимация портфолио
// }

gsap.utils.toArray('.portfolio__item:nth-child(even)').forEach((item) => {
  tlPort.fromTo(
    item,
    {
      xPercent: 5
    },
    { xPercent: 0 },
    0
  )
})
gsap.utils.toArray('.portfolio__item:nth-child(odd)').forEach((item) => {
  tlPort.fromTo(
    item,
    {
      xPercent: -5
    },
    { xPercent: 0 },
    0
  )
})

let tl2 = gsap.timeline()
tl2.to('.contacts__item', {
  x: 0,
  xPercent: 20
})
let tl = gsap.timeline()
tl.to('.contacts__item', {
  xPercent: 10,
  scrollTrigger: {
    trigger: '.contacts__item',
    scrub: 1
  }
})
let tl3 = gsap.timeline()
tl3.to(contactsDescr, {
  x: 20,
  xPercent: 20
})
let tl4 = gsap.timeline()
tl4.to(contactsDescr, {
  xPercent: -5,
  scrollTrigger: {
    trigger: contactsDescr,
    scrub: 1
  }
})
