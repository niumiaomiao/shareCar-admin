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
        // 新增定价
        path: '/add/fixprice',
        name: 'addFixprice',
        component (resolve) {
          require.ensure(['../views/carManage/addFixprice.vue'], () => {
            resolve(require('../views/carManage/addFixprice.vue'))
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
        // 违章列表
        path: '/illegal/list',
        name: 'illegalList',
        component (resolve) {
          require.ensure(['../views/illegalManage/illegalList.vue'], () => {
            resolve(require('../views/illegalManage/illegalList.vue'))
          })
        }
      }, {
        // 新增违章
        path: '/illegal/add',
        name: 'illegalAdd',
        component (resolve) {
          require.ensure(['../views/illegalManage/illegalAdd.vue'], () => {
            resolve(require('../views/illegalManage/illegalAdd.vue'))
          })
        }
      }, {
        // 违章详情
        path: '/illegal/detail',
        name: 'illegalDetail',
        component (resolve) {
          require.ensure(['../views/illegalManage/illegalDetail.vue'], () => {
            resolve(require('../views/illegalManage/illegalDetail.vue'))
          })
        }
      }, {
        // 维保列表
        path: '/maintenance/list',
        name: 'maintenanceList',
        component (resolve) {
          require.ensure(['../views/maintenanceManage/maintenanceList.vue'], () => {
            resolve(require('../views/maintenanceManage/maintenanceList.vue'))
          })
        }
      }, {
        // 保养详情
        path: '/maintain/detail',
        name: 'maintainDetail',
        component (resolve) {
          require.ensure(['../views/maintenanceManage/maintainDetail.vue'], () => {
            resolve(require('../views/maintenanceManage/maintainDetail.vue'))
          })
        }
      }, {
        // 维修详情
        path: '/repair/detail',
        name: 'repairDetail',
        component (resolve) {
          require.ensure(['../views/maintenanceManage/repairDetail.vue'], () => {
            resolve(require('../views/maintenanceManage/repairDetail.vue'))
          })
        }
      }, {
        // 保险详情
        path: '/insurance/detail',
        name: 'insuranceDetail',
        component (resolve) {
          require.ensure(['../views/maintenanceManage/insuranceDetail.vue'], () => {
            resolve(require('../views/maintenanceManage/insuranceDetail.vue'))
          })
        }
      }, {
        // 清洗详情
        path: '/rinse/detail',
        name: 'rinseDetail',
        component (resolve) {
          require.ensure(['../views/maintenanceManage/rinseDetail.vue'], () => {
            resolve(require('../views/maintenanceManage/rinseDetail.vue'))
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
        path: '/member/detail/:id',
        name: 'memberDetail',
        component (resolve) {
          require.ensure(['../views/memberManage/memberDetail.vue'], () => {
            resolve(require('../views/memberManage/memberDetail.vue'))
          })
        }
      }, {
        // 会员审核
        path: '/member/check/:id',
        name: 'memberCheck',
        component (resolve) {
          require.ensure(['../views/memberManage/memberCheck.vue'], () => {
            resolve(require('../views/memberManage/memberCheck.vue'))
          })
        }
      }, {
        // 网点列表
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
      }, {
        // 充电桩列表
        path: '/charge/list',
        name: 'chargeList',
        component (resolve) {
          require.ensure(['../views/chargeManage/chargeList.vue'], () => {
            resolve(require('../views/chargeManage/chargeList.vue'))
          })
        }
      }, {
        //  新加冲电桩
        path: '/add/charge',
        name: 'addCharge',
        component (resolve) {
          require.ensure(['../views/chargeManage/addCharge.vue'], () => {
            resolve(require('../views/chargeManage/addCharge.vue'))
          })
        }
      }, {
        //  订单列表页
        path: '/order/list',
        name: 'orderList',
        component (resolve) {
          require.ensure(['../views/orderManage/orderList.vue'], () => {
            resolve(require('../views/orderManage/orderList.vue'))
          })
        }
      }, {
        //  订单详情页
        path: '/order/detail/:id',
        name: 'orderDetail',
        component (resolve) {
          require.ensure(['../views/orderManage/orderDetail.vue'], () => {
            resolve(require('../views/orderManage/orderDetail.vue'))
          })
        }
      }, {
        //  车管员列表
        path: '/admin/list',
        name: 'adminList',
        component (resolve) {
          require.ensure(['../views/adminManage/adminList.vue'], () => {
            resolve(require('../views/adminManage/adminList.vue'))
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
