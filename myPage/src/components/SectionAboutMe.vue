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
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  min-height: 800px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url('@/assets/images/photo-bg.jpg');
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
.about-me__title {
  font-size: 68px;
  line-height: 120%;
  font-weight: 300;
  color: var(--color-white);
  margin-bottom: 60px;
}
.about-me__descr {
  font-size: 36px;
  line-height: 120%;
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
    min-height: 600px;
    padding-bottom: 40px;
  }
  .about-me__title {
    font-size: 38px;
  }
  .about-me__descr {
    font-size: 22px;
  }
}
@media (max-width: 768px) {
  .about-me__block {
    padding-top: 70px;
  }
}
@media (max-width: 520px) {
  .about-me {
    padding-top: 60px;
    padding-bottom: 60px;
    min-height: 420px;
    max-height: 420px;
  }
  .about-me__title {
    font-size: 32px;
  }
  .about-me__descr {
    font-size: 18px;
  }
  .about-me__block {
    padding-top: 0;
    grid-column: 2 / span 5;
  }
}
@media (max-width: 380px) {
  .about-me {
    padding-bottom: 30px;
  }
  .about-me__title {
    font-size: 28px;
  }
  .about-me__descr {
    font-size: 16px;
  }
}
</style>
