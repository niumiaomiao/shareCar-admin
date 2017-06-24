const routers = [
  {
    path: '/',
    component (resolve) {
      require.ensure(['../views/main.vue'], () => {
        resolve(require('../views/main.vue'))
      })
    },
    meta: { requiresAuth: true },
    children: [
      {
        // 城市管理
        path: '/city/manage',
        name: 'cityManage',
        component (resolve) {
          require.ensure(['../views/carManage/cityManage.vue'], () => {
            resolve(require('../views/carManage/cityManage.vue'))
          })
        }
      }, {
        // 车型管理
        path: '/cartype/manage',
        name: 'cartypeManage',
        component (resolve) {
          require.ensure(['../views/carManage/cartypeManage.vue'], () => {
            resolve(require('../views/carManage/cartypeManage.vue'))
          })
        }
      }, {
        // 定价管理
        path: '/fixprice/manage',
        name: 'fixpriceManage',
        component (resolve) {
          require.ensure(['../views/carManage/fixpriceManage.vue'], () => {
            resolve(require('../views/carManage/fixpriceManage.vue'))
          })
        }
      }, {
        // 车辆信息管理
        path: '/carinfo/manage',
        name: 'carinfoManage',
        component (resolve) {
          require.ensure(['../views/carManage/carinfoManage.vue'], () => {
            resolve(require('../views/carManage/carinfoManage.vue'))
          })
        }
      }, {
        // 违章管理
        path: '/illegal/manage',
        name: 'illegalManage',
        component (resolve) {
          require.ensure(['../views/illegalManage/illegalDetail.vue'], () => {
            resolve(require('../views/illegalManage/illegalDetail.vue'))
          })
        }
      }, {
        // 车辆详情
        path: '/car/detail/:id',
        name: 'carDetail',
        component (resolve) {
          require.ensure(['../views/carManage/carDetail.vue'], () => {
            resolve(require('../views/carManage/carDetail.vue'))
          })
        }
      }, {
        // 新增车辆
        path: '/add/car',
        name: 'addCar',
        component (resolve) {
          require.ensure(['../views/carManage/addCar.vue'], () => {
            resolve(require('../views/carManage/addCar.vue'))
          })
        }
      }, {
        // 会员列表
        path: '/member/list',
        name: 'memberList',
        component (resolve) {
          require.ensure(['../views/memberManage/memberList.vue'], () => {
            resolve(require('../views/memberManage/memberList.vue'))
          })
        }
      }, {
        // 会员详情
        path: '/member/detail',
        name: 'memberDetail',
        component (resolve) {
          require.ensure(['../views/memberManage/memberDetail.vue'], () => {
            resolve(require('../views/memberManage/memberDetail.vue'))
          })
        }
      }, {
        // 会员审核
        path: '/member/check',
        name: 'memberCheck',
        component (resolve) {
          require.ensure(['../views/memberManage/memberCheck.vue'], () => {
            resolve(require('../views/memberManage/memberCheck.vue'))
          })
        }
      }, {
        // 网点管理
        path: '/net/list',
        name: 'netList',
        component (resolve) {
          require.ensure(['../views/netManage/netList.vue'], () => {
            resolve(require('../views/netManage/netList.vue'))
          })
        }
      }, {
        // 新增网点
        path: '/add/net',
        name: 'addNet',
        component (resolve) {
          require.ensure(['../views/netManage/addNet.vue'], () => {
            resolve(require('../views/netManage/addNet.vue'))
          })
        }
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component (resolve) {
      require.ensure(['../views/login.vue'], () => {
        resolve(require('../views/login.vue'))
      })
    }
  }
]

export default routers
