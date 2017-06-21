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
