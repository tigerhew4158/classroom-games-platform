
(function(){
  function enhance(){
    document.querySelectorAll('button,.btn,.button,input[type="button"],input[type="submit"]').forEach(function(el){
      el.classList.add('cgp-pop');
      if(!el.dataset.cgpSized){
        const txt=(el.textContent||el.value||'').trim();
        if(txt.length<=6){ el.style.minHeight = el.style.minHeight || '46px'; el.style.padding = el.style.padding || '10px 16px'; }
        else { el.style.minHeight = el.style.minHeight || '48px'; el.style.padding = el.style.padding || '10px 18px'; }
        el.dataset.cgpSized='1';
      }
    });
    document.querySelectorAll('.option,.choice,.choice-btn,.answer-btn,.category-btn,.drop-zone,.target-btn').forEach(function(el){
      if(el.tagName!=='BUTTON'){
        el.style.borderRadius = el.style.borderRadius || '16px';
        el.style.boxShadow = el.style.boxShadow || '0 8px 20px rgba(15,23,42,.12)';
        el.style.transition = el.style.transition || 'transform .15s ease, box-shadow .15s ease, filter .15s ease';
      }
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded', enhance);}else{enhance();}
  window.addEventListener('load', enhance);
})();
