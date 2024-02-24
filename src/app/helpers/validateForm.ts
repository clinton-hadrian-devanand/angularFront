import { FormGroup, FormControl } from "@angular/forms";

export default class validateForm{
    static validatAllField(fg:FormGroup){
        Object.keys(fg.controls).forEach(field=>{
          const control=fg.get(field);
          if(control instanceof FormGroup){
            this.validatAllField(control);
          }
          else if(control instanceof FormControl){
            control.markAsTouched({onlySelf:true});
          }
        })
      }
}