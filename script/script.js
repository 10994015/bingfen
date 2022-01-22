const {ref, reactive, onMounted} = Vue;
const App = {
    setup(){
        
        const nav = reactive([
            {name:'關於我們',url:'###'},
            {name:'關於我們',url:'###'},
            {name:'關於我們',url:'###'},
            {name:'關於我們',url:'###'},
            {name:'關於我們',url:'###'},
        ]);
        const imglist = reactive([
            {url:'./styles/images/banner/banner1.png'},
            {url:'./styles/images/banner/banner2.png'},
            {url:'./styles/images/banner/banner3.png'},
        ])
        const openMenu = ref(false);
        const imgIdx = ref(0);
        
        const dotsHtml = ref('');
        for(let d=0;d<imglist.length;d++){
            dotsHtml.value +='<p class="dot dot'+d+'"></p>';
        }
        const dot = document.getElementsByClassName('dot');
        const handopenMenu = ()=>{
            openMenu.value = !openMenu.value;
        }
        const imgslide = document.getElementsByClassName('imgslide');
        
        setInterval(()=>{
            rightimg();
        },5000)
        const slide = ()=>{
            for(let i=0;i<imgslide.length;i++){
                imgslide[i].style.transform = `translateX(-${imgIdx.value}00%)`;
            }
            dot[imgIdx.value].style.backgroundColor = '#FFF100';
        }
        
        const leftimg = ()=>{
            imgIdx.value--;
            resetDot();
            if(imgIdx.value < 0){
                imgIdx.value = imgslide.length - 1;
            }
            slide();
        }
        const rightimg = ()=>{
            imgIdx.value++;
            resetDot();
            if(imgIdx.value > imgslide.length - 1){
                imgIdx.value = 0;
            }
            slide();
        }
        const resetDot = ()=>{
            for(let d=0;d<dot.length;d++){
                dot[d].style.backgroundColor = "#fff";
            }
        }
        const handDot = e=>{
            imgIdx.value = Number(e.target.className.replace('dot dot','').trim());
            resetDot();
            for(let i=0;i<imgslide.length;i++){
                imgslide[i].style.transform = `translateX(-${imgIdx.value}00%)`;
            }
            dot[imgIdx.value].style.backgroundColor = '#FFF100';
            // console.log(Number(e.target.className.replace('dot dot','').trim()));
        }
        onMounted(()=>{
            for(let t=0;t<dot.length;t++){
                dot[t].addEventListener('click',handDot);
            }
            dot[imgIdx.value].style.backgroundColor = '#FFF100';
        })

        
        return {nav,
                openMenu,
                leftimg,
                rightimg,
                handopenMenu,
                rightimg,
                leftimg,
                imglist,
                dotsHtml,
                handDot};
                
    }
};
Vue.createApp(App).mount('#app');