
## dev

以下命令基于根目录

- start assassins

  ```shell
  tnpm run assassins:server
  tnpm run assassins:client
  ```

- start subapp

  ```shell
  tnpm run hello
  tnpm run world
  ```

## 子应用接入

- 子应用入口提供对应的生命周期方法

  ```js
  export async function bootstrap() {
  }
  export async function mount(props: any) {
    ReactDOM.render(
      <App />,
      domElementGetter(),
    );
  }
  export async function unmount(props: any) {
    ReactDOM.unmountComponentAtNode(domElementGetter());
  }
  ```

- 主应用添加子应用注册（可以放到配置中心做，避免主应用配合发布）

  ```js
  // const apps = getListFromDisconfOrSomeWhere();
  registerMicroApps(
    [
      {
        name: 'hello',
        entry: '//localhost:6001/htmlentry/hello',
        container: '#dn-mfe-base',
        loader,
        activeRule: '/h',
      },
    ]
  )
  ```

## 流程

  请求由``assassins-bff``接入，返回主应用``assassins``，``assassins``启动时注册了各个子应用，且包含了导航等公共部分。

  根据注册的路由匹配规则进行子应用的卸载和装载，实现子应用间的切换，子应用自身的路由由自身控制。
