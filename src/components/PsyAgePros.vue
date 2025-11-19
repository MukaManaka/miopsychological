<script setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { computed } from 'vue'
  import { ref } from 'vue';

  const router = useRouter()

  const questions = [
      "面对新环境，你通常：",
      "当遇到挫折时，你倾向于：",
      "对于社交媒体，你的态度是：",
      "周末你更喜欢：",
      "面对批评，你的反应是：",
      "关于未来规划，你：",
      "当朋友遇到困难时，你：",
      "对于新科技产品，你：",
      "你的消费习惯是：",
      "面对压力，你通常：",
      "对于流行文化，你：",
      "在团队中，你倾向于：",
      "对于冒险活动，你的态度是：",
      "你的学习方式是：",
      "关于人际关系，你：",
      "面对变化，你：",
      "你的时间管理：",
      "对于传统观念，你：",
      "你的娱乐偏好：",
      "面对失败，你："
  ];
  const options = [
      ["感到兴奋和好奇", "需要时间适应", "感到紧张和不安"],
      ["立即寻找解决方案", "先冷静分析情况", "情绪低落一段时间"],
      ["每天活跃，分享生活", "偶尔使用，保持联系", "很少使用，更喜欢面对面交流"],
      ["参加派对或社交活动", "与几个好友小聚", "独自在家休息"],
      ["虚心接受并改进", "选择性接受", "容易感到受伤"],
      ["有明确的长期目标", "有大致方向", "更关注当下"],
      ["主动提供帮助", "等待对方求助", "不太愿意介入"],
      ["第一时间尝试", "观察一段时间后再决定", "除非必要，否则不感兴趣"],
      ["理性规划，量入为出", "偶尔冲动消费", "经常凭感觉购物"],
      ["积极寻找解决方法", "向他人倾诉", "独自承受"],
      ["密切关注并参与", "了解但不热衷", "不太感兴趣"],
      ["担任领导角色", "积极参与但不主导", "听从安排"],
      ["非常感兴趣，乐于尝试", "适度参与", "尽量避免"],
      ["主动探索新知识", "按需学习", "被动接受信息"],
      ["主动扩展社交圈", "维持现有关系", "享受独处"],
      ["适应迅速", "需要调整期", "抗拒改变"],
      ["计划周密，严格执行", "大致规划，灵活调整", "随性安排"],
      ["尊重但保持独立思考", "基本遵循", "严格遵守"],
      ["喜欢新鲜刺激的活动", "平衡新旧爱好", "偏爱熟悉的休闲方式"],
      ["视为学习机会", "短暂沮丧后重新开始", "容易陷入自我怀疑"]
  ];

  const choiceLen = questions.length
  const myage = ref()
  const ptext = ref("例如：25")

  const arrchoice = reactive(Array(20).fill(0));

  const myscore = computed(() => {
  return arrchoice.reduce((sum, current) => sum + (current - 2), 0)
})

  const radiochoice = (aindex, oindex) => {
    arrchoice[aindex] = oindex + 1
    console.log(arrchoice)
  }

  const goToResult = ()=> {
    console.log(myage.value)
    if (
      (myage.value > 5 ) && 
      (myage.value < 99) 
      )
    {
    if (!arrchoice.includes(0))
    {
      router.push({ name: 'psyAgeResult', params: {score: myscore.value, age:myage.value}})
    }
    }
    else
    {
      myage.value = ""
      ptext.value = "年龄错误"
    }


  }

  const goToHome = ()=> {
    router.push({ name: 'psyhome'})
  }

  const checkShow = (aindex) => {
    return arrchoice[aindex] == 0
  }


const translateXValue = computed(() => {
  // 计算数组中0的个数
  const zeroCount = arrchoice.filter(item => item === 0).length
  // 计算0的个数占总数的百分比
  const percentage = (zeroCount / arrchoice.length) * 100
  // 四舍五入到个位数并添加负号和百分号
  return Math.round(percentage)
})

</script>

<template>
  <div id="root">
    <section aria-label="Notifications alt+T" tabindex="-1" aria-live="polite" aria-relevant="additions text"
      aria-atomic="false"></section>
    <div class="min-h-screen bg-gradient-to-br from-psychology-calm via-white to-psychology-warm">
      <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-muted">
        <div class="container mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3"><button @click="goToHome()"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house w-4 h-4 mr-2">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>首页</button>
              <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" class="lucide lucide-brain w-5 h-5 text-psychology-primary">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                </svg>
                <h1 class="font-semibold text-psychology-primary">心理年龄测试</h1>
              </div>
            </div>
            <button @click="goToHome()"
              class="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-muted-foreground hidden sm:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-arrow-left w-4 h-4 mr-2">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>返回
            </button>
            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-muted-foreground sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-arrow-left w-4 h-4">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
            </button>
          </div>
          <div class="mt-4">
            <div class="flex justify-between items-center mb-2"><span
                class="text-sm text-muted-foreground">整体进度</span><span class="text-sm font-medium">{{100 - translateXValue}}%</span></div>
            <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100"
              class="relative w-full overflow-hidden rounded-full bg-secondary h-2">
              <div data-state="indeterminate" data-max="100" class="h-full w-full flex-1 bg-primary transition-all" :style="`transform: translateX(-${translateXValue}%)`">
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main class="container mx-auto px-4 py-8">
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="text-center">
            <!-- <h1 class="text-2xl font-bold text-psychology-primary mb-2">心理年龄测试</h1> -->
            <!-- <p class="text-muted-foreground">请提供一些基本信息，这将帮助我们提供更准确的结果分析</p> -->
          </div>
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm sri-card">
            <div class="flex flex-col space-y-1.5 p-6">
              <!-- <div class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"><svg
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-users w-5 h-5 text-psychology-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>人口学信息</div> -->
            </div>
            <div class="p-6 pt-0 space-y-8">

              <!-- 问题 -->
              <div class="space-y-3" v-for="question, aindex in questions">
                <div class="flex items-center justify-between">
                  <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base font-medium">
                    {{ question }} <span v-show="checkShow(aindex)" class="text-sm text-red-500">请选择</span>
                  </label>
                </div>
                <div role="radiogroup" aria-required="false" dir="ltr" class="grid grid-cols-1 gap-3" tabindex="0" style="outline: none;">
                  <div class="flex items-center space-x-3" @click="radiochoice(aindex, oindex)" v-for="option, oindex in options[aindex]">
                    <button type="button" role="radio"  :oindex = "oindex" :aindex = "aindex" aria-checked="false" data-state="unchecked" value="0" class="aspect-square h-4 w-4 rounded-full border border-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-psychology-primary">
                      <span v-if="arrchoice[aindex] == oindex + 1 " data-state="checked" class="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle h-2.5 w-2.5 fill-current text-current">
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                      </span>
                    </button>
                    <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-normal cursor-pointer flex-1 p-2 rounded hover:bg-muted/50 transition-colors" for="age-0">
                      {{ option }}
                    </label>
                  </div>
                </div>
              </div>

                            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <label>请输入您的年龄：</label>
                            <input 
                              id="age-input"
                              type="text" 
                              v-model="myage" 
                              class="styled-input"
                              :placeholder="ptext"
                            >
                            </div>

              <div class="bg-muted/30 p-4 rounded-lg border border-muted">
                <h4 class="font-medium text-sm mb-2">隐私保护</h4>
                <p class="text-xs text-muted-foreground leading-relaxed">以上信息仅用于提供个性化的结果分析，所有数据均在您的设备本地处理，
                  不会上传到任何服务器。</p>
              </div>
              <div class="flex justify-between pt-4 border-t"><button @click="goToHome()"
                  class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-left w-4 h-4 mr-2">
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path>
                  </svg>返回</button>
                  <button  @click="goToResult()" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-psychology-primary hover:bg-psychology-primary/90 ml-auto">
                    查看结果
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="lucide lucide-arrow-right w-4 h-4 ml-2">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button></div>
            </div>
          </div>
        </div>
      </main>
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
