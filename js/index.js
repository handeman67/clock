let num = 1;
const timeSet = (time) => {
  time = new Date();
  let pm=false
  let Hr = time.getHours();
  let Min = time.getMinutes();
  let Sec = time.getSeconds();
    Hr
  Min
  Sec
  if(Hr>=12){
    pm=true;
    Hr/2
    return Hr
  };

   return {Hr,Min,Sec};
 }
timeSet()
const Body= document.body;
Body.width=innerWidth;
Body.height=innerHeight;
const clock = document.getElementById("clock");
const clock_icondata = clock.getAttribute("data-icon");

const numbers = document.getElementById('numbers');
const numbers_icondata = numbers.getAttribute("data-icon");

const secondHand = document.getElementById('msec');
const sec_icondata = secondHand.getAttribute("data-icon");
secondHand.innerText = sec_icondata;



const minute2Hand = document.getElementById('sec2');
const mnExt_icondata = minute2Hand.getAttribute("data-icon");
minute2Hand.innerText = mnExt_icondata;

const hourHand = document.getElementById('hr');
const hr_icondata = hourHand.getAttribute("data-icon");
hourHand.innerText = hr_icondata;

const hourHandExt = document.getElementById('hr2');
const hrext_icondata = hourHandExt.getAttribute("data-icon");
hourHandExt.innerText = hrext_icondata;

const minHand2 = document.getElementById('min');
const min3_icondata = minHand2.getAttribute("data-icon");
minHand2.innerText = min3_icondata;


const clockwidth = innerWidth / 2;
const nums = [];
const nm = [
  ``,
  `&#9830`,
  ` &#9650;`,
  `&#9689;`
];

function Span() {
  let num = 1;
  let plus = 30;
  let multi = 30;
  // function radialSeg(IN,OUT,ID)

  while (num <= 12) {
    sn = document.createElement("div");
    sn2 = document.createElement("span");
    sn.id = "num" + num;
    sn.className = "closk num" + num;
    sn2.innerText = num; //?
    sn.append(sn2);
    sn.style = `
    position:absolute;
    width:100%;
    height:100%;
    transform-origin: center;
    transform:rotateZ(calc(` + plus + `deg) );
     `;
    sn2.style = `
     display: block;
     position:relative;   
     text-align:center;
     width:6vw;
     height:6vw;
     background:transparent;
     font-size:2em;
     z-index:100;
      `;
    nums.push(sn);
    num++;
    plus += multi
    Pushspan()

  }
 };

function Pushspan() {
  for (let n in nums) {
    wrap = document.getElementById("numbers").appendChild(nums[n])
  }
}