/*
  VirtualList 参数
*/
export const VirtualProps = {
  // key，唯一标识符，不传则为本身
  dataKey: {
    type: [String, Function],
    required: false
  },
  // 数据列表
  dataSources: {
    type: Array,
    required: true
  },
  // 保持多少个dom, 一般比一屏多一点，否则上下快速滑动可能出现部分空白
  keeps: {
    type: Number,
    default: 30
  },
  // 其他传值
  extraProps: {
    type: Object
  },
  // 估算单个高度，请尽量精确
  estimateSize: {
    type: Number,
    default: 50
  },
  // 滑动方向 horizontal / vertical
  direction: {
    type: String,
    default: 'vertical' // the other value is horizontal
  },
  // 列表长度变化且内容不满一屏时，是否再次触发tobottom 直到满一屏
  autoLoadMoreWhenNotFull: {
    type: Boolean,
    default: false
  },
  // 顶部预留空间
  topThreshold: {
    type: Number,
    default: 0
  },
  // 底部预留空间
  bottomThreshold: {
    type: Number,
    default: 0
  },
  // 是否是整个页面（非scroll）
  pageMode: {
    type: Boolean,
    default: false
  },
  wrapClass: {
    type: String,
    default: ''
  },
  wrapStyle: {
    type: Object
  },
  dataComponent: {
    type: [Object, Function],
    required: false
  },
  itemScopedSlots: {
    type: Object
  }
}
