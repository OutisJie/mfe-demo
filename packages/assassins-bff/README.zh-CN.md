# @dn-mfe/assassins-bff

{{description}}

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [midway 文档][midway]。

### 本地开发

```bash
$ tnpm i
$ tnpm run dev
$ open http://localhost:6001/
```

### 部署

```bash
$ tnpm start
$ tnpm stop
```

### 单元测试

- [midway-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [midway 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `tnpm run lint` 来做代码风格检查。
- 使用 `tnpm test` 来执行单元测试。
- 使用 `tnpm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.tnpmjs.com/package/autod) 。


[midway]: https://midwayjs.alibaba-inc.com
