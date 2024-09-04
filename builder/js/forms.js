class Form {

     constructor(controls, action) {
          this.controls = controls;
          this.action = action;
     }

     getContent(){
          return `<form method="post" action="${this.action}">
               ${this.controls.reduce((ac, c) => {
                    return ac + `<div>
                         ${this.getLabel(c)}
                         ${this.getInput(c)}
                    </div>`;
          
               }, "")}
               <input type="submit" value="Enviar">
          </form>`;
     }

     getLabel(control){
          return `<label>${control.text}</label>`
     }

     getInput(control){
          return `<input type="${control.type}" name="${control.name}">`;
     }

}

class FormBuilder {

     constructor() {
        this.reset();
     }

     reset(){
          this.controls = [];
          this.action = "";
     }

     setAction(action) {
          this.action = action;
          return this;
     }

     setText(name, text) {
          this.controls.push({ name: name, text: text, type: "text" });
          return this;
     }
     
     setEmail(name, text) {
          this.controls.push({ name: name, text: text, type: "email" });
          return this;
     }

     setCheckBox(name, text) {
          this.controls.push({ name: name, text: text, type: "checkbox" });
          return this;
     }

     setColor(name, text) {
          this.controls.push({ name: name, text: text, type: "color" });
          return this;
     }

     build() {
          const frm = new Form(this.controls, this.action);
          this.reset();
          return frm;
     }

}

const frmBuilder = new FormBuilder();
const formPeople = frmBuilder.setAction("add.php")
                             .setText("firstName", "Nombre")
                             .setText("lastName", "Apellidos")
                             .setCheckBox("bebedor", "Es chingon?")
                             .setColor("color", "Color")
                             .build();
console.log(formPeople);

form1.innerHTML = formPeople.getContent();

const formEmail = frmBuilder.setAction("add.php")
                            .setText("name", "Nombre")      
                            .setText("email", "Correo electrónico")
                            .build();
console.log(formEmail);
form2.innerHTML = formEmail.getContent();  