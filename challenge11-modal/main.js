// モーダル要素の取得
const getModal = document.getElementById('easyModal');

// 開くボタン取得
const getOpenBtn = document.getElementById('modalOpen');

// 閉じるボタン取得
const getCloseBtn = document.getElementsByClassName('modalClose')[0];// `getElementsByClassName` だと、style.displayを使用するときに、配列を取得結果として返す -> そのため[0]が必要

// クリックで開くイベントリスナー
getOpenBtn.addEventListener('click', open);

// クリックで閉じるイベントリスナー
getCloseBtn.addEventListener('click', close);

// モーダル以外の場所クリックのイベントリスナー
getModal.addEventListener('click', event);


// モーダルオープンの関数
function open() {
    getModal.style.display = 'block';
}

// モーダルを閉じる関数
function close() {
    getModal.style.display = 'none';
    // getCloseBtnでx印を取得しているため、モーダルではなく、x印が消えてます
}

// モーダル以外がクリックされた時に閉じる関数
window.onclick = function modalClose(event){
    console.log(event);
    if(event.target == getModal) {
        getModal.style.display = "none";
    }
}