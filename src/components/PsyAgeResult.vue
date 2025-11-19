<!--
 * @Author: MIO
 * @Date: 2025-11-06 19:48:24
 * @LastEditors: MIO
 * @LastEditTime: 2025-11-18 20:16:08
 * @FilePath: \MioPsychological\miopsychological\src\components\PsyAgeResult.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by MIO, All Rights Reserved. 
-->
<script setup>
import { ref } from 'vue';
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const psyExplanation = [
    "你的测试结果显示出一种非常年轻和纯粹的心理状态，你的内心世界可能充满了天马行空的想象力与不拘一格的自由精神。你善于在生活中发现简单的乐趣，抗拒复杂和刻板的规则，这种特质在带来快乐的同时，也可能让你在面对现实世界的某些规则和长远规划时，感到有些难以投入或适应。",
    "你的内心住着一个比实际年龄更年轻的灵魂，这让你保有非常珍贵的特质——对世界充满好奇、心态乐观且充满创造力。你的纯真和热情很容易感染身边的人，为你带来良好的人际关系。这份“年轻心态”是抵御生活枯燥的良方，但有时也可能让你在需要表现出高度严谨和耐性时，感到些许挑战或准备不足。",
    "恭喜你，你的心理年龄与实际年龄非常匹配，这是一种非常健康且和谐的状态。这意味着你既能理性地面对成年世界的规则与责任，也依然保有与年龄相称的好奇心与活力。你懂得在恰当的时机表现出沉稳，也懂得在放松的时刻释放天性，这种出色的平衡能力让你能很好地适应环境，并享受生活的各个面向。",
    "你的测试结果显示，你的心理年龄略高于你的实际年龄，这表明你是一个内心清醒、处事稳妥的人。你或许比许多同龄人更早地开始思考未来，并对自己的生活有相对清晰的规划。这份提前到来的“成熟感”让你在应对事务时更加从容，但也可能让你在不知不觉中，用稍高的标准来要求自己和他人，偶尔会感到一种微妙的抽离感或压力。",
    "你的心理年龄显得比你的实际年龄更为成熟，这通常意味着你拥有超越同龄人的沉静、深思熟虑和责任感。你可能很早就学会了体察周遭，习惯用更宏观和长远的视角看待问题，这份稳重让你在人群中显得可靠而值得信赖。这份“老成”是生活赋予你的独特礼物，它让你避免了冲动，但也可能让你偶尔感到疲惫，或是少了一些属于年轻时代的轻松与肆意。"
]

const explanText = computed(()  => {
    if (route.params.score <= -15)
    return psyExplanation[0]
    else if(-15 < route.params.score < -3)
    return psyExplanation[1]
    else if(-3 <= route.params.score <= 3)
    return psyExplanation[2]
    else if(3 < route.params.score < 15)
    return psyExplanation[3]
    else if(route.params.score >= 15)
    return psyExplanation[4]
}); 

const psySuggestion = [
    "这个世界需要像你这样纯粹而快乐的人来增添色彩。不必急于强迫自己“长大”，真正的成熟是学会在不失去核心自我的前提下，发展出适应外部世界的能力。建议你可以寻找一位你信赖的、更为成熟的伙伴或导师，从他/她的经验中汲取智慧，学习如何将你无限的创意转化为现实中的小成就，一步步地搭建起连接你天真内心与复杂现实世界的桥梁。",
    "你拥有的赤子之心是许多人求而不得的宝藏，请务必好好守护它。同时，可以尝试着将这份活力与创造力引导到更具体的目标和挑战上，例如学习一项需要耐心的新技能，或在项目中承担更多责任。通过完成这些有难度的事情，你不仅能获得成就感，还能在不泯灭天真的前提下，为你的内心世界增添更多的层次与力量。",
    "请珍惜并保持这份难得的平衡。你可以继续顺着自己当前的节奏稳步前行，同时不忘持续探索自我。无论是深化你的兴趣爱好，还是拓宽社交圈层，都是在为你这座稳固的内心大厦添砖加瓦。你正走在一条非常健康的成长道路上，继续相信你的直觉和判断就好。",
    "为你这份超前的智慧感到欣慰，同时也可以有意识地去捕捉和享受当下年龄独有的美好。试着在规划人生的蓝图时，也为即兴的快乐和偶然的相遇留出一些空间。多与充满活力的朋友交流，尝试一些新鲜有趣的爱好，这能帮助你更好地平衡内心的稳重与外界的鲜活，让成长的步伐更加从容而丰盈。",
    "在保持这份可贵的稳重之余，不妨试着为自己留出一片“心灵后花园”，允许自己偶尔像孩子一样，去尝试一些单纯为了快乐而无用的事。不必时刻都肩负重任，学着信任并依赖身边的人，适度卸下心防，你会发现，偶尔的“幼稚”和依赖，并不会削弱你的力量，反而能为你的生命注入新的活力与轻盈。"
]

const suggestText = computed(()  => {
    if (route.params.score <= -15)
    return psySuggestion[0]
    else if(-15 < route.params.score < -3)
    return psySuggestion[1]
    else if(-3 <= route.params.score <= 3)
    return psySuggestion[2]
    else if(3 < route.params.score < 15)
    return psySuggestion[3]
    else if(route.params.score >= 15)
    return psySuggestion[4]
}); 



const translateXValue = computed(() => {
    const score = Number(route.params.score) ;
    const age = Number(route.params.age) ;
    // 计算绝对值
    console.log("score = ",score)
    console.log("age = ",age)
    console.log("result = ",Math.abs((score)* 100 / 20 ))
    return 50 - score* 2.5 ;
});



</script>

<template>
    <div id="root">
        <section aria-label="Notifications alt+T" tabindex="-1" aria-live="polite" aria-relevant="additions text"
            aria-atomic="false">
        </section>
        <div class="min-h-screen bg-gradient-to-br from-psychology-calm via-white to-psychology-warm">
            <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-muted">
                <div class="container mx-auto px-4 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 text-muted-foreground hover:text-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-house w-4 h-4 mr-2">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                                    </path>
                                </svg>首页
                            </button>
                            <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="lucide lucide-brain w-5 h-5 text-psychology-primary">
                                    <path
                                        d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z">
                                    </path>
                                    <path
                                        d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z">
                                    </path>
                                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                                    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                                </svg>
                                <h1 class="font-semibold text-psychology-primary">评估结果</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <main class="container mx-auto px-4 py-8 space-y-8">
                <div
                    class="rounded-lg bg-card text-card-foreground shadow-sm sri-card border-2 border-psychology-primary/20">
                    <div class="flex flex-col space-y-1.5 p-6 text-center pb-6">
                        <div
                            class="w-20 h-20 bg-psychology-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-chart-column w-10 h-10 text-psychology-primary">
                                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                <path d="M18 17V9"></path>
                                <path d="M13 17V5"></path>
                                <path d="M8 17v-3"></path>
                            </svg></div>
                        <div class="tracking-tight text-2xl sm:text-3xl font-bold text-psychology-primary mb-2">心理年龄: {{ $route.params.age - $route.params.score*(-1)}}</div>
                        <div class="text-4xl sm:text-6xl font-bold text-psychology-primary mb-4"></div>
                    </div>
                    <div class="p-6 pt-0 space-y-6">
                        <div class="text-center">
                            <p class="text-muted-foreground mb-4">您的生理年龄为 
                                <span class="font-semibold text-psychology-primary">{{ $route.params.age }}</span>
                            </p>
                            <div class="max-w-2xl mx-auto">
                                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" class="relative w-full overflow-hidden rounded-full bg-secondary h-3 mb-2">
                                    <div data-state="indeterminate" data-max="100" class="h-full w-full flex-1 bg-primary transition-all"
                                        :style="`transform: translateX(-${translateXValue}%)`">
                                    </div>
                                </div>
                                <div class="flex justify-between text-xs text-muted-foreground">
                                    <span>低</span>
                                    <span>中</span>
                                    <span>高</span>
                                </div>
                            </div>
                        </div>
                        <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div>
                        <div>
                            <h3 class="font-semibold text-lg mb-3 flex items-center gap-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="lucide lucide-info w-5 h-5 text-psychology-primary">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 16v-4"></path>
                                    <path d="M12 8h.01"></path>
                                </svg>结果解释</h3>
                            <div class="space-y-2">
                                <p class="text-muted-foreground leading-relaxed">{{ explanText }}</p>
                            </div>
                        </div>
                        <div>
                            <h3 class="font-semibold text-lg mb-3 flex items-center gap-2"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-trending-up w-5 h-5 text-psychology-primary">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>个性化建议</h3>
                            <div class="space-y-2">
                                <div class="flex items-start gap-2">
                                    <p class="text-muted-foreground leading-relaxed">{{ suggestText }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="rounded-lg border text-card-foreground shadow-sm sri-card border-yellow-200 bg-yellow-50/50">
                    <div class="p-6">
                        <div class="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-circle-alert w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" x2="12" y1="8" y2="12"></line>
                                <line x1="12" x2="12.01" y1="16" y2="16"></line>
                            </svg>
                            <div class="space-y-2 text-sm">
                                <h4 class="font-semibold text-yellow-800">重要声明</h4>
                                <p class="text-yellow-700 leading-relaxed">本测评结果仅供参考，不构成医学诊断。如果您对结果有疑问或需要专业帮助， 建议咨询专业的心理健康专家。</p>
                                <p class="text-yellow-700 leading-relaxed">您的所有数据都安全地保存在本地设备上，我们不会收集或传输您的个人信息。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center gap-4 pt-6">
                    <router-link to="/">
                    <button 
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-house w-4 h-4 mr-2">
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                            <path
                                d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                            </path>
                        </svg>返回首页
                    </button>
                    </router-link>
                        <router-link to="/psyAgePros">
                        <button 
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 bg-psychology-primary hover:bg-psychology-primary/90"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-refresh-cw w-4 h-4 mr-2">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                            <path d="M21 3v5h-5"></path>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                            <path d="M8 16H3v5"></path>
                        </svg>重新测评</button>
                        </router-link>
                    </div>
            </main>
        </div>
    </div>

</template>
