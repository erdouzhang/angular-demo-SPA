# MyApp6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##生成自定义项目结构和参数的修改

##angular（v6） 实现单页面路由配置/子路由配置
## 什么是子路由？
简单的说就是如果你希望可以无限制的在一个组件的内部进行多级嵌套其他组件，但是由于每层的嵌套都是以上一层为基础的，所以你在找到嵌套在内层的组件时就需要用到angular子路由来导航，当然这是相对来说的，根路由和子路由都是相对的。
## 子路由语法：
### Simple Configuration（简单配置）
		[{
		  path: 'team/:id',  // 配置根路由
		 component: Team,    // 根路由组件（Team）加载
		  children: [{
			path: 'user/:name',   // 配置子路由路由
			component: User         // 子路由组件（User）加载
		  }]
		}]
When navigating to /team/11/user/bob, the router will create the team component with the user component in it.
### Multiple Outlets（多个出口）
		[{
		path: 'team/:id',
		component: Team
		}, {
		path: 'chat/:user',
		component: Chat
		outlet: 'aux'
		}]
When navigating to /team/11(aux:chat/jim), the router will create the team component next to the chat component. The chat component will be placed into the aux outlet.
###Wild Cards（通配符）
		[{
		  path: '**',
		  component: Sink
		}]
不管导航到哪组件（Sink）都被实例化
###Redirects(重定向)
		[{
		  path: 'team/:id',
		  component: Team,
		  children: [{
			path: 'legacy/user/:name',
			redirectTo: 'user/:name'
		  }, {
			path: 'user/:name',
			component: User
		  }]
		}]
When navigating to '/team/11/legacy/user/jim', the router will change the url to '/team/11/user/jim', and then will instantiate the team component with the user component in it.

If the redirectTo value starts with a '/', then it is an absolute redirect. E.g., if in the example above we change the redirectTo to /user/:name, the result url will be '/user/jim'.


