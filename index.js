const title = document.getElementById('title');
const description = document.getElementById('description');
const submitBtn = document.getElementById('submit');
const bottomSection = document.querySelector('.bottom-section')

let taskArray = [];



const displayTask = () =>{

  // get all task from localStorage
  const getTaskFromLocalStorage = JSON.parse(localStorage.getItem('allTask'));

  console.log('data from lc',getTaskFromLocalStorage)

  // if no task in localStorage then set value to empty array
  const getAllTask = getTaskFromLocalStorage || [];

  console.log(getAllTask,'data stored in aaray')

  bottomSection.innerHTML= getAllTask.map((task)=>(
    `
      <div class="task">
        <h4>title: ${task.taskTitle}</h4>
        <h6>Desc: ${task.taskDesc}</h6>
      </div>
    `
  )).join("");

}

submitBtn.addEventListener('click',()=>{
  const newTask = ({taskTitle:title.value,taskDesc:description.value});

  const fetchTaskFromLS = JSON.parse(localStorage.getItem("allTask"))
  // data is presented then store the data after that add new task
  if(fetchTaskFromLS){
    taskArray=[...fetchTaskFromLS,newTask]
  }else{
    taskArray.push(newTask)
  }
  localStorage.setItem("allTask",JSON.stringify(taskArray));
  displayTask();

  // set empty value to input
  title.value='';
  description.value=''
});

window.onload = () => displayTask()