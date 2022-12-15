document.getElementById('getText').addEventListener('click', getText); 
document.getElementById('getJSON').addEventListener('click', getJSON); 
document.getElementById('getAPI').addEventListener('click', getAPI);


class UI{
    constructor(data){
        this.data = data; 
    }

    static createUI(data){
        const outputUI = document.getElementById('output');
        outputUI.innerHTML = ''; 
        let output = '';
        output = data; 
        outputUI.innerHTML = output; 
    }

    static createPostUI(posts){
        const outputUI = document.getElementById('output');
        outputUI.innerHTML = ''; 
        posts.forEach((post)=>{
        let output =''; 
        output = `<div> <p>${post.name}</p>
                        <p>${post.email}</p>
                        <p>${post.body}</p>
                                      </div>
                                    <hr></hr>`;
                                      
        outputUI.innerHTML += output; 

        })
    }
}

function getText() {

    fetch('data/text.txt').then((res)=>{
        return res.text();
    }).then((data)=>{
        UI.createUI(data); 
    }).catch((err)=>{
        console.log(err);
    })
}

function getJSON() {

    fetch('data/data.json').then((res)=>{
        return res.json();
    }).then((data)=>{
        UI.createUI(data.name);
    }).catch((err)=>{
        console.log(err);
    })
}

function getAPI() {
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then((res)=>{
            return res.json();
        }).then((data)=>{
            UI.createPostUI(data); 
        }).catch((err)=>{
            console.log(err);
        })
    
}