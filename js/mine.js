var siteName = document.getElementById('siteName');
var siteurl = document.getElementById('siteURL');
var btn = document.getElementById('btn');

if (JSON.parse( localStorage.getItem('sites')) == null){
  sitenames = []
}else{
  sitenames =JSON.parse( localStorage.getItem('sites'))
}


function addsite(){
  if (validationsite() == true && validationurl()){
  var sites = {
    sitename : siteName.value,
    siteURL : siteurl.value
  };
  sitenames.push(sites);
  localStorage.setItem('sites',JSON.stringify(sitenames))
  viewsite();
}
}
viewsite()
var search1 = document.getElementById('search')
function search(){
  var str = ''
  for(var i=0;i<sitenames.length;i++){
    if (sitenames[i].sitename.toLowerCase().includes(search1.value.toLowerCase())){
      str += 
      `<div class="well row">
          <h2> ${sitenames[i].sitename}</h2>
          <div class="mx-5">
            <button class="btn btn-primary"><a href="${sitenames[i].siteURL}"style = 'color : white;' target = '_blank'>vist</a></button>
            <button class="btn btn-danger "onclick = 'del(${i})'>delete</button>
            <button class="btn btn-danger "onclick = 'update1(${i})' id='upd'>update</button>
  
          </div>
      </div>`
    }
    document.getElementById("vv").innerHTML = str

  }
}




function del(x){
  sitenames.splice(x,1)
  localStorage.setItem('sites',JSON.stringify(sitenames))
  viewsite()

}

function update1(c){
  var abda = document.getElementById('btn')
  siteName.value = sitenames[c].sitename
  siteurl.value = sitenames[c].siteURL

  abda.innerHTML = 'update'
  abda.onclick = function(){
    sitenames[c].sitename = siteName.value
    sitenames[c].siteURL = siteurl.value
    viewsite()
    abda.innerHTML = 'submit'

    abda.onclick =  addsite
    
    localStorage.setItem('sites',JSON.stringify(sitenames))
    
  }
  
}
function viewsite(){
  var view = ""
  for(var i = 0;i<sitenames.length;i++){
    view += 
    `<div class="well row">
        <h2> ${sitenames[i].sitename}</h2>
        <div class="mx-5">
          <button class="btn btn-primary"><a href="${sitenames[i].siteURL}"style = 'color : white;' target = '_blank'>vist</a></button>
          <button class="btn btn-danger "onclick = 'del(${i})'>delete</button>
          <button class="btn btn-danger "onclick = 'update1(${i})' id='upd'>update</button>

        </div>
    </div>`
  };
  document.getElementById("vv").innerHTML = view
}
var alert1 = document.getElementById("alert")

function validationsite(){
  var re = /([A-Z][a-z0-9]{1,13})/
  if(re.test(siteName.value)){
    siteName.classList.remove("is-invalid")
    siteName.classList.add("is-valid")
    alert1.classList.add("d-none")

    return true
  }
  else{
    siteName.classList.add("is-invalid")
    alert1.classList.remove("d-none")
    return false
  }
}
var alert2 = document.getElementById("alert2")

function validationurl(){
var e = /(https?:\/\/)(www\.)?([A-z0-9]+\.)(com|net|org)(\/)?/
console.log(e.test(siteurl.value))
  if(e.test(siteurl.value)){
    siteurl.classList.remove("is-invalid")
    siteurl.classList.add("is-valid")
    alert2.classList.add("d-none")
    
    return true
  }
  else{
    siteurl.classList.add("is-invalid")
    alert2.classList.remove("d-none")

    return false
  }
}
siteName.addEventListener("keyup",validationsite)
siteurl.addEventListener("keyup",validationurl)