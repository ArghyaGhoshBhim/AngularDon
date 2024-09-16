import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'custom-card-header',
  standalone: true,
  template: `
    <h3>{{ text }}</h3>
    <ng-content></ng-content>
  `,
})
export class CustomCardHeader {
  text = 'Hi all I am from CustomCardHeader';
}

@Component({
  selector: 'custom-card-action',
  standalone: true,
  template: `
    <h2>From CustomCardAction</h2>
    {{ text }}
  `,
})
export class CustomCardAction {
  @Input() text: string = '';
}

@Component({
  selector: 'custom-card',
  imports: [CustomCardHeader, CustomCardAction],
  standalone: true,
  template: `<custom-card-header>Visit sunny California!</custom-card-header>
    <custom-card-action text="text in CustomCardAction 1" />
    <custom-card-action text="text in CustomCardAction 2" /> `,
})
export class CustomCard {
  @ViewChild(CustomCardHeader) header: CustomCardHeader | undefined;
  @ViewChildren(CustomCardAction) actions:
    | QueryList<CustomCardAction>
    | undefined;
  ngAfterViewInit() {
    console.log(
      'Hi am CustomCardHeader from ViewChild in CustomCard: ',
      this.header?.text
    );
    this.actions?.forEach((action) => {
      console.log('Hi am custom card action from ViewChildren: ', action.text);
    });
  }
}

@Component({
  selector: 'custom-toggle',
  standalone: true,
  template: `
    <h2>Hi am from CustomToggle</h2>
    <ng-content />
  `,
})
export class CustomToggle {
  text: string | undefined;
}
@Component({
  selector: 'custom-expando',
  standalone: true,
  template: `
    <div #myEle>
      <h2>Hi am form CustomExpando</h2>
      <ng-content />
    </div>
  `,
})
export class CustomExpando {
  @ContentChild(CustomToggle) toggle: CustomToggle | undefined;
  @ViewChild('myEle') ele: ElementRef | undefined;

  ngAfterContentInit() {
    console.log('ContentChild from CustomExpando', this.toggle?.text);
    console.log('ContentChild from CustomExpando', this.toggle);
    // Resul will be undefined
    console.log(
        'ContentChild element from CustomExpando: ',
        this.ele?.nativeElement
      );
  }

  ngAfterViewInit(){
    console.log(
        'ContentChild element from CustomExpando: ',
        this.ele?.nativeElement
      );
  }
}

@Component({
  selector: 'user-profile',
  standalone: true,
  imports: [CustomExpando, CustomToggle],
  template: `
    <h1>View content</h1>
    <custom-expando>
      <custom-toggle>Show</custom-toggle>
    </custom-expando>
  `,
})
export class UserProfile {}

@Component({
  selector: 'children-with-queries-fun',
  imports: [CustomCard, UserProfile],
  standalone: true,
  template: `
    <h1>children.with.queries.fun.ts</h1>
    <custom-card />
    <user-profile />
  `,
})
export class ChildrenWithQueries {}
