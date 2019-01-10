
let i,j;
const acc = document.getElementsByClassName("accordion");
    for(i = 0; i < acc.length; i++){
        acc.item(i).addEventListener("click", function(){                
            var sub = this.parentNode.nextElementSibling.firstElementChild;
            if(sub.style.display === 'none' || sub.style.display ===  ''){
                sub.style.display = 'grid';
                document.getElementById(this.id).innerHTML = 'Show Less';
                
                console.log("shalom is here" + this.id);
            }
            else{
                sub.style.display = 'none';
                document.getElementById(this.id).innerHTML = 'Show More';
            }
                    
        });
    }

function showNavBar() {
    var x = document.getElementById("main-nav-id");
    if (x.className === "main-nav") {
        x.className += " responsive";
    } else {
        x.className = "main-nav";
    }
}