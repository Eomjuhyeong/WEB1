const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle("CLICKED_CLASS");
}

function init(){ // 초기화 함수를 만들었다. initial 약어
    title.addEventListener("click", handleClick); // mouseover를 mouseenter라고 쓴다!

}
init();

