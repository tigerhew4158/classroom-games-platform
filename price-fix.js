// Correct the all-template promotional price from RM300 to RM400.
(function applyAllTemplatePriceFix(){
  function fixPriceCopy(){
    try {
      if (typeof TEMPLATE_COPY !== 'undefined') {
        const replacements = {
          zh: '原价 RM790｜特惠 RM400',
          en: 'Total RM790｜Promo RM400',
          ms: 'Jumlah RM790｜Promosi RM400'
        };

        Object.keys(replacements).forEach(function(lang){
          const plans = TEMPLATE_COPY[lang] && TEMPLATE_COPY[lang].plans;
          if (Array.isArray(plans) && plans.length) {
            plans[plans.length - 1][1] = replacements[lang];
          }
        });
      }

      if (typeof I18N !== 'undefined') {
        if (I18N.zh) I18N.zh.allAccessDesc = '原价 RM790，特惠 RM400，包含未来新开发游戏';
        if (I18N.en) I18N.en.allAccessDesc = 'Total RM790, promo RM400, including future new games';
        if (I18N.ms) I18N.ms.allAccessDesc = 'Jumlah RM790, promosi RM400, termasuk permainan baharu akan datang';
      }

      if (typeof render === 'function') {
        render();
      } else {
        document.querySelectorAll('.plan-card b').forEach(function(el){
          el.textContent = el.textContent
            .replace('特惠 RM300', '特惠 RM400')
            .replace('Promo RM300', 'Promo RM400')
            .replace('Promosi RM300', 'Promosi RM400');
        });
      }
    } catch (error) {
      console.error('Unable to apply RM400 price correction:', error);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixPriceCopy, { once: true });
  } else {
    fixPriceCopy();
  }
})();
