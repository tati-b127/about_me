<template>
  <section class="about-me container" id="about-me">
    <div class="about-me__block">
      <h1 class="about-me__title"></h1>
      <h2 class="about-me__descr">
      </h2>
      
    </div>
  </section>
</template>
<style type="text/css">
:root {
  --ease-cb: cubic-bezier(.19,1,.22,1);
  --delay-time: 1.5s
}

.about-me {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  min-height: 800px;
  padding-top: 100px;
  padding-bottom: 100px;
  background: linear-gradient(#00000000, #00000000,  #00000000, var(--color-background)), url('@/assets/images/photo-bg.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left top;
}
.about-me__block {
  padding-top: 150px;
  grid-column: 3 / span 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 950px;
}
.about-me__block::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* background: var(--color-background); */
  opacity: 0.3;
}

.about-me__title {
  font-size: 68px;
  line-height: 120%;
  letter-spacing: 2px;
  font-weight: 300;
  color: var(--color-white);
  margin-bottom: 60px;
}
.about-me__descr {
  font-size: 36px;
  line-height: 150%;
  font-weight: 300;
  color: var(--color-white);
}
@media (max-width: 1200px) {
  .about-me__title {
    font-size: 48px;
  }
  .about-me__descr {
    font-size: 28px;
  }
}
@media (max-width: 920px) {
  .about-me {
    padding-bottom: 40px;
  }
  .about-me__title {
    font-size: 38px;
  }
  .about-me__descr {
    font-size: 20px;
  }
}
@media (max-width: 768px) {
  .about-me {
    min-height: 700px;
  }
  .about-me__block {
    padding-top: 70px;
  }
}
@media (max-width: 520px) {
  .about-me {
    margin-top: 90px;
    padding-top: 100px;
    padding-bottom: 60px;
    min-height: 560px;
  }
  .about-me__title {
    font-size: 30px;
  }
  .about-me__descr {
    font-size: 18px;
  }
  .about-me__block {
    padding-top: 0;
    grid-column: 2 / span 5;
  }
}
@media (max-width: 410px) {
  .about-me {
    margin-top: 60px;
    padding-bottom: 30px;
    background-size: cover;
  }
  .about-me__title {
    font-size: 28px;
  }
  .about-me__descr {
    font-size: 16px;
  }
}
</style>
