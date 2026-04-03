const cur=document.getElementById('cur'),ring=document.getElementById('ring');
let mx=0,my=0,rx=0,ry=0,cursorVisible=false;
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  cur.style.left=mx+'px';cur.style.top=my+'px';
  if(!cursorVisible){cur.classList.add('active');ring.classList.add('active');cursorVisible=true;}
});
(function a(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(a);})();
document.querySelectorAll('a, button:not(.hamburger), .toggle, .proj, input, textarea, .form-input').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.width='44px';ring.style.height='44px';ring.style.borderColor='rgba(var(--orange-rgb),.55)';});
  el.addEventListener('mouseleave',()=>{ring.style.width='28px';ring.style.height='28px';ring.style.borderColor='rgba(var(--orange-rgb),.35)';});
});

const tog=document.getElementById('tog'),pill=document.getElementById('pill');
const tDev=document.getElementById('tDev'),tData=document.getElementById('tData');
let role='dev';
function initPill(){
  pill.style.top='3px';pill.style.left=tDev.offsetLeft+'px';
  pill.style.width=tDev.offsetWidth+'px';pill.style.height=(tog.offsetHeight-6)+'px';
}
window.addEventListener('load',initPill);window.addEventListener('resize',initPill);
function sw(s,h){const se=document.getElementById(s),he=document.getElementById(h);if(se)se.style.display='';if(he)he.style.display='none';}

let typeTimeout;
function typeOut(el, text) {
  el.textContent = '';
  let i = 0;
  clearTimeout(typeTimeout);
  function typeChar() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      typeTimeout = setTimeout(typeChar, 30);
    }
  }
  typeChar();
}

function setRole(r){
  if(r===role)return; role=r;
  const tgt=r==='dev'?tDev:tData;
  pill.style.left=tgt.offsetLeft+'px'; pill.style.width=tgt.offsetWidth+'px';
  tDev.classList.toggle('on',r==='dev'); tData.classList.toggle('on',r==='data');
  document.body.classList.toggle('theme-data', r==='data');
  
  const rm = document.getElementById('h-role-main');
  const rs = document.getElementById('h-role-sub');
  
  if(r==='dev'){
    rm.textContent = 'Full-Stack Developer';
    typeOut(rs, 'Building scalable web products end to end');
    sw('ab-dev','ab-data');sw('sk-dev','sk-data');sw('pr-dev','pr-data');
    document.getElementById('sk-title').textContent='Technical Stack';
    document.getElementById('pr-title').textContent='Selected Work';
    document.getElementById('ct-sub').textContent="Whether you need a full-stack app built from the ground up, or want to take an existing product further — I'd love to hear about it.";
    document.getElementById('s1n').textContent='3+';document.getElementById('s1l').textContent='Years Coding';
    document.getElementById('s2n').textContent='3';document.getElementById('s2l').textContent='Major Projects';
    document.getElementById('s3n').textContent='2';document.getElementById('s3l').textContent='Tech Domains';
    document.getElementById('resume-btn').href = 'Navneeth_Resume_Dev.pdf';
  } else {
    rm.textContent = 'Data Analyst';
    typeOut(rs, 'Turning raw data into actionable insight');
    sw('ab-data','ab-dev');sw('sk-data','sk-dev');sw('pr-data','pr-dev');
    document.getElementById('sk-title').textContent='Data Toolkit';
    document.getElementById('pr-title').textContent='Case Studies';
    document.getElementById('ct-sub').textContent="Whether you have a data problem to solve, a pipeline to build, or insights you want surfaced — I'd love to talk.";
    document.getElementById('s1n').textContent='CS';document.getElementById('s1l').textContent='Undergraduate';
    document.getElementById('s2n').textContent='2';document.getElementById('s2l').textContent='Key Projects';
    document.getElementById('s3n').textContent='10+';document.getElementById('s3l').textContent='KPIs Delivered';
    document.getElementById('resume-btn').href = 'Navneeth_Resume_Analyst.pdf';
  }
}
tog.addEventListener('click',e=>{
  const mid=tog.getBoundingClientRect().left+tog.offsetWidth/2;
  setRole(e.clientX<mid?'dev':'data');
});

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');}),{threshold:.12});
document.querySelectorAll('.r').forEach(el=>obs.observe(el));

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});
