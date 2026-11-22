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
document.getElementById('year').textContent=new Date().getFullYear();
