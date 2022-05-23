### example:

```
  import VirtualList from ''

  <VirtualList
    ref="virtualList"
    dataKey="id"
    class="scoll-content"
    :dataSources="tableList"
    :autoLoadMoreWhenNotFull="true"
    :estimateSize="50"
    :keeps="25"
    @tobottom="load"
  >
    <p slot="header">找到以下内容：</p>
    <template slot-scope="{item}">
      <div class="item">{{item.text}}</div>
    </template>
    <p class="no-more" slot="footer" v-if="noMore">没有更多了</p>
  </VirtualList>

```

### 属性
- 见props.js

### 事件

  * item挂载或高度变化时候触发
    resized 参数：id, size
  * 滑动时触发
    scroll 参数 evt, range
  * 滑动到顶部时触发
    totop
  * 滑动到底部时触发
    tobottom

### 可调用方法

  * 滑动到第几个item
    scrollToIndex 参数：index
  * 滑动到offset
    scrollToOffset 参数：offset
  * 滑动到底部
    scrollToBottom 参数：无
  * 获取当前容器高 (横向滑动为宽)
    getClientSize 参数：无
  * 获取可滑动内容高 (横向滑动为宽)
    getScrollSize 参数：无
  * 区别于 scrollToOffset(0) ,reset 会重新获取props相关参数进行计算
    reset 参数：无