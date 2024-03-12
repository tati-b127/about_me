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
@keyframes titleAnimation {
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
}

.skills {
    padding-top: 120px;
    overflow: hidden;
}
.skills__list {
    display: flex;
    flex-wrap: wrap;
}
.skills__subtitle {
    position: relative;
    font-size: 48px;
    line-height: 110%;
    margin-bottom: 36px;
    margin-right: 50px;
    color: var(--color-9383B8);
    font-weight: 300;
    transform: scale(1);
    padding: 20px 30px;
    background-color: var(--color-2A2A3C);
    cursor: pointer;
    animation: titleAnimation 0.2s linear;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}
.skills__subtitle:hover {
    color: var(--color-412F74);
    /* transform: scale(1.1) !important; */
    background-color: var(--color-9383B8);
    /* z-index: 1000; */
}

@media (max-width: 1280px) {

.skills {
    padding-top: 80px;
}
}
</style>
