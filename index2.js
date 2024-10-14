// let array = []
let localData = localStorage.getItem("addArray") ;
let array =  !localData?[] : JSON.parse(localData)
let addStudent = document.getElementById("addStudent") ;
   addStudent.addEventListener('click',()=>{
      let studentName = document.getElementById("studentName").value.trim().toUpperCase();
      if(studentName == ''){
         alert ("please enter your name")
      }
      else if (studentName >= 0){
         alert('name does contain numbers')
      }else{
      //   (array.findIndex(x => x.name == studentName)== -1)
      // let me = {
      //    name :studentName,
      //    id : 10002 + array.length + 1
      //   }
      //   alert('name have been added successfully')
      //     update()    
      //   array.push(me)
      //   console.log(array); 
      
if (array.findIndex(x => x.name === studentName) !== -1) {
   alert('This name has already been added.');
}else{
   let me = {
      name: studentName,
      id: 10002 + array.length + 1  
   };
   array.push(me);
   alert('Name has been added successfully');
   update();
   console.log(array);
   
}
   }
   })
   let searchName = document.getElementById("searchStudent");
   searchStudent.addEventListener(('click'),()=>{
      let studentId = document.getElementById("studentId").value.trim().toUpperCase();
      let idStudent = studentId ;
      if(idStudent == ''){
         alert('please input a student ID')
      }else{
         array.forEach(all =>{
            if(all.id == idStudent){
               alert("student was found")
               console.log(all);
            }
         })
      }
   })
   let searchBtn = document.getElementById("searchBtn") ;
   searchBtn.addEventListener(('click'),()=>{
         let searchName = document.getElementById("searchName").value.trim().toUpperCase() ;
         let nameSearch = searchName
        let studentIndex = array.findIndex((x) => x.name == nameSearch);
        let responseName = document.getElementById("responseName") ;
        responseName.innerText = `they index of they student name you entered is ${studentIndex}`
          console.log(studentIndex);
   })

   function showAllStudentData() {
      let response2 = document.getElementById("response2");
      
      let namesList = "";
      array.forEach(all => {
          namesList += all.name + "\n"; 
      });
      response2.innerText = namesList;
  }
   function update (){
      localStorage.setItem("addArray", JSON.stringify(array))
}