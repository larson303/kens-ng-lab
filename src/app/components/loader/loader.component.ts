import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() public isLoading: boolean = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.loaderType === LoaderType.LoadingText) {
      this.updateLoadingText();
    }
  }

  public get loadingText() { 
    return `${this.loading}${this.loadingPeriods}`; 
  }

  private loading = 'Loading';
  private loadingPeriods: string = '.';

  private updateLoadingText() {

    let currentStep = 0;

    setInterval(() => {
      const loadingSteps = ['.', '..', '...'];
      this.loadingPeriods = loadingSteps[currentStep];
      currentStep = (currentStep + 1) % 3; // Will loop back to 0 after reaching 3
    }, 500);
  }
}
