const cohorts={
new:{title:"First-time buyers",count:[2480,7310],rate:[28,31],days:[46,44]},
repeat:{title:"Repeat buyers",count:[1260,3810],rate:[54,57],days:[29,28]},
"at-risk":{title:"At-risk customers",count:[860,2490],rate:[12,14],days:[74,72]}
};
const stages=[
["First order","All customers in the selected cohort entered through a completed purchase.","Check acquisition channel and first-order expectations.","Compare first-order messaging and customer expectations."],
["Post-purchase","Engagement after checkout is uneven across the illustrative cohort.","Review the first post-purchase touchpoint.","Compare timing and clarity of follow-up messages."],
["Return window","A meaningful share of customers have not returned during the example period.","Investigate purchase cadence and relevant product categories.","Test whether a contextual reminder is useful."],
["Second order","Only some customers complete a second purchase within the selected window.","Review friction between interest and checkout.","Compare repeat-purchase incentives against margin constraints."]
];
let cohort="new",stage=0;
function render(){let d=cohorts[cohort],i=document.getElementById("period").value==="30"?0:1;document.getElementById("cohortTitle").textContent=d.title;document.getElementById("customers").textContent=d.count[i].toLocaleString();document.getElementById("repeatRate").textContent=d.rate[i]+"%";document.getElementById("days").textContent=d.days[i];document.getElementById("stageTitle").textContent=stages[stage][0];document.getElementById("stageDesc").textContent=stages[stage][1];document.getElementById("actionTitle").textContent=stages[stage][2];document.getElementById("actionDesc").textContent=stages[stage][3];document.querySelectorAll("[data-cohort]").forEach(b=>b.classList.toggle("active",b.dataset.cohort===cohort));document.querySelectorAll("[data-stage]").forEach(b=>b.classList.toggle("active",Number(b.dataset.stage)===stage));document.getElementById("scenario").classList.add("hidden")}
document.querySelectorAll("[data-cohort]").forEach(b=>b.addEventListener("click",()=>{cohort=b.dataset.cohort;render()}));document.querySelectorAll("[data-stage]").forEach(b=>b.addEventListener("click",()=>{stage=Number(b.dataset.stage);render()}));document.getElementById("period").addEventListener("change",render);document.getElementById("simulate").addEventListener("click",()=>{let el=document.getElementById("scenario");el.classList.remove("hidden");el.textContent="Hypothesis to test: "+stages[stage][3]+" This is a proposed experiment, not a forecast or measured lift."});render();
