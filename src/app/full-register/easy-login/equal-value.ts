import {AbstractControl,FormGroup } from '@angular/forms';

export const test = (group : AbstractControl) : {[key: string]: any} | null => {
    const  password = group.get('password');
    const passwordConfirm = group.get('passwordConfirm');
  
    if(!password || !passwordConfirm) return null;
    return password.value === passwordConfirm.value ? null : {noMatch: true};
  
  }