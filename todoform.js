

let todoarray = JSON.parse(sessionStorage.getItem("todolist")) || []

const query = new URLSearchParams(location.search)
const editid = query.get("id")
console.log(editid);


if(editid){
   heading.textContent = "Edit TODO"
   const tododetails = todoarray.find(todo=> todo.id==editid)
   titleinput.value = tododetails.title
   dateinput.value = tododetails.date
   completed.checked = tododetails.status
}



todolistform.addEventListener('submit', (e) => {

   e.preventDefault()

   if (editid) {
    const tododetails = todoarray.find(todo=> todo.id==editid)

   tododetails.title = titleinput.value 
   tododetails.date = dateinput.value 
   tododetails.status = completed.checked
   }
   else{
   todoarray.push({
      id: Date.now(),
      title: titleinput.value,
      date: dateinput.value,
      status: completed.checked
   })
}
   console.log(todoarray);

   sessionStorage.setItem("todolist", JSON.stringify(todoarray))

   location.href = 'index.html'

})