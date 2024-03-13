<template>
  <header class="header">
    <div class="container header__container">

      <div class="header__logo">
        <img src="@/assets/svg/logo.svg" alt="Logo Frontend Developer Tatyana Baranova" />
      </div>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item"><a href="#about-me" class="header__link">About me</a></li>
          <li class="header__item"><a href="#portfolio" class="header__link">Portfolio</a></li>
          <li class="header__item"><a href="#contacts" class="header__link">Contacts</a></li>
        </ul>
      </nav>
      <div class="header__burger burger">
        <button class="burger__btn" :class="{ 'is-open': isOpen }" @click="showMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="burger__menu">
          <ul class="burger__list">
            <li class="burger__item">
              <a href="#about-me" class="burger__link" @click="closeMenu">About me</a>
            </li>
            <li class="burger__item">
              <a href="#portfolio" class="burger__link" @click="closeMenu">Portfolio</a>
            </li>
            <li class="burger__item">
              <a href="#contacts" class="burger__link" @click="closeMenu">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
import { defineComponent, ref, watch } from 'vue'
const mql = window.matchMedia("(max-width: 410px)")
console.debug(mql)

export default defineComponent({
  setup() {
    const isOpen = ref(false)
    const showMenu = () => {
      if (!isOpen.value) {
        isOpen.value = true
        console.log(window.matchMedia("(max-width: 410px)").matches)
        if (window.matchMedia("(max-width: 410px)").matches) {
        document.body.style.overflowY = 'hidden'
      } 
      } else if (isOpen.value) {
        isOpen.value = false
        document.body.style.overflowY = 'auto'
      }
    }
    const closeMenu = () => {
      isOpen.value = false
      document.body.style.overflowY = 'auto'
    }
    watch(isOpen, (value) => {
      isOpen.value = value
    })
    return {
      showMenu,
      isOpen,
      closeMenu
    }
  }
})
</script>
<style>
.burger {
  position: relative;
  display: none;
}
.burger__btn {
  cursor: pointer;
  width: 37px;
  height: 32px;
  background: transparent;
  border: none;
  padding: 4px;
  outline: none;
}
.burger__btn span {
  height: 2px;
  width: 29px;
  display: block;
  background-color: var(--color-white);
  transition:
    transform 0.5s ease-in-out,
    opacity 0.3s ease;
}
.burger__btn span:not(:last-child) {
  margin-bottom: 6px;
}
.burger__btn.is-open span:first-child {
  width: 27px;
  transform: rotate(45deg) translate(5px, 6px);
}
.burger__btn.is-open span:last-child {
  width: 27px;
  transform: rotate(-45deg) translate(5px, -6px);
}
.burger__btn.is-open span:nth-child(2) {
  transform: translateX(50%);
  opacity: 0;
}
.burger__menu {
  position: absolute;
  /* width: 300px; */
  width: 64vw;
  height: 600px;
  top: 64px;
  right: -40px;
  padding: 80px 60px;
  transition: transform 0.5s ease-in-out;
  transform: translateX(100%);
  background-color: var(--color-2A2A3C);
  z-index: 300;
}
.burger__btn.is-open ~ .burger__menu {
  transform: translateX(0);
}
.burger__item {
  margin-bottom: 20px;
}
.burger__link {
  position: relative;
  font-size: 24px;
  color: var(--color-white);
}
.header {
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--color-white);
  max-height: 120px;
}
.header__container{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__logo {
  margin-right: 60px;
  font-size: 0;
}
.header__logo img {
  object-fit: contain;
  font-size: 0;
  width: 456px;
  height: 30px;
}
/* .header__nav {
    max-width: 40%;
} */
.header__list {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.header__item:not(:last-child) {
  margin-right: 80px;
}
.header__link {
  position: relative;
  font-size: 24px;
  line-height: 180%;
  font-weight: 300;
  color: var(--color-white);
  transition: color 0.2s ease-in;
}
.header__link::after,
.burger__link::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: var(--color-9383B8);
  transform: scale(0);
  transition: transform 0.2s ease-in;
  bottom: 0;
  left: 0;
}
.header__link:hover,
.burger__link:hover {
  color: var(--color-9383B8);
  background: transparent;
}
.header__link:hover::after,
.burger__link:hover::after {
  transform: scale(1);
}
@media (max-width: 1200px) {
  .header__logo img {
    width: 350px;
  }
  .header__item:not(:last-child) {
    margin-right: 40px;
  }
}
@media (max-width: 920px) {
  .header {
    min-height: 90px;
    padding-top: 26px;
    padding-bottom: 26px;
  }
  .header__link {
    font-size: 18px;
  }
}
@media (max-width: 820px) {
  .burger {
    display: block;
  }
  .buregr__menu {
    width: 70vw;
    right: -20px;
  }
  .header__nav {
    display: none;
  }
  .header__logo {
    margin-right: 20px;
  }
}
@media (max-width: 768px) {
  .burger__menu {
    right: -20px;
  }
}
@media (max-width: 520px) {
  .header__logo img {
    width: 290px;
  }
  .burger__menu {
    width: 100vw;
    height: calc(100vh - 60px);
    padding: 60px 40px;
  }
}
@media (max-width: 410px) {
  .header {
    min-height: 60px;
    height: 60px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .burger__menu {
    top: 48px;
    height: calc(100vh - 60px);
    /* right: 40px; */
  }
  .burger__btn {
    width: 30px;
    height: 28px;
  }
  .burger__btn span {
    width: 25px;
  }
  .burger__btn.is-open span:first-child,
  .burger__btn.is-open span:last-child {
    width: 24px;
  }
  .header__logo img {
    width: 220px;
  }
}
</style>
