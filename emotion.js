function replaceText() {

if(document.getElementById("emocomment")) {

bodyText = document.getElementById("emocomment");
theText = bodyText.innerHTML;

// replace
theText = theText.replace(/:\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif" alt=":)"   style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif" alt=":("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/;\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif" alt=";)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:D/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif" alt=":D"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/8=\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif" alt="8=)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/~:V~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/6.gif" alt="~:V~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-\?/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif" alt=":-?"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:x/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif" alt=":x"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:R~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/9.gif" alt=":R~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:P/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif" alt=":P"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-\*/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif" alt=":-*"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/=\(\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif" alt="=(("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-O/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif" alt=":-O"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/X\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif" alt="X("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/15.gif" alt=":~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/B-\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/16.gif" alt="B-)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-S/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/17.gif" alt=":-S"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/S:-#/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/18.gif" alt="S:-#"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/~:v/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/19.gif" alt="~:v"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:{\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif" alt=":{("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:#/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif" alt=":#"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:\|/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/22.gif" alt=":|"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-k/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/23.gif" alt=":-k"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/=\)\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif" alt="=))"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/O:-/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/25.gif" alt="O:-"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-B/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/26.gif" alt=":-B"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/=;/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/27.gif" alt="=;"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-c/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/101.gif" alt=":-c"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-]/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/100.gif" alt=":-]"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-{\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif" alt=":-{("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-h/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/103.gif" alt=":-h"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-t/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/104.gif" alt=":-t"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/8-~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/105.gif" alt="8-~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/I-\|/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/28.gif" alt="I-|"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/8-\|/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/29.gif" alt="8-|"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/L-\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/30.gif" alt="L-)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-@/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/31.gif" alt=":-@"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-U/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/32.gif" alt=":-U"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/\[-\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/33.gif" alt="[-("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:O\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/34.gif" alt=":O)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/8-}/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/35.gif" alt="8-}"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/~:-P/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/36.gif" alt="~:-P"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/\(:=\|/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/37.gif" alt="(:=|"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/=P~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/38.gif" alt="=P~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:=q/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/39.gif" alt=":=q"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/#-o/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/40.gif" alt="#-o"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/=D~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/41.gif" alt="=D~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:=SS/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/42.gif" alt=":=SS"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/@-\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/43.gif" alt="@-)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:\^o/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/44.gif" alt=":^o"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-w/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/45.gif" alt=":-w"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/:-~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/46.gif" alt=":-~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/~:=p/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/47.gif" alt="~:=p"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText = theText.replace(/~\):=\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/48.gif" alt="~):=)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');

bodyText.innerHTML = theText;

}



if(document.getElementById("emocommentls")) {

bodyText1 = document.getElementById("emocommentls");
theText1 = bodyText1.innerHTML;

theText1 = theText1.replace(/:\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif" alt=":)"   style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif" alt=":("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/;\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif" alt=";)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:D/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif" alt=":D"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/8=\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif" alt="8=)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/~:V~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/6.gif" alt="~:V~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-\?/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif" alt=":-?"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:x/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif" alt=":x"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:R~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/9.gif" alt=":R~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:P/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif" alt=":P"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-\*/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif" alt=":-*"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/=\(\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif" alt="=(("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-O/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif" alt=":-O"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/X\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif" alt="X("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/15.gif" alt=":~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/B-\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/16.gif" alt="B-)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-S/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/17.gif" alt=":-S"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/S:-#/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/18.gif" alt="S:-#"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/~:v/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/19.gif" alt="~:v"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:{\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif" alt=":{("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:#/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif" alt=":#"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:\|/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/22.gif" alt=":|"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-k/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/23.gif" alt=":-k"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/=\)\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif" alt="=))"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/O:-/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/25.gif" alt="O:-"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-B/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/26.gif" alt=":-B"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/=;/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/27.gif" alt="=;"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-c/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/101.gif" alt=":-c"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-]/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/100.gif" alt=":-]"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-{\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif" alt=":-{("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-h/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/103.gif" alt=":-h"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-t/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/104.gif" alt=":-t"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/8-~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/105.gif" alt="8-~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/I-\|/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/28.gif" alt="I-|"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/8-\|/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/29.gif" alt="8-|"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/L-\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/30.gif" alt="L-)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-@/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/31.gif" alt=":-@"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-U/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/32.gif" alt=":-U"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/\[-\(/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/33.gif" alt="[-("  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:O\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/34.gif" alt=":O)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/8-}/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/35.gif" alt="8-}"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/~:-P/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/36.gif" alt="~:-P"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/\(:=\|/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/37.gif" alt="(:=|"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/=P~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/38.gif" alt="=P~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:=q/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/39.gif" alt=":=q"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/#-o/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/40.gif" alt="#-o"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/=D~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/41.gif" alt="=D~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:=SS/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/42.gif" alt=":=SS"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/@-\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/43.gif" alt="@-)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:\^o/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/44.gif" alt=":^o"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-w/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/45.gif" alt=":-w"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/:-~/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/46.gif" alt=":-~"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/~:=p/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/47.gif" alt="~:=p"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');
theText1 = theText1.replace(/~\):=\)/g,'<img src="http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/48.gif" alt="~):=)"  style="border-width: 0px; padding: 0pt; vertical-align: middle;" />');

bodyText1.innerHTML = theText1;
}

}