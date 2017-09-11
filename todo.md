# app

### Login cu modal pt reautentificare daca editarea este activa

### De revazut logica pt refresh

http://jasonwatmore.com/post/2016/12/01/angular-2-communicating-between-components-with-observable-subject
s
### Validare vizuala formular inainte de submit

```typescript
this.RegisterForm1.controls["form control name"].updateValueAndValidity();
```
sau

```typescript
this.formGp.controls['checkboxFld'].valueChanges.observer({
    next: (value) => {
       this.formGp.controls['numberFld'].updateValueAndValidity();
    }
});
```
### div cu search gol

```html
  <md-card *ngIf="emptySearchResult">
    <span>Nu am gasit nici un membru cu datele {{searchForm.value.searchMem}}</span>
  </md-card>
```


## Certificat
- are asociat unul sau mai multe DLP

1. Stare Certificat - se calculeaza pe baza data_start si data_end:
    - Draft nu are data_start si data_end
    - Activ are data_start
    - Inactiv are data_start si data_end

## DLP
- este asociat unui Certificat
- contine cel putin o Asigurare

1. Stare DLP - se calculeaza pe baza data_start si data_end:
    - Draft are data_start mai mare ca azi
    - Activ are data_end mai mare ca azi
    - Inactiv este inchis si are data_end mai mica ca azi

2. Workflow: 

## Asigurare
- are asociat un singur grup de specialitati medicale

## Grup de specialitati medicale

- are asociat unul sau mai multe specialitati medicale

# Modificare api

## Pt asigurare noua
```php
 $query = "insert into mem_asig (id_mem, id_asigurator, polita_serie, polita_nr, data_start, data_end, id_dlp) values (?,?,?,?,?,?,?)";
 ```
 in

 ```php
  $query = "insert into mem_asig (id_mem, id_asigurator, id_dlp, polita_serie, polita_nr, data_start, data_end) values (?,?,?,?,?,?,?)";
  ```
