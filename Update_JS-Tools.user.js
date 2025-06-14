// ==UserScript==
// @name        Update JS-Tools
// @namespace        http://tampermonkey.net/
// @version        0.1
// @description        スクリプトツール一覧表からスクリプトツールをアップデート
// @author        Ameba Blog User
// @match        https://ameblo.jp/personwritep/entry-12762321136.html
// @match        https://ameblo.jp/personwritep/entry-12828652236.html
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameblo.jp
// @noframes
// @grant        none
// @updateURL        https://github.com/personwritep/Update_JS-Tools/raw/main/Update_JS-Tools.user.js
// @downloadURL        https://github.com/personwritep/Update_JS-Tools/raw/main/Update_JS-Tools.user.js
// ==/UserScript==



let target=document.querySelector('head');
let monitor=new MutationObserver( main );
monitor.observe(target, {childList: true});


function main(){
    let all_td=document.querySelectorAll('td');
    for(let k=0; k<all_td.length; k++){
        if(all_td[k].textContent=="♻"){
            all_td[k].style.cursor='pointer';
            all_td[k].onclick=function(){
                let link=all_td[k-1].querySelector('a');
                if(link){
                    let link_url=link.getAttribute('href');
                    let parts=link_url.split('/');
                    let tool_name=parts[parts.length-1];
                    let download_url=link_url +'/raw/main/'+ tool_name +'.user.js';
                    window.open(download_url, '_blank', );
                }
            }}}

} // main()




/*
// 一覧表のGitHubのリンクが適正かをチェックするスクリプト

let text='';

setTimeout(()=>{

for(let k=0; k<all_td.length; k++){
    if(all_td[k].textContent=="♻"){
        let pre_td=all_td[k].previousElementSibling;
        let link=pre_td.querySelector('a');
        if(link){
            let link_url=link.getAttribute('href');
            let parts=link_url.split('/');
            let tool_name=parts[parts.length-1];

           text+=tool_name+'|';
        }}}

alert(text); // リンクが不適切な場合はツール名に「main」が混入する

}, 1000);

*/

