import { onMounted, type Ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import gsap from 'gsap'

export const useAnimateInOut = (el: Ref<HTMLDivElement | null>) => {
  onMounted(() => {
    gsap.from(el.value, {
      duration: 0.35,
      x: '-200',
      autoAlpha: 0,
      ease: 'power2.out'
    })
  })

  onBeforeRouteLeave((to, from, next) => {
    gsap.to(el.value, {
      duration: 0.35,
      x: '+200',
      autoAlpha: 0,
      ease: 'power2.in',
      onComplete: () => {
        next()
      }
    })
  })
}
