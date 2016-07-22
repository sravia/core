import {NgbdPopoverBasic} from './basic/popover-basic';
import {NgbdPopoverTplcontent} from './tplcontent/popover-tplcontent';
import {NgbdPopoverTriggers} from './triggers/popover-triggers';

export const DEMO_DIRECTIVES = [NgbdPopoverBasic, NgbdPopoverTplcontent, NgbdPopoverTriggers];

export const DEMO_SNIPPETS = {
  basic: {raw: {code: `import {Component} from '@angular/core';
import {NGB_POPOVER_DIRECTIVES, NgbPopoverWindow} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-popover-basic',
  templateUrl: './popover-basic.html',
  directives: [NGB_POPOVER_DIRECTIVES],
  precompile: [NgbPopoverWindow]
})
export class NgbdPopoverBasic {
}
`, markup: `<button type="button" class="btn btn-secondary" placement="top"
        ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." title="Popover on top">
  Popover on top
</button>

<button type="button" class="btn btn-secondary" placement="right"
        ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." title="Popover on right">
  Popover on right
</button>

<button type="button" class="btn btn-secondary" placement="bottom"
        ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." title="Popover on bottom">
  Popover on bottom
</button>

<button type="button" class="btn btn-secondary" placement="left"
        ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." title="Popover on left">
  Popover on left
</button>
`}, hl: {}},
  tplcontent: {raw: {code: `import {Component} from '@angular/core';
import {NGB_POPOVER_DIRECTIVES, NgbPopoverWindow} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-popover-tplcontent',
  templateUrl: './popover-tplcontent.html',
  directives: [NGB_POPOVER_DIRECTIVES],
  precompile: [NgbPopoverWindow]
})
export class NgbdPopoverTplcontent {
  name = 'World';
}
`, markup: `<p>
  Popovers can contain any arbitrary HTML, Angular bindings and even directives!
  Simply enclose desired content in a <code>&lt;template&gt;</code> element.
</p>

<template #popContent>Hello, <b>{{name}}</b>!</template>
<button type="button" class="btn btn-secondary" [ngbPopover]="popContent" title="Fancy content">
  I've got markup and bindings in my popover!
</button>
`}, hl: {}},
  triggers: {raw: {code: `import {Component} from '@angular/core';
import {NGB_POPOVER_DIRECTIVES, NgbPopoverWindow} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-popover-triggers',
  templateUrl: './popover-triggers.html',
  directives: [NGB_POPOVER_DIRECTIVES],
  precompile: [NgbPopoverWindow]
})
export class NgbdPopoverTriggers {
}
`, markup: `<p>
  You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.
</p>

<button type="button" class="btn btn-secondary" ngbPopover="You see, I show up on hover!" triggers="mouseenter:mouseleave" title="Pop title">
  Hover over me!
</button>

<hr>
<p>
  Alternatively you can take full manual control over popover opening / closing events.
</p>

<button type="button" class="btn btn-secondary" ngbPopover="What a great tip!" triggers="manual" #p="ngbPopover" (click)="p.open()" title="Pop title">
  Click me to open a popover
</button>
<button type="button" class="btn btn-secondary" (click)="p.close()">
  Click me to close a popover
</button>
`}, hl: {}}
};
