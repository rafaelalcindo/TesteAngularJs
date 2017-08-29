import { Component, OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, Input
 } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck,
AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {

@Input() valorInicial: number = 10;  

  constructor() {
    this.log("constructor");
   }

   ngOnChanges(){
     this.log('ngOnChanges');
   }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngOnDestroy(){
    this.log("ngOnDestroy");
  }

  private log(hook: string){
    console.log(hook);
  }

}
