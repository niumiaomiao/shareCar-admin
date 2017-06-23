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
        // 会员列表
        path: '/member/list',
        name: 'memberList',
        component (resolve) {
          require.ensure(['../views/memberManage/memberList.vue'], () => {
            resolve(require('../views/memberManage/memberList.vue'))
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
