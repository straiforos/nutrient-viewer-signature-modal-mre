import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { from } from 'rxjs';
import NutrientViewer from '@nutrient-sdk/viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'pspdfkit-2024-1-3-to-nutrient-1.2.0';

  @ViewChild('nutrientViewer') nutrientViewer!: ElementRef;

  ngAfterViewInit(): void {
    const instance = from(NutrientViewer.load({
      baseUrl: location.origin + '/assets/',
      container: this.nutrientViewer.nativeElement,
      document: '/blob.pdf',
    }));

    instance.subscribe((instance) => {
      console.log(instance);
    });
  }
}
