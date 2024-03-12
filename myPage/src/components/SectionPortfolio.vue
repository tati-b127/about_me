<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const onTouch = ref(false)
        const showDetails = () => {
            if (onTouch.value) {
                onTouch.value = false
            } else {
                onTouch.value = true
            }
        }
        return {
            onTouch,
            showDetails
        }
    }
})
</script>
<template>
  <section class="portfolio container" id="portfolio">
    <h2 class="portfolio__title title">Portfolio</h2>
    <ul class="portfolio__list">
      <li class="portfolio__item portfolio__item_1" v-touch:tap="showDetails">
        <div class="portfolio__block">
          <h3 class="portfolio__subtitle title-hidden">Online lingerie store Moire</h3>
        </div>
        <div class="portfolio__view" :class="{'move': onTouch}">
          <h3 class="portfolio__subtitle">Online lingerie store Moire</h3>
          <ul class="portfolio__stack-list">
            <li class="portfolio__stack-item">Vue3</li>
            <li class="portfolio__stack-item">Vuex</li>
            <li class="portfolio__stack-item">Vue-router</li>
          </ul>
          <div class="portfolio__btns">
            <a href="https://tati-b127.github.io/moire/" target="_blank" class="portfolio__link btn"
              >WEBSITE</a
            >
            <a href="https://github.com/tati-b127/moire" target="_blank" class="portfolio__link btn"
              >GITHUB</a
            >
          </div>
        </div>
      </li>
      <li class="portfolio__item portfolio__item_2" @click="showDetails">
        <div class="portfolio__block">
          <h3 class="portfolio__subtitle title-hidden">Online furniture store SitDownPls</h3>
        </div>
        <div class="portfolio__view" :class="{'move': onTouch}">
          <h3 class="portfolio__subtitle">Online furniture store SitDownPls</h3>
          <ul class="portfolio__stack-list">
            <li class="portfolio__stack-item">HTML</li>
            <li class="portfolio__stack-item">SCSS</li>
            <li class="portfolio__stack-item">JavaScript</li>
          </ul>
          <div class="portfolio__btns">
            <a
              href="https://tati-b127.github.io/sit_down_pls.github.io/"
              target="_blank"
              class="portfolio__link btn"
              >WEBSITE</a
            >
            <a
              href="https://github.com/tati-b127/sit_down_pls.github.io"
              target="_blank"
              class="portfolio__link btn"
              >GITHUB</a
            >
          </div>
        </div>
      </li>
      <li class="portfolio__item portfolio__item_3" @click="showDetails">
        <div class="portfolio__block">
          <h3 class="portfolio__subtitle title-hidden">Photo studio High Pass landing page</h3>
        </div>
        <div class="portfolio__view" :class="{'move': onTouch}">
          <h3 class="portfolio__subtitle">Photo studio High Pass landing page</h3>
          <ul class="portfolio__stack-list">
            <li class="portfolio__stack-item">Pug</li>
            <li class="portfolio__stack-item">SCSS</li>
            <li class="portfolio__stack-item">JavaScript</li>
          </ul>
          <div class="portfolio__btns">
            <a
              href="https://tati-b127.github.io/high_pass.github.io/"
              target="_blank"
              class="portfolio__link btn"
              >WEBSITE</a
            >
            <a
              href="https://github.com/tati-b127/high_pass.github.io"
              target="_blank"
              class="portfolio__link btn"
              >GITHUB</a
            >
          </div>
        </div>
      </li>
      <li class="portfolio__item portfolio__item_4" @click="showDetails">
        <div class="portfolio__block">
          <h3 class="portfolio__subtitle title-hidden">Art gallery Blanchard website</h3>
        </div>
        <div class="portfolio__view" :class="{'move': onTouch}">
          <h3 class="portfolio__subtitle">Art gallery Blanchard website</h3>
          <ul class="portfolio__stack-list">
            <li class="portfolio__stack-item">HTML</li>
            <li class="portfolio__stack-item">CSS</li>
            <li class="portfolio__stack-item">JavaScript</li>
          </ul>
          <div class="portfolio__btns">
            <a
              href="https://tati-b127.github.io/blanchard_project.github.io/"
              target="_blank"
              class="portfolio__link btn"
              >WEBSITE</a
            >
            <a
              href="https://github.com/tati-b127/blanchard_project.github.io"
              target="_blank"
              class="portfolio__link btn"
              >GITHUB</a
            >
          </div>
        </div>
      </li>
      <li class="portfolio__item portfolio__item_5" @click="showDetails">
        <div class="portfolio__block">
          <h3 class="portfolio__subtitle title-hidden">Customer database CRM system</h3>
        </div>
        <div class="portfolio__view" :class="{'move': onTouch}">
          <h3 class="portfolio__subtitle">Customer database CRM system</h3>
          <ul class="portfolio__stack-list">
            <li class="portfolio__stack-item">JavaScript</li>
            <li class="portfolio__stack-item">HTML</li>
            <li class="portfolio__stack-item">CSS</li>
          </ul>
          <div class="portfolio__btns">
            <a
              href="https://github.com/tati-b127/crm.github.io"
              target="_blank"
              class="portfolio__link btn"
              >GITHUB</a
            >
          </div>
        </div>
      </li>
      <li class="portfolio__item portfolio__item_6" @click="showDetails">
        <div class="portfolio__block">
          <h3 class="portfolio__subtitle title-hidden">Internet banking with unit and e2e tests</h3>
        </div>
        <div class="portfolio__view" :class="{'move': onTouch}">
          <h3 class="portfolio__subtitle">Internet banking with unit and e2e tests</h3>
          <ul class="portfolio__stack-list">
            <li class="portfolio__stack-item">JavaScript</li>
            <li class="portfolio__stack-item">Jest</li>
            <li class="portfolio__stack-item">Cypress</li>
            <li class="portfolio__stack-item">HTML</li>
            <li class="portfolio__stack-item">CSS</li>
          </ul>
          <div class="portfolio__btns">
            <a
              href="https://github.com/tati-b127/COIN.github.io"
              target="_blank"
              class="portfolio__link btn"
              >GITHUB</a
            >
          </div>
        </div>
      </li>
      <li class="portfolio__item portfolio__item_7" @click="showDetails">
        <div class="portfolio__block">
          <h3 class="portfolio__subtitle title-hidden">PLM widget Build Of Product</h3>
        </div>
        <div class="portfolio__view" :class="{'move': onTouch}">
          <h3 class="portfolio__subtitle">PLM widget Build Of Product</h3>
          <ul class="portfolio__stack-list">
            <li class="portfolio__stack-item">React</li>
            <li class="portfolio__stack-item">TypeScript</li>
            <li class="portfolio__stack-item">SCSS</li>
          </ul>
          <div class="portfolio__btns">
            <a
              href="https://github.com/tati-b127/BOP.io"
              target="_blank"
              class="portfolio__link btn"
              >GITHUB</a
            >
          </div>
        </div>
      </li>
      <li class="portfolio__item portfolio__item_8" @click="showDetails">
        <div class="portfolio__block">
          <h3 class="portfolio__subtitle title-hidden">Digital agency website</h3>
        </div>
        <div class="portfolio__view" :class="{'move': onTouch}">
          <h3 class="portfolio__subtitle">Digital agency website</h3>
          <ul class="portfolio__stack-list">
            <li class="portfolio__stack-item">JavaScript</li>
            <li class="portfolio__stack-item">Gulp</li>
            <li class="portfolio__stack-item">HTML</li>
            <li class="portfolio__stack-item">SCSS</li>
          </ul>
          <div class="portfolio__btns">
            <a
              href="https://tati-b127.github.io/vtop3/"
              target="_blank"
              class="portfolio__link btn"
              >WEBSITE</a
            >
            <a
              href="https://github.com/tati-b127/vtop3"
              target="_blank"
              class="portfolio__link btn"
              >GITHUB</a
            >
          </div>
        </div>
      </li>
      <li class="portfolio__item portfolio__item_9" @click="showDetails">
        <div class="portfolio__block">
          <h3 class="portfolio__subtitle title-hidden">SPA STAR WARS</h3>
        </div>
        <div class="portfolio__view" :class="{'move': onTouch}">
          <h3 class="portfolio__subtitle">SPA STAR WARS</h3>
          <ul class="portfolio__stack-list">
            <li class="portfolio__stack-item">JavaScript</li>
            <li class="portfolio__stack-item">HTML</li>
            <li class="portfolio__stack-item">CSS</li>
          </ul>
          <div class="portfolio__btns">
            <a
              href="tati-b127.github.io/STRWRS.github.io/"
              target="_blank"
              class="portfolio__link btn"
              >WEBSITE</a
            >
            <a
              href="https://github.com/tati-b127/STRWRS.github.io"
              target="_blank"
              class="portfolio__link btn"
              >GITHUB</a
            >
          </div>
        </div>
      </li>

      <li class="portfolio__item portfolio__item_10" @click="showDetails">
        <div class="portfolio__block">
          <h3 class="portfolio__subtitle title-hidden">Online Shop Technozavrrr</h3>
        </div>
        <div class="portfolio__view" :class="{'move': onTouch}">
          <h3 class="portfolio__subtitle">Online Shop Technozavrrr</h3>
          <ul class="portfolio__stack-list">
            <li class="portfolio__stack-item">Vue2</li>
            <li class="portfolio__stack-item">Vue-router</li>
            <li class="portfolio__stack-item">Vuex</li>
          </ul>
          <div class="portfolio__btns">
            <a
              href="https://tati-b127.github.io/technovavrrr/"
              target="_blank"
              class="portfolio__link btn"
              >WEBSITE</a
            >
            <a
              href="https://github.com/tati-b127/technovavrrr"
              target="_blank"
              class="portfolio__link btn"
              >GITHUB</a
            >
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>
<style type="text/css">
.portfolio {
  padding-top: 120px;
  padding-bottom: 0;
}
.portfolio__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(12, 130px);
  grid-gap: 30px 60px;
}
.portfolio__item {
  position: relative;
  padding: 70px;
  overflow: hidden;
}
.portfolio__item:hover > .portfolio__view,
.portfolio__item:active > .portfolio__view {
  transform: translateY(0);
}
.move {
    transform: translateY(0);
}
.portfolio__view.move h3 {
  transform: scale(1.1);
}
.portfolio__block {
  position: absolute;
  top: 70px;
  bottom: 70px;
  left: 70px;
  right: 70px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
.portfolio__view {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 30px 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  transform: translateY(100%);
  transition: transform 0.5s ease-in-out;
  background: linear-gradient(180deg, #110e18 0%, rgba(16, 3, 45, 0.76) 100%);
}
.portfolio__subtitle {
  font-size: 32px;
  line-height: 110%;
  margin-bottom: 36px;
  color: var(--color-white);
  font-weight: 300;
}
.portfolio__stack-list {
  display: flex;
  flex-wrap: wrap;

  /* flex-direction: column; */
  align-items: flex-start;
  margin-bottom: 20px;
}
.portfolio__stack-item {
  font-size: 28px;
  font-weight: 500;
  line-height: 120%;
  margin-bottom: 12px;
  padding: 6px 8px;
  background: var(--color-2A2A3C);
  color: var(--color-9383B8);
}
.portfolio__stack-item:not(:last-child) {
  margin-right: 30px;
}
.portfolio__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.portfolio__link:first-child {
  margin-right: 32px;
}
.portfolio__item_5 .portfolio__link:first-child {
  margin-right: 0;
}
.portfolio__item_6 .portfolio__link:first-child {
  margin-right: 0;
}
.portfolio__item_1 .portfolio__block {
  background-image: url('@/assets/svg/logo-moire.svg');
}
.portfolio__item_2 .portfolio__block {
  background-image: url('@/assets/svg/logo-sitDownPls.svg');
}
.portfolio__item_3 .portfolio__block {
  background-image: url('@/assets/svg/logo-high-pass.svg');
}
.portfolio__item_4 .portfolio__block {
  background-image: url('@/assets/svg/logo-blanchard.svg');
}
.portfolio__item_5 .portfolio__block {
  background-image: url('@/assets/svg/logo-coin.svg');
}
.portfolio__item_6 .portfolio__block {
  background-image: url('@/assets/svg/logo-crm.svg');
}
.portfolio__item_7 .portfolio__block {
  background-image: url('@/assets/svg/logo-BOP.svg');
}
.portfolio__item_8 .portfolio__block {
  background-image: url('@/assets/svg/logo-VTOP3.svg');
}
.portfolio__item_9 .portfolio__block {
  background-image: url('@/assets/svg/logo-star-wars.png');
}
.portfolio__item_10 .portfolio__block {
  background-image: url('@/assets/svg/logo-tech.svg');
}
.portfolio__item_1 .portfolio__view,
.portfolio__item_6 .portfolio__view {
  justify-content: center;
}

.portfolio__item_1 {
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
  background-color: var(--color-8A8998);
}
.portfolio__item_2 {
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;
  background-color: var(--color-2A2A3C);
}
.portfolio__item_3 {
  grid-column: 1 / span 1;
  grid-row: 4 / span 2;
  background-color: var(--color-262425);
}
.portfolio__item_4 {
  grid-column: 2 / span 1;
  grid-row: 3 / span 2;
  background-color: var(--color-771A41);
}
.portfolio__item_5 {
  grid-column: 1 / span 1;
  grid-row: 6 / span 2;
  background-color: var(--color-2A2A3C);
}
.portfolio__item_6 {
  grid-column: 2 / span 1;
  grid-row: 5 / span 3;
  background-color: var(--color-412F74);
}
.portfolio__item_7 {
  grid-column: 1 / span 1;
  grid-row: 8 / span 3;
  background-color: var(--color-17134e);
}
.portfolio__item_8 {
  grid-column: 2 / span 1;
  grid-row: 8 / span 2;
  background-color: var(--color-9383B8);
}
.portfolio__item_9 {
  grid-column: 2 / span 1;
  grid-row: 10 / span 3;
  background-color: var(--color-2A2A3C);
}
.portfolio__item_10 {
  grid-column: 1 / span 1;
  grid-row: 11 / span 2;
  background-color: var(--color-262425);
}
@media (max-width: 1280px) {
  .portfolio {
    padding-top: 80px;
  }
  .portfolio__list {
    grid-template-rows: repeat(12, 110px);
    grid-gap: 20px 40px;
  }
  .portfolio__view {
    padding: 20px;
  }
  .portfolio__subtitle {
    font-size: 28px;
    margin-bottom: 24px;
  }
  .portfolio__stack-list {
    margin-bottom: 6px;
  }
  .portfolio__stack-item {
    font-size: 22px;
  }
  .portfolio__item_1 .portfolio__view,
  .portfolio__item_6 .portfolio__view {
    justify-content: center;
    padding: 20px 40px;
  }
}
@media (max-width: 960px) {
  .portfolio__item_1 .portfolio__view,
  .portfolio__item_6 .portfolio__view {
    padding: 20px;
  }
  .portfolio__stack-item:not(:last-child) {
    margin-right: 16px;
  }
  .portfolio__link:first-child {
    margin-right: 20px;
  }
  .portfolio__subtitle {
    font-size: 22px;
    margin-bottom: 16px;
  }
  .portfolio__stack-item {
    font-size: 18px;
  }
  .portfolio__block {
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
  }
  .portfolio__item {
    padding: 40px;
  }
}
@media (max-width: 560px) {
  .portfolio__list {
    grid-template-rows: repeat(10, 200px);
  }
  .portfolio__item_1 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
  }
  .portfolio__item_2 {
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;
  }
  .portfolio__item_3 {
    grid-column: 1 / span 2;
    grid-row: 3 / span 1;
  }
  .portfolio__item_4 {
    grid-column: 1 / span 2;
    grid-row: 4 / span 1;
  }
  .portfolio__item_5 {
    grid-column: 1 / span 2;
    grid-row: 5 / span 1;
  }
  .portfolio__item_6 {
    grid-column: 1 / span 2;
    grid-row: 6 / span 1;
  }
  .portfolio__item_7 {
    grid-column: 1 / span 2;
    grid-row: 7 / span 1;
  }
  .portfolio__item_8 {
    grid-column: 1 / span 2;
    grid-row: 8 / span 1;
  }
  .portfolio__item_9 {
    grid-column: 1 / span 2;
    grid-row: 9 / span 1;
  }
  .portfolio__item_10 {
    grid-column: 1 / span 2;
    grid-row: 10 / span 1;
  }
  .portfolio__stack-list {
    margin-bottom: 0;
  }
}
@media (max-width: 480px) {
  .portfolio {
    padding-top: 60px;
  }
}
@media (max-width: 380px) {
  .portfolio__subtitle {
    font-size: 18px;
  }
  .portfolio__stack-item {
    padding: 4px 6px;
    margin-bottom: 6px;
  }
  .portfolio__stack-item:not(:last-child) {
    margin-right: 12px;
  }
}
</style>
