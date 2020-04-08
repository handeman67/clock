const uniicon = [];

const nums = [];
const nm = [
  diams = '&#9830;',
  note1 = '&#9833;',
  note2 = '&#9834;',
  note3 = '&#9835;',
  note4 = '&#9836;',
  hearts = '&#9829;',
  spades = '&#9824;',
  clubs = '&#9827;',
  sun = '&#9788;',
  moon = '&#9789;',
  doubleln='&#9868;',
  dottedln='&#9867;',
  singleln='&#9866;',
  envelope='&#9993;',
  X='&#10006;',
  check='	&#10004;',
  sparkle='&#10024;',
  lp='&#10094;',
  rp='&#10095;',
  one='&#10112;',
  two='&#10113;',
  three='&#10114;',
  four='&#10115;',
  five='&#10116;',
  six='&#10117;',
  seven='&#10118;',
  eight='&#10119;',
  nine='&#10120;',
  ten='&#10121;'
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
     font-size:1.5em;
     z-index:100;
      `;
    nums.push(sn);
    num++;
    plus += multi
    Pushspan()

  }
  clock.style = `


`

  //   setInterval(() => {while(num>0){
  //   s=num
  //   if(s>4){s=0
  //   sn.innerText =nm[s]
  // }  }}, 100);

}