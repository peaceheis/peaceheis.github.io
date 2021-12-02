var counter = 0;
var albums = ['url(neo.jpg)', 'url(oko.jpg)', 'url(CLICK.jpg)']
function setupArt() {
    setInterval(changeArt, 2000);
    }

function changeArt() {
    //var list_entries = ["portfolio-1", "portfolio-2", "portfolio-3"]
    var list = document.getElementsByClassName("album-art");
    for(var a=[], i=list.length; i;) {
        a[--i]=list[i];
    }
    a.forEach(element => element.style.backgroundImage=albums[counter]);
    

    
    if (counter === colors.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
}