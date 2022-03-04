//custom pipe

import {Pipe, PipeTransform} from '@angular/core'; 
@Pipe ({ 
   name : 'random'
}) 
export class RandomPipe implements PipeTransform {
   transform(val:number) : number {
      return Math.random();
   }
}