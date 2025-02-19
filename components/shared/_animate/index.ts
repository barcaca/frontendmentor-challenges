import type { MotionProps, Variant } from 'motion/react'

class MotionAnimation {
  constructor(
    public variants: { [key: string]: Variant } = {},
    public transition?: MotionProps['transition']
  ) {}
}

export class AnimationBuilder {
  private variants: { [key: string]: Variant } = {}
  private transition?: MotionProps['transition']

  setInitial(initial: Variant): this {
    this.variants.initial = initial
    return this
  }
  setAnimate(animate: Variant, transition?: MotionProps['transition']): this {
    this.variants.animate = {
      ...animate,
      transition,
    }
    return this
  }
  setExit(exit: Variant): this {
    this.variants.exit = exit
    return this
  }
  setHover(hover: Variant): this {
    this.variants.hover = hover
    return this
  }
  setTransition(transition: MotionProps['transition']): this {
    this.transition = transition
    return this
  }
  addVariant(name: string, variant: Variant) {
    this.variants[name] = variant
    return this
  }
  build() {
    return new MotionAnimation(this.variants, this.transition)
  }
}

/**---------------------- Animations for containers ----------------------**/

const fade = new AnimationBuilder()
  .setInitial({ opacity: 0 })
  .setAnimate({ opacity: 1 }, { staggerChildren: 0.2 })
  .setExit({ opacity: 0 })
  .build()

/**------------------------ Animations for items ------------------------**/
