<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__descr">Designed by Tatyana Baranova &copy;<span>2023-{{currentYear}}</span></div>
    </div>
  </footer>
</template>
<script>
import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      const currentYear = new Date().getFullYear();
      return {
        currentYear,
      }
    }
  })
</script>
<style>
.footer {
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--color-8A8998);
}
.footer__descr {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  color: var(--color-8A8998);
}
.footer__descr span {
  font-size: 14px;
}
@media (max-width: 1200px) {
  .footer {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
@media (max-width: 568px) {
  .footer {
    padding-top: 30px;
    padding-bottom: 30px;
  }
}
@media (max-width: 380px) {
  .footer__descr {
    font-size: 12px;
  }
}
</style>
