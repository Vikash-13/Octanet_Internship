let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
  if(input.value==""){
    alert("Blank Task");
  }else{
  let item=document.createElement("li");
  item.innerText=input.value;
  const task = input.value;
  if (task) {
      localStorage.setItem('tasks', JSON.stringify([...JSON.parse(localStorage.getItem('tasks') || '[]'), task]));
      // input.value = '';
  }
  let p=document.createElement("h3");
      p.innerText=`Task added successfully`;
      p.style.color="green";
      p.style.marginTop="25px";
      ul.append(p);
      input.value="";
      setTimeout(() => {
        p.innerText="";
      }, 5000);
    }
  });
let delbtns=document.querySelectorAll(".delete");
for(btns of delbtns){
  btns.addEventListener("click",function(){
    let para=this.parentElement;
    para.remove();
  });
}

let view_task=document.querySelector(".view_task");
{
view_task.addEventListener("click",function(){
  window.open("home.html","_self");
})
}