$(document).ready(function() {
    if (!localStorage.getItem('visited')) {
        // 初回訪問の場合
        // オープニングアニメーションの表示ロジックを追加
		setTimeout(function(){
			$('.start p').fadeIn(1600);
		},500); //0.5秒後にロゴをフェードイン!
		setTimeout(function(){
			$('.start').fadeOut(500);
		},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
        // Local Storageに訪問済みのフラグをセット
        localStorage.setItem('visited', 'true');
    } else{
		$('.start').hide();
	}
});