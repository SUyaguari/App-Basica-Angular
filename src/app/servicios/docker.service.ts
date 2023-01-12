import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Correo } from '../domain/correo';
import { Registro } from '../domain/registro';

@Injectable({
  providedIn: 'root'
})
export class DockerService {

  constructor(private http: HttpClient) { }

  getRegistro(){
    let url = "http://34.125.50.44:8080/proyectoWeb/ws/persona";
    return this.http.get<any>(url);
  }

  // getRegistroRespaldo(){
  //   let url = "http://34.97.211.99:8080/proyectoWeb/ws/persona";
  //   return this.http.get<any>(url);
  // }

  setRegistros(registro: Registro){
    let url = "http://34.125.50.44:8080/proyectoWeb/ws/persona/ingreso";
    return this.http.post<any>(url, registro);
  }

  // setRegistrosRespaldo(registro: Registro){
  //   console.log("a", registro)
  //   let url = "http://34.97.211.99:8080/proyectoWeb/ws/persona/ingreso";
  //   return this.http.post<any>(url, registro);
  // }

//   enviar(destinatario: Correo ){
//     console.log(destinatario)
//     let url = "http://35.228.79.87:8080/enviarMail/ws/correo/Enviar";
//     //let url = "http://localhost:8080/enviarMail/ws/correo/Enviar";
//     return this.http.post<any>(url, destinatario)
//   }

//   enviarRespaldo(destinatario: Correo ){
//     let url = "http://34.125.140.206:8080/enviarMail/ws/correo/Enviar";
//     //let url = "http://localhost:8080/enviarMail/ws/correo/Enviar";
//     return this.http.post<any>(url, destinatario)
//   }
  
}
