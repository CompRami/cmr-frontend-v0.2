import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormValidatorsService } from './form-validators.service';
import { Adresa } from '../shared/interfaces/contact.interface';

@Injectable()
export class FormSetService {

  constructor(
    private _fb: FormBuilder,
    private _validator: FormValidatorsService
  ) { }

  adresa(data: Adresa) {
    if (data) {
      const formGroup = this._fb.group({
        'id_adresa': [data.id_adresa],
        'id_mem': [data.id_mem, [Validators.required, this._validator.checkIfNumber]],
        'tip': [data.tip, [Validators.required]],
        'tara_id': [data.tara_id, [Validators.required, this._validator.checkIfNumber]],
        'jud_id': [data.jud_id, [Validators.required, this._validator.checkIfNumber]],
        'localit': [data.localit, [Validators.required]],
        'cod_post': [data.cod_post, [Validators.required, this._validator.checkIfNumber]],
        'strada': data.strada,
        'nr': data.nr,
        'bl': data.bl,
        'scara': data.scara,
        'ap': data.ap,
        'tel': data.tel,
        'detinator_adresa': data.detinator_adresa,
        'fax': data.fax,
        'email': [data.email],
        'web': data.web,
        'obs': data.obs
      });
      Object.keys(data).forEach(
        key => {
          if (data[key] === '0000-00-00' || data[key] === 0) {
            data[key] = '';
          }
        }
      );
      formGroup.patchValue(data);
      return formGroup;
    }
    const formGroupEmpty = this._fb.group({
      'id_adresa': null,
      'id_mem': [localStorage.getItem('currentMemId'), [Validators.required, this._validator.checkIfNumber]],
      'tip': [null, [Validators.required]],
      'tara_id': [1183, [Validators.required, this._validator.checkIfNumber]],
      'jud_id': [localStorage.getItem('userGroup'), [Validators.required, this._validator.checkIfNumber]],
      'localit': ['', [Validators.required]],
      'cod_post': ['', [Validators.required, this._validator.checkIfNumber]],
      'strada': '',
      'nr': '',
      'bl': '',
      'scara': '',
      'ap': '',
      'tel': '',
      'detinator_adresa': '',
      'fax': '',
      'email': '',
      'web': '',
      'obs': ''
    });
    return formGroupEmpty;
  }

}