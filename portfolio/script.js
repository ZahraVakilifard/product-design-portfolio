'use strict';
const stages=[
  {label:'STAGE 01 / DISCOVER',title:'A strong first impression.',copy:'Explore the starting point of this illustrative customer journey.'},
  {label:'STAGE 02 / FIRST ORDER',title:'The first conversion matters.',copy:'Compare where first-time shoppers progress and where they pause.'},
  {label:'STAGE 03 / RETURN',title:'The second purchase is the challenge.',copy:'Only 33% of this fictional cohort returned. Explore possible reasons before recommending an action.'}
];
document.querySelectorAll('.journey-step').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.journey-step').forEach(el=>el.classList.toggle('is-active',el===button));
  const stage=stages[Number(button.dataset.stage)];
  document.getElementById('insight-label').textContent=stage.label;
  document.getElementById('insight-title').textContent=stage.title;
  document.getElementById('insight-copy').textContent=stage.copy;
}));
const startingPoints=1450;
document.querySelectorAll('.reward-option').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.reward-option').forEach(el=>{const selected=el===button;el.classList.toggle('selected',selected);el.setAttribute('aria-pressed',String(selected));});
  const cost=Number(button.dataset.cost);
  document.getElementById('points-balance').textContent=(startingPoints-cost).toLocaleString('en-CA');
  document.getElementById('selected-reward').textContent=button.dataset.name;
  document.getElementById('reward-cost').textContent=`${cost.toLocaleString('en-CA')} points redeemed`;
}));
const amount=document.getElementById('reward-amount');
amount.addEventListener('input',()=>{const value=`$${amount.value}`;document.getElementById('amount-label').textContent=value;document.getElementById('art-value').textContent=value;document.querySelector('.reward-art-bottom span').textContent=`GIVE ${value}, GET ${value}`;});
document.querySelectorAll('.swatch').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.swatch').forEach(el=>{const active=el===button;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
  document.getElementById('reward-art').className=`reward-art theme-${button.dataset.theme}`;
}));
const cases={
  signal:{title:'SIGNAL',label:'01 / PRODUCT STRATEGY',description:'An exploratory concept for turning customer-retention metrics into a navigable journey.',question:'How might we help merchants understand the story behind repeat-purchase behavior?',idea:'Connect customer stages, evidence, and possible interventions in a single investigative workspace.',next:'Interview merchants, test whether journey exploration improves comprehension, and prototype realistic cohort filters.'},
  loop:{title:'LOOP',label:'02 / VISUAL & INTERACTION',description:'A playful reward experience designed to make points understandable and choices tangible.',question:'How might rewards feel valuable without making checkout more complicated?',idea:'Use live point balances, clear tradeoffs, and expressive visual feedback to make redemption easy to understand.',next:'Test comprehension and redemption flows, including insufficient points, expired rewards, and accessibility needs.'},
  launchpad:{title:'LAUNCHPAD',label:'03 / CREATIVE TOOLS',description:'A visual onboarding concept that makes loyalty setup feel like making, not form-filling.',question:'How might merchants configure a loyalty program without guessing what customers will see?',idea:'Pair direct controls with an immediate shopper-facing preview, plus rule validation and reversible edits.',next:'Prototype saving, validation, and multi-step workflows; compare visual setup with a conventional wizard.'}
};
const dialog=document.getElementById('case-dialog');
document.querySelectorAll('[data-case]').forEach(button=>button.addEventListener('click',()=>{
  const item=cases[button.dataset.case];
  for(const [id,value] of Object.entries({'dialog-title':item.title,'dialog-label':item.label,'dialog-description':item.description,'dialog-question':item.question,'dialog-idea':item.idea,'dialog-next':item.next}))document.getElementById(id).textContent=value;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
document.getElementById('year').textContent=new Date().getFullYear();
