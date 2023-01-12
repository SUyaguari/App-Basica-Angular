import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DockerService } from './servicios/docker.service';
import { Registro } from './domain/registro';
import { Correo } from './domain/correo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PracticaSockets';

  registrito: Registro = new Registro();
  correo : Correo =  new Correo();
  vector : any;
  respuesta : any;
  errorGet = null;
  errorPost: any;
  errorCorreo: any;
  constructor(private serviceDocker: DockerService, private router: Router) { }

  ngOnInit(): void{
    this.llenar()
  }

  enviar(){

    this.serviceDocker.setRegistros(this.registrito).subscribe(data =>{
      //this.validado()
      console.log(data);
      this.cambio()
      },(error)=>{
      //console.log(this.registrito)
      //this.errorPost=error
      //this.serviceDocker.setRegistrosRespaldo(this.registrito).subscribe(data =>{console.log(data)})
      //this.validado()
    })
    
    
  }

  // validado(){
  //   this.correo.correo = this.registrito.correo;
  //   this.serviceDocker.enviar(this.correo).subscribe(data =>{
  //     console.log(data)
  //     this.cambio()
  //   }, (error:any)=>{
  //       this.serviceDocker.enviarRespaldo(this.correo).subscribe(data =>{
  //         console.log(data)})
  //       this.cambio()
  //   })
    
  // }

  cambio(){
    this.llenar()
    this.registrito = new Registro();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['principal'])
  }

  llenar(){

    this.serviceDocker.getRegistro().subscribe((res: any[]) => this.vector = res, (error: any)=> {
      //this.serviceDocker.getRegistroRespaldo().subscribe((res: any[]) => this.vector = res)
    });
    console.log("YES ",this.vector)
  }
  
}
