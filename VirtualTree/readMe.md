### 说明：

##### 本组件改造于elementUI 中的 [tree 组件](https://element.eleme.cn/#/zh-CN/component/tree)，在其原api基础上做了以下增强：

- [x] 支持大数据量虚拟滚动
- [ ] 支持滑动到底部加载更多
- [ ] 懒加载优化计算

<br/>

##### 但是，以下功能将无法正常使用：

- 拖拽。和虚拟滚动有冲突，未找到方案，待优化
- 搜索筛选节点。将会导致大量计算，异常卡顿，待优化

### example:

```
import VirtualTree from ''

  <virtual-tree
      :highlight-current="true"
      :ref="refTree"
      class="tree"
      :height="700"
      :keeps="30"
      :estimateSize="34"
      :empty-text="``"
      :node-key="nodeKey"
      :default-expanded-keys="defaultExpeandedKeys"
      :load="loadNode"
      :lazy="isLazy"
      :data="treeData"
      :props="treeProps"
      @node-click="nodeClick"
    >
      <div class="custom-tree-wrapper" slot-scope="{ node, data }">
      </div>
  </virtual-tree>
```

<br/>

### 属性

- height  tree高度，虚拟滚动必填，否则为普通el-tree
- keeps  需要保持多少dom
- estimateSize  预估的单行高度