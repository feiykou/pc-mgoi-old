import Vue from 'vue';
import Anchor from '@/utils/anchor'

Vue.mixin({
    methods: {
        $seo(title, content, payload=[]){
            return {
                title,
                meta: [{
                  hid: 'description',
                  name: 'description',
                  content
                }].concat(payload)
            }
        }
    }
})

// 锚点
Vue.directive('anchor', Anchor)

// hover-class
Vue.directive('hoverClass', {
    bind(el, binding) {
        let timeoutflag  = null
        let timer = new Date()
        el.onmouseenter = () => {
            if( (new Date() - timer) < 200 ){
                clearTimeout(timeoutflag)
            }
            el.classList.add(binding.value)
        }
        el.onmouseleave = () => {
            timer = new Date()
            if(!binding.value) return;
            timeoutflag = setTimeout(function(){
                el.classList.remove(binding.value)
            },300)
        }
    }
})