import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'pspdfkit-2024-1-3-to-nutrient-1.2.0';

  @ViewChild('nutrientViewer') nutrientViewer!: ElementRef;

  ngAfterViewInit(): void {
    const instance = from(PSPDFKit.load({
      baseUrl: location.origin + '/assets/',
      container: this.nutrientViewer.nativeElement,
      document: '/blob.pdf',
    }));

    instance.subscribe((instance) => {
      console.log(instance);
    });
  }
}
