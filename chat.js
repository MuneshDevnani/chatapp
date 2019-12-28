var username=prompt("enter you username");
var messages=[];
var draft;
load()

function  render(){
	// body...
	var message=document.getElementById("text").value;

     if(message !== '') {
        messages.push(message); //Insert message inside Array
    }
    document.getElementById('list').innerHTML = '';    
    for(let i in messages) {
   document.getElementById("list").innerHTML +="<li style='list-style:none' id="+i+
   "><button onClick='edit(this)' id='btn'><abbr title='Edit Message'><i class='fa fa-pencil-square-o'></i></abbr></button><button onClick='deleteMessage(this)' id='btn'><abbr title='Delete Message'><i class='fa fa-trash'></i></abbr></button>" 
   + username +": " + messages[i] + "</li>";
    }
    document.getElementById("text").value="";                        
    save()
}
 

function save() {
    //This function will save our chat messages
    localStorage.mymessages = JSON.stringify(messages) //This will convert my Object array into a String
}

function load() {
    //This function will load our chat messages when we re-run the app
    messages = JSON.parse(localStorage.mymessages) //This will convert string into object
    render()
}

function edit(obj) {
    //This function will edit our chat messages

    let Id = obj.parentNode.id;
    messages[Id] = prompt("Edit your message")
    
    render()
}

function deleteMessage(obj) {
    //This function will delete message
     messages.splice(obj.parentNode.id,1)
    render()
}


function deleteAll() {
    //This function will delete all messages
   messages=[]
   render()   
}

 