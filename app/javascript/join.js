const path = location.pathname;
const query = location.search;
if(path.length >= 7 && path.slice(0,7) === "/events"){
  function join(){
    manySaveOk();
    DateStatusValue();
    shopStatusValue();
    if(query.includes('join_id')){
      transEditLabel();
      shopEditStatusValue();
      DateEditStatusValue();
    } else {
      modalAddJoin();
    }
    
    
    
    
    
    
    
    
    
    function manySaveOk(){
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
        // valueがnullなら初期値の2を与える。
        if(shopStatus[i].value != 1 && shopStatus[i].value != 2 && shopStatus[i].value != 3){
          shopStatus[i].value = 2;
        }
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
      //ループカウンタを変数dcとする
      let dc=0;
      for (let i=0; i < dateLength; i++){
        // 初回のメソッドループ内のみ、valueの値に応じて、◯×△にチョイスを与える。
        if(dc < dateLength && dateStatus[i].value == 1){
          dateDelta[i].classList.remove('choice');
          dateYes[i].classList.add('choice');
        } else if(dc < dateLength && dateStatus[i].value == 3){
          dateDelta[i].classList.remove('choice');
          dateNo[i].classList.add('choice');
        }
        // valueがnullなら初期値の2を与える。
        if(dateStatus[i].value != 1 && dateStatus[i].value != 2 && dateStatus[i].value != 3){
          dateStatus[i].value = 2;
        }
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
        dc++;
      };
    }
  }
  //モーダルウィンドウで参加者を追加できる回答フォームを出力する
  function modalAddJoin(){
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    open.onclick = function(){
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
    };

    close.onclick = function(){
      modal.classList.add('hidden');
      mask.classList.add('hidden');
    };
  }

  // 編集フォームに一覧表の日付：時間、お店：urlの項目を追加する
  function transEditLabel(){
    let transSaveDate = document.querySelectorAll('#trans_savedate');
    let transSaveTime = document.querySelectorAll('#trans_savetime');
    let transShopName = document.querySelectorAll('#trans_shop_name');
    let transShopUrl = document.querySelectorAll('#trans_shop_url');
    let passSaveDate = document.querySelectorAll('#pass_savedate');
    let passSaveTime = document.querySelectorAll('#pass_savetime');
    let passShopName = document.querySelectorAll('#pass_shop_name');
    let passShopUrl = document.querySelectorAll('#pass_shop_url');
    let transSaveLength = transSaveDate.length;
    let transShopLength = transShopName.length;
    for (let i=0; i < transSaveLength; i++){
      transSaveDate[i].innerHTML = passSaveDate[i].innerHTML;
      transSaveTime[i].innerHTML = passSaveTime[i].innerHTML;
    }
    for (let d=0; d < transShopLength; d++){
      transShopUrl[d].innerHTML = passShopUrl[d].innerHTML;
      transShopName[d].innerHTML = passShopName[d].innerHTML;
    }
  }
  function manyEditSaveOk(){
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
  function shopEditStatusValue(){
    let shopEditYes = document.querySelectorAll('#shop_edit_yes');
    let shopEditNo = document.querySelectorAll('#shop_edit_no');
    let shopEditDelta = document.querySelectorAll('#shop_edit_delta');
    let shopEditStatus = document.querySelectorAll('#shops_edit_status');
    let shopEditLength = shopEditStatus.length;
    for (let i=0; i < shopEditLength; i++){
      // valueがnullなら初期値の2を与える。
      if(shopEditStatus[i].value != 1 && shopEditStatus[i].value != 2 && shopEditStatus[i].value != 3){
        shopEditStatus[i].value = 2;
      }
      //yesをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを１に設定
      shopEditYes[i].onclick = function(){
        if(shopEditYes[i].classList.contains('choice') == false){
          if(shopEditNo[i].classList.contains('choice') == true){
            shopEditNo[i].classList.remove('choice');
          }else if(shopEditDelta[i].classList.contains('choice') == true){
            shopEditDelta[i].classList.remove('choice');
          }
          shopEditYes[i].classList.add('choice');
          shopEditStatus[i].value = 1;
        }
      };
      //デルタをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを2に設定
      shopEditDelta[i].onclick = function(){
        if(shopEditDelta[i].classList.contains('choice') == false){
          if(shopEditNo[i].classList.contains('choice') == true){
            shopEditNo[i].classList.remove('choice');
          }else if(shopEditYes[i].classList.contains('choice') == true){
            shopEditYes[i].classList.remove('choice');
          }
          shopEditDelta[i].classList.add('choice');
          shopEditStatus[i].value = 2;
        }
      };
      //noをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを3に設定
      shopEditNo[i].onclick = function(){
        if(shopEditNo[i].classList.contains('choice') == false){
          if(shopEditYes[i].classList.contains('choice') == true){
            shopEditYes[i].classList.remove('choice');
          }else if(shopEditDelta[i].classList.contains('choice') == true){
            shopEditDelta[i].classList.remove('choice');
          }
          shopEditNo[i].classList.add('choice');
          shopEditStatus[i].value = 3;
        }
      };
    };
  }

  //日付のスケジュールステータスの状態変化
  function DateEditStatusValue(){
    let dateEditYes = document.querySelectorAll('#date_edit_yes');
    let dateEditNo = document.querySelectorAll('#date_edit_no');
    let dateEditDelta = document.querySelectorAll('#date_edit_delta');
    let dateEditStatus = document.querySelectorAll('#schedule_edit_status');
    let dateEditLength = dateEditStatus.length;
    //ループカウンタを変数dcとする
    let dc=0;
    for (let i=0; i < dateEditLength; i++){
      // 初回のメソッドループ内のみ、valueの値に応じて、◯×△にチョイスを与える。
      if(dc < dateEditLength && dateEditStatus[i].value == 1){
        dateEditDelta[i].classList.remove('choice');
        dateEditYes[i].classList.add('choice');
      } else if(dc < dateEditLength && dateEditStatus[i].value == 3){
        dateEditDelta[i].classList.remove('choice');
        dateEditNo[i].classList.add('choice');
      }
      // valueがnullなら初期値の2を与える。
      if(dateEditStatus[i].value != 1 && dateEditStatus[i].value != 2 && dateEditStatus[i].value != 3){
        dateEditStatus[i].value = 2;
      }
      //yesをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを１に設定
      dateEditYes[i].onclick = function(){
        if(dateEditYes[i].classList.contains('choice') == false){
          if(dateEditNo[i].classList.contains('choice') == true){
            dateEditNo[i].classList.remove('choice');
          }else if(dateEditDelta[i].classList.contains('choice') == true){
            dateEditDelta[i].classList.remove('choice');
          }
          dateEditYes[i].classList.add('choice');
          dateEditStatus[i].value = 1;
        }
      };
      //デルタをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを2に設定
      dateEditDelta[i].onclick = function(){
        if(dateEditDelta[i].classList.contains('choice') == false){
          if(dateEditNo[i].classList.contains('choice') == true){
            dateEditNo[i].classList.remove('choice');
          }else if(dateEditYes[i].classList.contains('choice') == true){
            dateEditYes[i].classList.remove('choice');
          }
          dateEditDelta[i].classList.add('choice');
          dateEditStatus[i].value = 2;
        }
      };
      //noをクリックした時にchoiceクラスの追加、それ以外のフォームのchoiceクラスの削除、フォームのバリューを3に設定
      dateEditNo[i].onclick = function(){
        if(dateEditNo[i].classList.contains('choice') == false){
          if(dateEditYes[i].classList.contains('choice') == true){
            dateEditYes[i].classList.remove('choice');
          }else if(dateEditDelta[i].classList.contains('choice') == true){
            dateEditDelta[i].classList.remove('choice');
          }
          dateEditNo[i].classList.add('choice');
          dateEditStatus[i].value = 3;
        }
      };
      dc++;
    };
  }
  window.addEventListener("load", join);
}