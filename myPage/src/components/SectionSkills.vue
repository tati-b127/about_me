<template>
  <section class="skills" id="skills">
    <div class="container section__container">
        <h2 class="skills__title title">Skills</h2>
        <ul class="skills__list">
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Vue 2/3</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">GIT</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">JavaScript</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">ES6</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">HTML5</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">SASS</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">LESS</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">TypeScript</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">React</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">jQuery</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">CSS3</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">REST API</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Ajax</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">npm</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Gulp</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Grund</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Webpack</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Parcel</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">GITHUB</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Pixel Perfect</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">BEM</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">SCSS</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">VUEX</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Vue-router</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Cypress</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Jest</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Figma</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Adobe Photoshop</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Axios</h3>
          </li>
          <li class="skills__item skills__item_1">
            <h3 class="skills__subtitle">Vite</h3>
          </li>
        </ul>
    </div>
  </section>
</template>
<style>
/* @keyframes titleAnimation {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
       transform: translateY(0);
       opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
       transform: translateY(50px);
       opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    
  }
} */

.skills {
    padding-top: 120px;
    overflow: hidden;
}
.skills__list {
    display: flex;
    flex-wrap: wrap;
}
.skills__item {
    color: var(--color-9383B8);
    background-color: var(--color-2A2A3C);
    transform: scale(1);
    margin-bottom: 36px;
    margin-right: 50px;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
.skills__subtitle {
    position: relative;
    font-size: 48px;
    line-height: 110%;
    color: var(--color-9383B8);
    font-weight: 300;
    padding: 20px 30px;
    cursor: pointer;
    background: linear-gradient(60deg, var(--color-17134e), var(--color-9383B8), var(--color-412F74));
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 3s linear infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
    /* -webkit-text-fill-color: var(--color-9383B8); */
    /* animation: titleAnimation 0.2s linear; */
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
@keyframes animate {
  0% {
    background-position: -1000%;
  }
  100% {
    background-position: 300%;
  }
}
@keyframes animateHover {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
.skills__item:nth-child(3n) {
    background-color: var(--color-271939);
    animation: animate 3s linear infinite 2s;
}
.skills__item:nth-child(2n) {
    background-color: var(--color-412F74);
    animation: animateHover 3s linear infinite 3s;
}
.skills__item:hover,
.skills__item:hover .skills__subtitle {
    color: var(--color-412F74);
    font-weight: 500;
    transform: scale(1.1) !important;
    background-color: var(--color-9383B8);
    z-index: 1000;
    /* animation: reverse; */
    animation: animateHover 2s linear infinite;
}

@media (max-width: 1280px) {

.skills {
    padding-top: 80px;
}
}
@media (max-width: 980px) {

.skills__subtitle {
    font-size: 32px;
}
}
@media (max-width: 590px) {

.skills__subtitle {
    font-size: 24px;
    padding: 10px 20px;
}
.skills__item {
    margin-right: 18px;
    margin-bottom: 12px;
}
}
@media (max-width: 375px) {

.skills__subtitle {
    font-size: 18px;
    padding: 8px 12px;
}
}
</style>
