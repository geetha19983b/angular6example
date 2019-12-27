import { Directive, KeyValueChangeRecord, KeyValueDiffer, KeyValueDiffers, OnInit, IterableChangeRecord, Input, Renderer2, IterableDiffers, IterableDiffer, ElementRef } from "@angular/core";

@Directive({
  selector: '[nbClass]'
})
export class NbClassDirective {
  private iterableDiffer: IterableDiffer<string> | null;
  @Input() nbClass = [];

  constructor(private host: ElementRef,private renderer: Renderer2, private iterable: IterableDiffers) {
    this.iterableDiffer = this.iterable.find(this.nbClass).create();
  }

  ngOnInit() {
    this.nbClass.forEach(klass => {
      this.renderer.addClass(this.host.nativeElement, klass)
    });
  }

  ngDoCheck() {
    const klassChanges = this.iterableDiffer.diff(this.nbClass);
    console.log(klassChanges)
    if (klassChanges) {

      klassChanges.forEachAddedItem((record: IterableChangeRecord<any>) => {
        this.renderer.addClass(this.host.nativeElement, record.item);
        console.log('forEachAddedItem - ', record.item, record.currentIndex);
      });

      klassChanges.forEachRemovedItem((record: IterableChangeRecord<any>) => {
        this.renderer.removeClass(this.host.nativeElement, record.item);
        console.log('forEachRemovedItem - ', record.item);
      });

      klassChanges.forEachMovedItem((record: IterableChangeRecord<any>) => {
        console.log('forEachMovedItem - ', record.item, record.previousIndex, record.currentIndex);
      });

    }

  }

}


