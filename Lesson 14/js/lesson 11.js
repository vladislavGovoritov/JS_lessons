//lesson 11
let age = document.getElementById('age');

function showUser(surname, name) {
    alert(`Пользователь  ${surname}  ${name} , его возраст  ${this.value}`);
}

showUser.apply(age, ["Говоритов", "Владислав"]);






//lesson 12
class Options {
    constructor(height, width, bg, fontSize, textAlign) {
     this.height = height;
     this.width = width;
     this.bg = bg;
     this.fontSize = fontSize;
     this.textAlign = textAlign;
    }
    getDiv() {
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        
        
        let param = `height: ${this.height}px; width: ${this.width}px; background-color:${this.bg}; fon-size${this.fontSize}px; text-align: ${this.textAlign}`;
        newDiv.textContent = "hello!";
        newDiv.style.cssText = param;
        

        
        
    }
}

let obj = new Options(200,250,'gold',10, 'center');

obj.getDiv();