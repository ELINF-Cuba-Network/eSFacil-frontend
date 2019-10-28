import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlockWrapperService } from './block-wrapper.service';
import { ShareDataService } from '../../../../@shared/services/share-data.service';

@Component({
  selector: 'esfacil-block-wrapper',
  templateUrl: './block-wrapper.component.html',
  styleUrls: ['./block-wrapper.component.css']
})
export class BlockWrapperComponent implements OnInit {

  form: FormGroup;
  config;
  data;

  // Control var for only render the view went data is ready
  isReady = false;

  constructor(
    private fb: FormBuilder,
    private blockWrapperService: BlockWrapperService,
    private sharedDataService: ShareDataService
  ) {
  }

  ngOnInit() {

    // Load input form form API
    this.blockWrapperService
      .getAll()
      .subscribe(config => {
        this.config = config;

        // Get the data from shared service
        this.data = this.sharedDataService.getData();

        this.form = this.fb.group({});
        const obj = Object.assign(this.data.data, {});
        this.data = obj;

        // Ready !!
        this.isReady = true;
      });
  }

  /**
   * Validate if exist any required field empty in the data model
   */
  isValidateData(): boolean {
    // Map the JSON to Object
    const configObject = Object.assign(this.config, {});

    // Access to every data property
    for (const attr in this.data) {
      if (this.data.hasOwnProperty(attr)) {

        // Find if this property is required
        let property;
        configObject.data.forEach(dd => {
          property = dd.fields.find(fs => fs.cslfield === attr && fs.required);
        });

        // Check if property has populated
        // If is array this length must be greater than 0
        // If is a string value this length must be greater than 0
        if (property) {
          if (this.data[attr] instanceof String) {
            if (this.data[attr].trim().length === 0) {
              return false;
            }
          } else if (this.data[attr] instanceof Array) {
            if (this.data[attr].length === 0) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }

  check() {
    console.log(this.isValidateData());
  }

}
