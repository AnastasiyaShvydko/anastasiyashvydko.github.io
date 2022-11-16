import {addTask,showAllTasks,showCurrent ,showDelited} from './utilities.js';


window.onload = showAllTasks()

const newTask = document.getElementById('new_task').value;
    const addBtn = document.getElementById('add');
    const btnDelited = document.getElementById('delited');
    const btnAll = document.getElementById('all');
    const btnCurrent = document.getElementById('current');
    
    
    addBtn.addEventListener('click', addTask)
    
    btnDelited.addEventListener('click', showDelited)
    btnAll.addEventListener('click', showAllTasks)
    btnCurrent.addEventListener('click', showCurrent)





  

   