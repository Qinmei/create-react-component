# create-react-component

创建 react 组件的 cli 工具，仿照 react-scripts，主要是能够方便的打包组件，减少配置的麻烦

## 思路

- 首先在 package.json 中新增一个命令，然后该命令 node 执行 bin 下面的 scripts 文件，目的是将入口约束起来，同时配置入口参数
- bin 下面的 scripts 文件则会根据参数来调用 scripts 里面的 build/start 等命令，同时对无效参数进行处理
- build 文件则比较简单，直接引入 webpack 然后进行打包即可，由于是直接使用 webpack 进行打包，所以可以删除 webpack-cli 的依赖
- start 就稍微麻烦点，因为需要一个 html 文件以及 index.tsx 来做启动的入口，cra 则是暴露给用户配置，但是组件开发的话其实不需要这个，应该可以直接内置进去
- 另外可以像 cra 一样，将参数统一放在一个 paths 文件夹里面
