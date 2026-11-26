/* CivicConnect – extras: footer actions, newsletter, info dialogs, UI polish */
(function(){
  const $=id=>document.getElementById(id);
  const INFO={
    about:["About CivicConnect","CivicConnect is a student-built demo that shows how citizens could report public issues, follow their progress and receive updates from local authorities."],
    privacy:["Privacy","This demo stores reports and newsletter sign-ups only in your own browser. Nothing is sent to a server. Do not enter sensitive personal information."],
    terms:["Terms of use","This is a demonstration project. Reports are not forwarded to any real authority. Please submit honest, respectful and factual information only."],
    access:["Accessibility","We aim for readable text, keyboard-friendly controls and a responsive layout. If you find a barrier, please email help@civicconnect.example."]
  };
  const go=(sec,anchor)=>{showSection(sec);if(anchor)setTimeout(()=>{const el=$(anchor);el&&el.scrollIntoView({behavior:"smooth",block:"start"})},80)};
  document.addEventListener("click",e=>{
    const g=e.target.closest("[data-go]");
    if(g){const [s,a]=g.dataset.go.split("#");go(s,a);return}
    if(e.target.closest("[data-open-report]")){openReport();return}
    const c=e.target.closest("[data-fcat]");
    if(c){openReport(c.dataset.fcat);return}
    const i=e.target.closest("[data-info]");
    if(i){const d=INFO[i.dataset.info];$("infoTitle").textContent=d[0];$("infoBody").textContent=d[1];$("infoModal").showModal()}
  });
  ["closeInfo","infoOk"].forEach(id=>$(id).addEventListener("click",()=>$("infoModal").close()));
  $("infoModal").addEventListener("click",e=>{if(e.target===$("infoModal"))$("infoModal").close()});
  const brand=document.querySelector(".site-header .brand");brand.addEventListener("click",ev=>{ev.preventDefault();showSection("homeSection")});
  $("ctaReportBtn").addEventListener("click",()=>openReport());

  /* newsletter */
  $("newsForm").addEventListener("submit",e=>{
    e.preventDefault();
    const inp=$("newsEmail"),v=inp.value.trim();
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){inp.classList.add("bad");showToast("Please enter a valid email address.");inp.focus();return}
    inp.classList.remove("bad");
    try{const l=JSON.parse(localStorage.getItem("cc_news")||"[]");if(!l.includes(v)){l.push(v);localStorage.setItem("cc_news",JSON.stringify(l))}}catch(_){}
    inp.value="";showToast("Thanks for subscribing!");
  });

  /* header shadow + back to top */
  const hdr=document.querySelector(".site-header"),top=$("toTop");
  const onScroll=()=>{const y=window.scrollY;hdr.classList.toggle("scrolled",y>10);top.classList.toggle("show",y>500)};
  addEventListener("scroll",onScroll,{passive:true});onScroll();
  top.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

  /* reveal on scroll */
  if("IntersectionObserver" in window){
    const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target);setTimeout(()=>x.target.classList.remove("rv","in"),800)}}),{threshold:.12});
    document.querySelectorAll(".stat-card,.category-card,.step-card,.feature-card,.help-card,.faq,.cta-band").forEach((el,i)=>{el.classList.add("rv");el.style.transitionDelay=(i%4)*60+"ms";io.observe(el)});
  }
})();
