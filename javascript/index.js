function Info (name,lastname,category,date) { 
    this.name=name;
    this.lastname=lastname;
    this.category=category;
    this.date=date;
 }

 function UI () { 

  }

  UI.prototype.addInfo=function (info) { 
      const list = document.querySelector("#infolist");

      var html = `
         <tr>
            <td>${info.name}</td>
            <td>${info.lastname}</td>
            <td>${info.category}</td>
            <td>${info.date}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
         </tr>    
    `;

    list.innerHTML += html;
   }

   UI.prototype.clear = function(){
    const name = document.getElementById('name').value="";
    const lastname = document.getElementById('lastname').value="";
    const category = document.getElementById('category').value="";
    const date = document.getElementById('date').value="";
}

UI.prototype.deleteInfo = function(element){
    if(element.classList.contains('delete')){
        element.parentElement.parentElement.remove();
    }
}

UI.prototype.Alert = function(message,className){
    
    var alert = `
        <div class="alert alert-${className}">
            ${message}
        </div>    
    `;

    const row = document.querySelector('.row');
    row.insertAdjacentHTML('beforeBegin',alert);

    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },3000);

}


document.getElementById('form').addEventListener('submit',function(e){

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    const info = new Info(name,lastname,category,date);

    const ui = new UI();

    if(name==='' || lastname ==='' || category === '' || date===""){
        ui.Alert('Pleace enter...','warning');
    }else{
        ui.addInfo(info); 

        ui.clear();

        ui.Alert('Info added','success');
    }

    e.preventDefault();
});

document.getElementById('infolist').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteInfo(e.target);
});

var wellcome= text =>(
    text.split(" ")
)
console.log(wellcome("modern java kursu"))