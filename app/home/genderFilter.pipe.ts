import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'genderFilter'
})
export class genderPipe implements PipeTransform {
  transform(value: any[], gender: any): any {
  	
  	if (!value) 
	{
		return; 
	} else if(!gender || gender === 'all') {
  		return value; 	
  	} 
      
    return value.filter(function(user) {
    	return user.sex.includes(gender);
    });
  }
}