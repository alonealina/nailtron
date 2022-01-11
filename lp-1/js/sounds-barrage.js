	   function Keycheck() {
        var ele = document.getElementById('kc01'); 
        if(
        ele.className=="kc01"
        )
        {
                return true;
        }else
        {
                return false;
        }
   };


function sound()
{

		if(Keycheck()==false){return;}
	// 対象となるID名
	var id = 'sound-file' ;

	// 初回以外だったら音声ファイルを巻き戻す
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
	{

		document.getElementById( id ).currentTime = 0;
	}

	// [ID:sound-file]の音声ファイルを再生[play()]する
	document.getElementById( id ).play() ;
	

	
	return;
}