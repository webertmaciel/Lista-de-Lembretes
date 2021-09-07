let t = document.getElementById('inputTask')
let h = document.getElementById('inputClock')
let li = document.getElementById('taskList')
function createTask(){
   let t_nova_li = t.value;
   let h_nova_li = h.value;
   let nova_li = `<li>${t_nova_li} - ${h_nova_li}</li>`
   li.innerHTML += nova_li;
}