const path = location.pathname;
if(path.length >= 7 && path.slice(0,7) === "/events"){
  function join(){
    many_save_OK();
    modalAddJoin();
    DateStatusValue();
    shopStatusValue();
    
    
    
    
    
    
    
    
    
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
    //お店のスケジュールステータスの状態変化
    function shopStatusValue(){
      let shopYes = document.querySelectorAll('#shop_yes');
      let shopNo = document.querySelectorAll('#shop_no');
      let shopDelta = document.querySelectorAll('#shop_delta');
      let shopStatus = document.querySelectorAll('#shops_status');
      let shopLength = shopStatus.length;
      for (let i=0; i < shopLength; i++){
        //yesをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを１に設定
        shopYes[i].onclick = function(){
          if(shopYes[i].classList.contains('choice') == false){
            if(shopNo[i].classList.contains('choice') == true){
              shopNo[i].classList.remove('choice');
            }else if(shopDelta[i].classList.contains('choice') == true){
              shopDelta[i].classList.remove('choice');
            }
            shopYes[i].classList.add('choice');
            shopStatus[i].value = 1;
          }
        };
        //デルタをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを2に設定
        shopDelta[i].onclick = function(){
          if(shopDelta[i].classList.contains('choice') == false){
            if(shopNo[i].classList.contains('choice') == true){
              shopNo[i].classList.remove('choice');
            }else if(shopYes[i].classList.contains('choice') == true){
              shopYes[i].classList.remove('choice');
            }
            shopDelta[i].classList.add('choice');
            shopStatus[i].value = 2;
          }
        };
        //noをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを3に設定
        shopNo[i].onclick = function(){
          if(shopNo[i].classList.contains('choice') == false){
            if(shopYes[i].classList.contains('choice') == true){
              shopYes[i].classList.remove('choice');
            }else if(shopDelta[i].classList.contains('choice') == true){
              shopDelta[i].classList.remove('choice');
            }
            shopNo[i].classList.add('choice');
            shopStatus[i].value = 3;
          }
        };
      };
    }
    //日付のスケジュールステータスの状態変化
    function DateStatusValue(){
      let dateYes = document.querySelectorAll('#date_yes');
      let dateNo = document.querySelectorAll('#date_no');
      let dateDelta = document.querySelectorAll('#date_delta');
      let dateStatus = document.querySelectorAll('#schedule_status');
      let dateLength = dateStatus.length;
      for (let i=0; i < dateLength; i++){
        //yesをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを１に設定
        dateYes[i].onclick = function(){
          if(dateYes[i].classList.contains('choice') == false){
            if(dateNo[i].classList.contains('choice') == true){
              dateNo[i].classList.remove('choice');
            }else if(dateDelta[i].classList.contains('choice') == true){
              dateDelta[i].classList.remove('choice');
            }
            dateYes[i].classList.add('choice');
            dateStatus[i].value = 1;
          }
        };
        //デルタをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを2に設定
        dateDelta[i].onclick = function(){
          if(dateDelta[i].classList.contains('choice') == false){
            if(dateNo[i].classList.contains('choice') == true){
              dateNo[i].classList.remove('choice');
            }else if(dateYes[i].classList.contains('choice') == true){
              dateYes[i].classList.remove('choice');
            }
            dateDelta[i].classList.add('choice');
            dateStatus[i].value = 2;
          }
        };
        //noをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを3に設定
        dateNo[i].onclick = function(){
          if(dateNo[i].classList.contains('choice') == false){
            if(dateYes[i].classList.contains('choice') == true){
              dateYes[i].classList.remove('choice');
            }else if(dateDelta[i].classList.contains('choice') == true){
              dateDelta[i].classList.remove('choice');
            }
            dateNo[i].classList.add('choice');
            dateStatus[i].value = 3;
          }
        };
      };
    }

  }
  //モーダルウィンドウで参加者を追加できる回答フォームを出力する
  function modalAddJoin(){
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    open.addEventListener('click', () => {
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
    });

    close.addEventListener('click', () => {
      modal.classList.add('hidden');
      mask.classList.add('hidden');
    });

    mask.addEventListener('click', () => {
      close.click();
    });
  }


  window.addEventListener("load", join);
}