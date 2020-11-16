# Lasia UI基于Vue2.0的拟物风格组件库
### 第一次提交 2020/11/16
> 完成了Switch组件的编写，作为第一版测试组件
```html
<ls-switch v-model="isActive" size="small" unActive = "off" inActive="on" @change="doSwitch()"></ls-switch>
```
- 其中v-model为必填项，且必须传入一个布尔值**dw</br>
- size有三个属性，分别为"small","normal","large"默认值为small</br>
- unActive是开关的关闭标识，默认为"Off"</br>
- inActive是开关的开启标识，默认为"On"</br>
- change是组件的点击事件，同时传递一个value值，即当前的开关状态，同isActive绑定值一样。
```javaScript
doSwitch(value){
  console.log("switch status now!",value);
}
```
#### 此时输出的value值就是开关的状态即为True或False
