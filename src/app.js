import { LightningElement, track} from "lwc";

export default class App extends LightningElement {
@track nome;
@track sobrenome;
resultado;

mudouNome(event){
  this.nome= String(event.target.value);
}

mudouSobrenome(event){
  this.sobrenome=String(event.target.value);
}

 converte(){
   this.resultado= this.nome.toUpperCase() +' '+ this.sobrenome.toUpperCase();
 }

}
