/* Department of Attorney General: shared header, nav and footer.
   Use:  <script src="https://migovt.org/ag/partials.js" data-part="header"></script>
         <script src="https://migovt.org/ag/partials.js" data-part="footer"></script> */
(function(){
  var s=document.currentScript;
  if(!s)return;
  var part=s.getAttribute('data-part');
  /* Always load the current stylesheet: the version tag defeats stale browser/host caches. Bump it when shared.css changes. */
  if(part==='header'){var l=document.createElement('link');l.rel='stylesheet';l.href='https://migovt.org/ag/shared.css?v=20261118';document.head.appendChild(l);}

  var HEADER=`<div class="banner" role="note"><div class="wrap"><i aria-hidden="true">!</i>
  <span><strong>This is not an official government website.</strong> This site is a simulated government interface and does not represent any real government body or authority.</span></div></div>

<header class="top">
  <div class="wrap top-in">
    <a class="brand" href="https://migovt.org/ag/"><img class="logo" src="https://migovt.org/ag/images/logo.png" alt="">
      <span><small>State of Michigan</small><b>Department of Attorney General</b></span></a>
    <button class="menu-btn" id="menuBtn" type="button" aria-expanded="false" aria-controls="mainNav">Menu</button>
    <nav class="main" id="mainNav" aria-label="Main">
      <ul>
        <li><a href="https://migovt.org/ag/">Home</a></li>
        <li><a href="https://migovt.org/ag/about/">About</a></li>
        <li class="has-sub"><a href="https://migovt.org/ag/legal/">Legal</a><ul class="sub"><li><a href="https://migovt.org/ag/legal/opinions/">Opinions</a></li><li><a href="https://migovt.org/ag/legal/litigation/">Litigation and representation</a></li><li><a href="https://migovt.org/ag/legal/foia/">FOIA Requests</a></li><li><a href="https://migovt.org/ag/legal/resources/">Legal resources</a></li><li><a href="https://migovt.org/ag/legal/self-help/">Self-help</a></li></ul></li>
        <li class="has-sub"><a href="https://migovt.org/ag/criminal/">Criminal</a><ul class="sub"><li><a href="https://migovt.org/ag/criminal/reports/">Reports</a></li><li><a href="https://migovt.org/ag/criminal/investigations/">Investigations</a></li></ul></li>
        <li class="has-sub"><a href="https://migovt.org/ag/corrections/">Corrections</a><ul class="sub"><li><a href="https://migovt.org/ag/corrections/inmates/">Inmate information and lookup</a></li><li><a href="https://migovt.org/ag/corrections/complaints/">Complaints</a></li><li><a href="https://migovt.org/ag/corrections/policies/">Policies</a></li></ul></li>
        <li><a href="https://migovt.org/ag/careers/">Careers</a></li>
        <li><a href="https://migovt.org/ag/contact/">Contact</a></li>
        <li><a class="cta" href="https://migovt.org/ag/tips/">Submit a Tip</a></li>
      </ul>
    </nav>
  </div>
</header>`;

  var FOOTER=`<footer>
  <div class="f-top"><div class="wrap">
    <a class="f-brand" href="https://migovt.org/ag/"><img class="logo" src="https://migovt.org/ag/images/logo.png" alt="">
      <span><small>State of Michigan</small><b>Department of Attorney General</b></span></a>
    <div class="f-cols">
      <div class="f-col"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
        <div><strong>Department of Attorney General</strong><p>State of Michigan</p></div></div>
      <div class="f-col"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>
        <div><a href="https://migovt.org/ag/contact/">Contact the Department</a><a href="https://migovt.org/ag/tips/">Submit a tip</a></div></div>
      <div class="f-col"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>
        <div><a href="https://migovt.org/ag/legal/opinions/">Attorney General opinions</a><a href="https://migovt.org/ag/legal/foia/">FOIA requests</a></div></div>
    </div>
  </div></div>
  <div class="wrap">
    <div class="f-links">
      <div class="fc"><a class="hd" href="https://migovt.org/ag/about/">About</a><a href="https://migovt.org/ag/about/">About the Department</a><a href="https://migovt.org/ag/careers/">Careers</a><a href="https://migovt.org/ag/contact/">Contact</a><a href="https://migovt.org/ag/legal/foia/">FOIA requests</a></div>
      <div class="fc"><a class="hd" href="https://migovt.org/ag/legal/">Legal</a><a href="https://migovt.org/ag/legal/opinions/">Opinions</a><a href="https://migovt.org/ag/legal/litigation/">Litigation and representation</a><a href="https://migovt.org/ag/legal/foia/">FOIA requests</a><a href="https://migovt.org/ag/legal/resources/">Legal resources</a><a href="https://migovt.org/ag/legal/self-help/">Self-help</a></div>
      <div class="fc"><a class="hd" href="https://migovt.org/ag/criminal/">Criminal</a><a href="https://migovt.org/ag/criminal/reports/">Reports</a><a href="https://migovt.org/ag/criminal/investigations/">Investigations</a><a href="https://migovt.org/ag/tips/">Submit a tip</a></div>
      <div class="fc"><a class="hd" href="https://migovt.org/ag/corrections/">Corrections</a><a href="https://migovt.org/ag/corrections/inmates/">Inmate lookup</a><a href="https://migovt.org/ag/corrections/complaints/">Complaints</a><a href="https://migovt.org/ag/corrections/policies/">Policies</a></div>
    </div>
    <div class="f-more">
      <a href="https://migovt.org/legislature/">Michigan Legislature</a><a href="https://migovt.org/courts/">Michigan Courts</a><a href="https://migovt.org/courts/case-search/">Court case search</a><span class="q">Looking for court services? <a href="https://migovt.org/courts/">Visit Michigan Courts</a></span>
    </div>
    <div class="f-fine">This is not an official government website. This site is a simulated government interface and does not represent any real government body or authority.</div>
  </div>
</footer>
<button class="top-btn" id="topBtn" type="button" aria-label="Back to top">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 15 7-7 7 7"/></svg>TOP</button>`;

  var clean=function(u){return u.split(/[?#]/)[0].replace(/\/$/,'')};

  if(part==='header'){
    s.insertAdjacentHTML('beforebegin',HEADER);
    var menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('mainNav');
    menuBtn.addEventListener('click',function(){
      var o=nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded',o);
      menuBtn.textContent=o?'Close':'Menu';
    });
    var here=clean(location.href);
    nav.querySelectorAll('a').forEach(function(a){
      if(!a.classList.contains('cta')&&clean(a.href)===here)a.classList.add('cur');
    });
    /* dropdowns: on touch screens the first tap opens the menu, the second follows the link */
    nav.querySelectorAll('li.has-sub>a').forEach(function(a){
      a.addEventListener('click',function(e){
        if(innerWidth<=1180||!matchMedia('(hover:none)').matches)return;
        var li=a.parentNode;
        if(!li.classList.contains('open')){
          e.preventDefault();
          nav.querySelectorAll('li.open').forEach(function(x){x.classList.remove('open')});
          li.classList.add('open');
        }
      });
    });
    document.addEventListener('click',function(e){
      if(!e.target.closest('nav.main li.has-sub'))nav.querySelectorAll('li.open').forEach(function(x){x.classList.remove('open')});
    });
  }else if(part==='footer'){
    s.insertAdjacentHTML('beforebegin',FOOTER);
    var topBtn=document.getElementById('topBtn'),tick=false;
    topBtn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
    addEventListener('scroll',function(){
      if(tick)return;tick=true;
      requestAnimationFrame(function(){topBtn.classList.toggle('show',scrollY>600);tick=false});
    },{passive:true});
  }
})();