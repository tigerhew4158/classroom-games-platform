
(function(){
  function apply(){
    document.querySelectorAll('button,.btn,.button,input[type="button"],input[type="submit"]').forEach(function(btn){
      if(!btn.dataset.cuteBtn){
        btn.dataset.cuteBtn='1';
        btn.style.minHeight = btn.style.minHeight || '48px';
        btn.style.padding = btn.style.padding || '10px 18px';
      }
    });
    document.querySelectorAll('select,input,textarea').forEach(function(el){
      if(el.tagName==='TEXTAREA'){ el.style.lineHeight = el.style.lineHeight || '1.5'; }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', apply); else apply();
  window.addEventListener('load', apply);
})();
