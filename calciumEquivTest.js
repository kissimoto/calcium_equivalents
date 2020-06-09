
function CalcElem(obj) {
   const vElem     = obj.Elemental.value;
   const kElem     = 1;
   convert(vElem, kElem, obj);
}

function CalcMEq(obj) {
   const vmEq      = obj.mEq.value;
   const kmEq      = 20.039;
   convert(vmEq, kmEq, obj);
}

function CalcMmol(obj) {
   const vmmol      = obj.mmol.value;
   const kmmol      = 40.078;
   convert(vmmol, kmmol, obj);
}

function CalcCaCl(obj) {
   const vCaCl      = obj.CaCl.value;
   const kCaCl      = 272.53;
   convert(vCaCl, kCaCl, obj);
}

function CalcCaClVol(obj) {
   const vCaClVol      = obj.CaClVol.value;
   const kCaClVol      = 27.253;
   convert(vCaClVol, kCaClVol, obj);
}

function CalcCaGlu(obj) {
   const vCaGlu      = obj.CaGlu.value;
   const kCaGlu      = 92.981;
   convert(vCaGlu, kCaGlu, obj)
}

function CalcCaGluVol(obj) {
   const vCaGluVol      = obj.CaGluVol.value;
   const kCaGluVol      = 9.2981;
   convert(vCaGluVol, kCaGluVol, obj);
}

function CalcCaAcet(obj) {
   const vCaAcet      = obj.CaAcet.value;
   const kCaAcet      = 253.37;
   convert(vCaAcet, kCaAcet, obj);
}

function CalcCaCarb(obj) {
   const vCaCarb      = obj.CaCarb.value; 
   const kCaCarb      = 399.18;
   convert(vCaCarb, kCaCarb, obj);
}

function CalcCaCitr(obj) {
   const vCaCitr      = obj.CaCitr.value; 
   const kCaCitr      = 210.53;
   convert(vCaCitr, kCaCitr, obj);
}

function CalcCaGlub(obj) {
   const vCaGlub      = obj.CaGlub.value;  
   const kCaGlub      = 65.728;
   convert(vCaGlub, kCaGlub, obj);
}

// Reused Functions. (elCa equals mg Elemental Ca for every g of salt)

function convert(amount, elCa, obj, round) {

   const vElem     = Math.round(amount /   1     * elCa *   10) /   10;
   const vmEq      = Math.round(amount /  20.039 * elCa *  100) /  100;
   const vmmol     = Math.round(amount /  40.078 * elCa *  100) /  100;
   const vCaCl     = Math.round(amount / 272.53  * elCa * 1000) / 1000;
   const vCaClVol  = Math.round(amount /  27.253 * elCa *  100) /  100;
   const vCaGlu    = Math.round(amount /  92.981 * elCa * 1000) / 1000;
   const vCaGluVol = Math.round(amount /   9.2981* elCa *  100) /  100;
   const vCaCarb   = Math.round(amount / 399.18  * elCa * 1000) / 1000;


   // Copy values to object form
   obj.Elemental.value= FNum(vElem);
   obj.mEq.value      = FNum(vmEq);
   obj.mmol.value     = FNum(vmmol);
   obj.CaCl.value     = FNum(vCaCl);
   obj.CaClVol.value  = FNum(vCaClVol);
   obj.CaGlu.value    = FNum(vCaGlu);
   obj.CaGluVol.value = FNum(vCaGluVol);
   obj.CaCarb.value   = FNum(vCaCarb);

}

function FNum(num) {
//      if ((num < 1) && (num >= 0.1))
//         num = "0" + num;
      return num;
}

// s="";
// for(i in document) s+=i+":"+ document[i]+"\n";
// alert(s);

