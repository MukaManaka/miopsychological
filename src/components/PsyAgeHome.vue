<!--
 * @Author: MIO
 * @Date: 2025-11-04 19:29:29
 * @LastEditors: MIO
 * @LastEditTime: 2025-11-17 20:11:25
 * @FilePath: \MioPsychological\miopsychological\src\components\PsyAgeHome.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by MIO, All Rights Reserved. 
-->
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
  const ptext = ref("请输入注册码")
  const mycode = ref()

  const goToPross = ()=> {
    if (mycode.value == "0913")
    {
      router.push({ name: 'psyAgePros'})
    }
    else
    {
      mycode.value = ""
      ptext.value = "注册码错误"
    }



  }

</script>

<template>
  <div id="root">
    <section aria-label="Notifications alt+T" tabindex="-1" aria-live="polite" aria-relevant="additions text"
      aria-atomic="false"></section>
    <div class="min-h-screen bg-gradient-to-br from-psychology-calm via-white to-psychology-warm">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-20 w-8 h-8 bg-psychology-primary/10 rounded-full"></div>
        <div class="absolute top-40 right-32 w-12 h-12 bg-psychology-accent/10 rounded-full"></div>
        <div class="absolute bottom-40 left-1/4 w-6 h-6 bg-psychology-secondary/10 rounded-full"></div>
        <div class="absolute bottom-32 right-20 w-10 h-10 bg-psychology-primary/5 rounded-full"></div>
      </div>
      <div class="relative z-10">
        <nav class="container mx-auto px-4 py-6">
          <div class="flex items-center justify-between">

          </div>
        </nav>
        <main class="container mx-auto px-4">
          <section class="text-center mb-20">
            <div class="max-w-4xl mx-auto">
              <div
                class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-primary/80 mb-6 bg-psychology-primary/10 text-psychology-primary border-psychology-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-heart w-4 h-4 mr-2">
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                  </path>
                </svg>心理测评工具</div>
              <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-psychology-primary via-psychology-secondary to-psychology-accent bg-clip-text text-transparent">
                心理年龄计算器</h1>
              <p class="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                本系统通过一系列趣味问答，分析您的思维与行为模式，计算出您的心理年龄</p>

              <input 
                id="age-input"
                type="text" 
                v-model="mycode" 
                class="styled-input" 
                :placeholder="ptext"
                style="margin-bottom: 25px;"
              >


              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <!-- <a href="/assessment?type=quick" data-discover="true">-->
                  <button  @click="goToPross()" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md bg-psychology-primary hover:bg-psychology-primary/90 text-white px-8 py-4 text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="lucide lucide-zap w-5 h-5 mr-2">
                      <path
                        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
                      </path>
                    </svg>开始快速测评<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="lucide lucide-arrow-right w-5 h-5 ml-2">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
              </div>
            </div>
          </section>

        </main>
        <footer class=" border-muted bg-white/50 backdrop-blur-sm">
          <div class="container mx-auto px-4">
            <div class="border-t border-muted mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>© 2025 心理年龄计算器</p>
              <p>仅供教育和自我了解使用，不能替代专业心理健康服务</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
















</template>

<style scoped>
    .styled-input {
      padding: 10px 14px;
      border: 2px solid #2c3e50;
      border-radius: 8px;
      font-size: 16px;
      transition: all 0.3s ease;
      box-sizing: border-box;
      background-color: #fff;
    }
    .styled-input:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
    }
    .styled-input::placeholder {
      color: #95a5a6;
    }
  .styled-input {
  text-align: center;
  }

  .styled-input::placeholder {
  text-align: center;
  }
</style>