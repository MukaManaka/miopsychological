/*
 * @Author: MIO
 * @Date: 2025-11-06 20:01:23
 * @LastEditors: MIO
 * @LastEditTime: 2025-11-19 21:36:24
 * @FilePath: \MioPsychological\miopsychological\src\router\index.js
 * @Description: 
 * @
 * @Copyright (c) 2025 by MIO, All Rights Reserved. 
 */

import { createMemoryHistory, createWebHashHistory, createRouter } from 'vue-router'

import PsyAgeHome from '../components/PsyAgeHome.vue'
import PsyAgePros from '../components/PsyAgePros.vue'
import PsyAgeResult from '../components/PsyAgeResult.vue'

const routes = [
    { 
        path: '/', 
        name:"psyhome",
        component: PsyAgeHome 
    },
    { 
        path: '/PsyAgePros', 
        name:"psyAgePros",
        component: PsyAgePros 
    },
    { 
        path: '/PsyAgeResult/:score/:age', 
        name:"psyAgeResult",
        component: PsyAgeResult
    },
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHashHistory(process.env.BASE_URL),
    // history: createWebHashHistory(),
    routes,
})

export default router