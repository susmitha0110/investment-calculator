import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone:false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment=signal('0');
  enteredAnuualInvestment=signal('0');
  enteredExpectedreturn=signal('5');
  enteredDuration=signal('10');
constructor(private investmentService:InvestmentService){

}
  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment:+this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnuualInvestment(),
      expectedReturn:+this.enteredExpectedreturn(),
      duration: +this.enteredDuration(),
    })
    this.enteredInitialInvestment.set('0');
    this.enteredAnuualInvestment.set('0');
    this.enteredDuration.set('5');
    this.enteredExpectedreturn.set('10');
  }
}

