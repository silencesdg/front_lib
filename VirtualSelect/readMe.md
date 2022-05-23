### 说明：

##### 本组件改造于elementUI 中的 select 组件，在其原api基础上做了以下增强：

- [x] 支持大数据量选项list
- [x] 支持滑动到底部加载更多
- [x] 支持黑色背景蒙层
- [x] 支持右侧按钮slot (不是suffix)

<br/>

##### 写法有一些改变：

- 原写法，options为v-for列表

```html
<template>
  <el-select v-model="value" filterable placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
```

- 新写法，列表数据作为属性传递到 select上，options为单个slot写法，目的是由虚拟列表计算，应该生成哪些个dom。**==同样需要使用el-option==**，否则需要自己处理单个option与select的交互

```html
<VirtualSelect v-model="model" :virtualListProps="virtualListProps">
      // 需要用slot写单个option
      <template slot-scope="{item}">
        <el-option
          :label="item"
          :value="item">
        </el-option>
      </template>
</VirtualSelect>
```

<br/>

<br/>

### explame:

```
  <VirtualSelect
      class="search-text"
      v-model="currentValue"
      :virtualListProps="virtualListProps"
      size="small"
      popperClass="search-text-popper"
      filterable
      allowCreate
      :needMask="true"
      placeholder="输入您要查找的关键词"
      :loading="false"
      @select="() => { trySearch() }"
    >
      // 需要用slot写单个option
      <template slot-scope="{item}">
        <el-option
          :label="item"
          :value="item">
        </el-option>
        <!-- <span>{{item}}</span> -->
      </template>
      <div
        class="text-search-div"
        @click="trySearch"
        slot="addition"
      >
        <span class="iconfont iconsousuo"></span>
        <span class="word">搜索</span>
      </div>
    </VirtualSelect>


```

### 事件

- select :  点击选项后触发

### 属性

- virtualListProps：见虚拟滚动列表属性
- needMask：弹出框时，是否需要黑色背景蒙层

### slot

- addition：放在select 右边的slot，可放置确认按钮
