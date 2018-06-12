import { Component, OnInit } from '@angular/core';
// import { on } from 'cluster';

const titleNumber = 5;
@Component({
  selector: 'mat-aio-nav-item',
  templateUrl: './aio-nav-item.component.html',
  styleUrls: ['./aio-nav-item.component.css']
})

export class AioNavItemComponent implements OnInit {


  // 数据
  public dataArray: any;
  public flag: Boolean;
  public status: Boolean;

  constructor() {   // 构造函数

    this.flag = false;  // 默认全部折叠
    this.status = false;
    this.dataArray = [
      {
        index: 11,
        name: "快速开始",
        status: 0,
        child: [],
        baseUrl: 'guidance'
      }, {
        index: 21,
        name: " 教程 ",
        status: 0,
        child: [
          { chapter: 1, child: [], title: "简介", status: '0',baseUrl:'teach-introduction' },
          { chapter: 2, child: [], title: "The Application Shell", status: '0' },
          { chapter: 3, child: [], title: "The Hero Editor", status: '0' },
          { chapter: 4, child: [], title: "列表展示", status: '0' },
          { chapter: 5, child: [], title: "主/详情组件", status: '0' },
          { chapter: 6, child: [], title: "服务", status: '0' },
          { chapter: 7, child: [], title: "路由", status: '0' },
          { chapter: 8, child: [], title: "http", status: '0' }
        ],
        baseUrl: ''
      }, {
        index: 3,
        name: "基本原理",
        status: 0,
        child: [
          { chapter: 1, title: "体系结构", status: '0', child: [] },
          { chapter: 2, title: "组件&模板", status: '0', child: [] },
          { chapter: 3, title: "表单", status: '0', child: [] },
          { chapter: 4, title: "Observables&RxJS", status: '0', child: [] },
          { chapter: 5, title: "引导", status: '0', child: [] },
          { chapter: 6, title: "NgModules", status: '0', child: [] },
          { chapter: 7, title: "依赖注入", status: '0', child: [] },
          { chapter: 8, title: "HttpClient", status: '0', child: [] },
          { chapter: 9, title: "路由&导航", status: '0', child: [] },
          { chapter: 10, title: "测试", status: '0', child: [] },
          { chapter: 11, title: "备忘单", status: '0', child: [] }
        ],
        baseUrl: ''
      }, {
        index: 4,
        name: "技术",
        status: 0,
        child: [
          {
            chapter: 1, title: "国际化", status: '0', child: [
              { chapter: 1, title: "国际化三级菜单1", status: '0', child: [] },
              { chapter: 2, title: "国际化三级菜单2", status: '0', child: [] }
            ]
          },
          {
            chapter: 2, title: "语言服务", status: '0', child: [

              { chapter: 1, title: "语言包", status: '0', child: [] },
              { chapter: 1, title: "typeScript", status: '0', child: [] }
            ]
          },
          { chapter: 3, title: "安全", status: '0', child: [] },
          { chapter: 4, title: "创建开发", status: '0', child: [] },
          { chapter: 5, title: "服务工作者", status: '0', child: [] },
          { chapter: 6, title: "升级", status: '0', child: [] },
          { chapter: 7, title: "服务端渲染", status: '0', child: [] },
          { chapter: 8, title: "VS2015", status: '0', child: [] },
          { chapter: 9, title: "样式指南", status: '0', child: [] },
          { chapter: 10, title: "词汇表", status: '0', child: [] },

        ],
        baseUrl: ''
      }, {
        index: 5,
        name: "API",
        status: 0,
        child: [],
        baseUrl: 'api-doc'
      }
    ];
  }
  getClassFlag(object) {
     //  console.log({}.toString.call(object) == '[object Object]');
    //判断object类型
    if ({}.toString.call(object) == '[object Number]') {
      for (let i = 0; i < this.dataArray.length; i++) {
        //  this.dataArray[i]['status'] = 0;  
        if (object == this.dataArray[i]['index']) {
          if (this.dataArray[i]['status'] == 0) {
            this.dataArray[i]['status'] = 1;
            // 循环子节点
            // if(this.dataArray[i].child.length > 0){
            //     console.log(this.dataArray[i].child);
            // }
          } else {
            this.dataArray[i]['status'] = 0;
          }
          // console.log(this.dataArray[i]['status']);
          // console.log(this.dataArray[i].child);
          //循环设置子节点状态
        }
      }
    }

    if({}.toString.call(object) == '[object Object]') {
          // console.log(object);
          if (object.status == 0) {
            object.status = 1;
          } else {
            object.status = 0;
          }
      }

   }

  ngOnInit() {

  }

}
