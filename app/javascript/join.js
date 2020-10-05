const path = location.pathname;
if(path.length >= 7 && path.slice(0,7) === "/events"){
  function join(){
    many_save_OK();
    function many_save_OK(){
      let targetList0 = document.querySelectorAll('#schedule_status');
      let targetNum0 = targetList0.length;
      for(let i=0; i<targetNum0; i++){
        targetList0[i].removeAttribute('name','join[date_answers_attributes][0][status]')
        targetList0[i].setAttribute('name',`join[date_answers_attributes][${i}][status]`)
      }

      let targetList2 = document.querySelectorAll('#join_date_answers_attributes_0_schedule_id');
      let targetNum2 = targetList2.length;
      for(let i=0; i<targetNum2; i++){
        targetList2[i].removeAttribute('name','join[date_answers_attributes][0][schedule_id]')
        targetList2[i].setAttribute('name',`join[date_answers_attributes][${i}][schedule_id]`)
      }

      let targetList3 = document.querySelectorAll('#join_shop_answers_attributes_0_shop_id');
      let targetNum3 = targetList3.length;
      for(let i=0; i<targetNum3; i++){
        targetList3[i].removeAttribute('name','join[shop_answers_attributes][0][shop_id]')
        targetList3[i].setAttribute('name',`join[shop_answers_attributes][${i}][shop_id]`)
      }

      let targetList4 = document.querySelectorAll('#shops_status');
      let targetNum4 = targetList4.length;
      for(let i=0; i<targetNum4; i++){
        targetList4[i].removeAttribute('name','join[shop_answers_attributes][0][status]')
        targetList4[i].setAttribute('name',`join[shop_answers_attributes][${i}][status]`)
      }

      let targetList5 = document.querySelectorAll('#shops_vote');
      let targetNum5 = targetList5.length;
      for(let i=0; i<targetNum5; i++){
        targetList5[i].removeAttribute('name','join[shop_answers_attributes][0][vote]')
        targetList5[i].setAttribute('name',`join[shop_answers_attributes][${i}][vote]`)
      }
  }

}


window.addEventListener("load", join);
}