/**
 * item and slot component both use similar wrapper
 * we need to know their size change at any time
 */
const ItemProps = {
  index: {
    type: Number
  },
  event: {
    type: String
  },
  horizontal: {
    type: Boolean
  },
  source: {
    type: [Object, String]
  },
  component: {
    type: [Object, Function]
  },
  slotComponent: {
    type: Function
  },
  uniqueKey: {
    type: [String, Number]
  },
  extraProps: {
    type: Object
  },
  scopedSlots: {
    type: Object
  }
}

const SlotProps = {
  event: {
    type: String
  },
  uniqueKey: {
    type: String
  },
  horizontal: {
    type: Boolean
  }
}

const Wrapper = {
  created() {
    this.shapeKey = this.horizontal ? 'offsetWidth' : 'offsetHeight'
  },

  mounted() {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.dispatchSizeChange()
      })
      this.resizeObserver.observe(this.$el)
    }
  },

  // since componet will be reused, so disptach when updated
  updated() {
    this.dispatchSizeChange()
  },

  beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
      this.resizeObserver = null
    }
  },

  methods: {
    getCurrentSize() {
      return this.$el ? this.$el[this.shapeKey] : 0
    },

    // tell parent current size identify by unqiue key
    dispatchSizeChange() {
      this.$parent.$emit(this.event, this.uniqueKey, this.getCurrentSize(), this.hasInitial)
    }
  }
}

// wrapping for item
export const Item = {
  mixins: [Wrapper],

  props: ItemProps,

  render(h) {
    const { tag = 'div', extraProps = {}, index, source, uniqueKey, slotComponent, component, scopedSlots } = this
    const props = {
      ...extraProps,
      source,
      index
    }

    return h(tag, {
      key: uniqueKey,
      attrs: {
        role: 'listitem'
      }
    }, [component ? h(component, {
      props,
      scopedSlots: scopedSlots
    }) : slotComponent({ item: source, index: index, scope: props })])
  }
}

// wrapping for slot
export const Slot = {
  mixins: [Wrapper],

  props: SlotProps,

  render(h) {
    const { tag = 'div', uniqueKey } = this

    return h(tag, {
      key: uniqueKey,
      attrs: {
        role: uniqueKey
      }
    }, this.$slots.default)
  }
}
