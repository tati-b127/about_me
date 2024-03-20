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

gsap.registerPlugin(ScrollTrigger, Observer)
gsap.registerPlugin(MotionPathPlugin, TextPlugin)
gsap.registerPlugin(GSDevTools)
ScrollTrigger.normalizeScroll(true)

const aboutMeTitle = document.querySelector('.about-me__title')
const aboutMeDescr = document.querySelector('.about-me__descr')
const contactsDescr = document.querySelector('.contacts__description')
const burgerLinks = document.querySelectorAll('.burger__link')
const headerLinks = document.querySelectorAll('.header__link')

gsap.defaults({ ease: 'none' })

function scrollTriggerItem(item) {
  item.addEventListener('click', (event) => {
    event.preventDefault()
    let hash = event.target.attributes.href.value
    let scrollTo = document.querySelector(hash)
    scrollTo.scrollIntoView({ block: 'start', behavior: 'smooth' })
  })
}
burgerLinks.forEach((link) => scrollTriggerItem(link))
headerLinks.forEach((link) => scrollTriggerItem(link))

const tl1 = gsap.timeline({ repeat: 0 })
tl1.to(aboutMeTitle, { duration: 1, text: 'Hi!<br/> I’m Tatyana Baranova,' })
tl1.to(aboutMeDescr, {
  duration: 5,
  delay: 0.5,
  text: 'an aspiring Frontend Developer with a strong visual sense and a passion for creating  user-friendly interfaces. Continuously seeking new and innovative solutions, I actively  explore external libraries and integrate AI, including GPT chat, into my projects.'
})

if (window.screen.width > 560) {
  //animate skills
  const tlSkills = gsap.timeline({
    scrollTrigger: {
      trigger: '#skills',
      scrub: 1,
      pin: true,
      animation: 'Tween'
    }
  })
  gsap.utils.toArray('.skills__item').forEach((title) => {
    tlSkills.fromTo(title, { xPercent: -20 }, { xPercent: 25 }, 0)
  })

  // анимация портфолио
  const tlPort = gsap.timeline({
    scrollTrigger: {
      trigger: '#portfolio',
      scrub: 1,
      pin: true
    }
  })

  gsap.utils.toArray('.portfolio__item:nth-child(even)').forEach((item) => {
    tlPort.fromTo(
      item,
      {
        xPercent: 8
      },
      { xPercent: -2 },
      0
    )
  })
  gsap.utils.toArray('.portfolio__item:nth-child(odd)').forEach((item) => {
    tlPort.fromTo(
      item,
      {
        xPercent: -8
      },
      { xPercent: 2 },
      0
    )
  })
} else {
  const tlSkills = gsap.timeline({
    scrollTrigger: {
      trigger: '#skills',
      scrub: 1,
      pin: false
    }
  })
  gsap.utils.toArray('.skills__item').forEach((title) => {
    tlSkills.fromTo(title, { xPercent: -25 }, { xPercent: 25 }, 0)
  })
}

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
  x: 20
})
let tl4 = gsap.timeline()
tl4.to(contactsDescr, {
  xPercent: -2,
  scrollTrigger: {
    trigger: contactsDescr,
    scrub: 1
  }
})
