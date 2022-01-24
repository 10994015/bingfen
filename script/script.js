const {ref, reactive, onMounted} = Vue;
const App = {
    setup(){
        const lorem = ref(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sapiente sequi rem maxime aliquid quod adipisci odit! Iusto, doloribus. Quo sed ratione dolorum dolores amet hic harum, eius aperiam aut.
        Odit eaque inventore quae molestiae unde et quis numquam natus harum, voluptas ipsum quibusdam necessitatibus, deserunt modi consectetur sequi ut nulla mollitia. Laboriosam, sapiente quisquam incidunt quam quod laborum animi.`);
        const nav = reactive([
            {name:'關於我們',url:'###'},
            {name:'關於我們',url:'###'},
            {name:'關於我們',url:'###'},
            {name:'關於我們',url:'###'},
            {name:'關於我們',url:'###'},
            {name:'關於我們',url:'###'},
        ]);
        const title = reactive([
            {title:"幫助您進行課程規劃"},
            {title:"人才培育"},
            {title:"場地租借"},
        ]);
        const imglist = reactive([
            {url:'./styles/images/banner.jpg'},
        ])
        const stepItem = reactive([
            {class:'fas fa-user-graduate',text:'大學以上學歷',rightopen:true},
            {class:'fas fa-glasses',text:'參加培訓課程',rightopen:true},
            {class:'far fa-building',text:'參加見習',rightopen:true},
            {class:'fas fa-stamp',text:'取得證明',rightopen:true},
            {class:'fas fa-chalkboard-teacher',text:'成為專業教師',rightopen:false},
        ])
        const siteItem = reactive([
            {img:"./styles/images/a.jpg",title:"冰芬美語"},
            {img:"./styles/images/b.jpg",title:"約翰小學"},
            {img:"./styles/images/c.jpg",title:"卡爾中學"},
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
                lorem,
                openMenu,
                title,
                handopenMenu,
                rightimg,
                leftimg,
                imglist,
                dotsHtml,
                handDot,
                stepItem,
                siteItem,};
                
    }
};
Vue.createApp(App).mount('#app');