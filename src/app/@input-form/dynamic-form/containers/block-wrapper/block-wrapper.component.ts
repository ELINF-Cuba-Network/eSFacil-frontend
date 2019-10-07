import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlockWrapperService } from './block-wrapper.service';

@Component({
  selector: 'esfacil-block-wrapper',
  templateUrl: './block-wrapper.component.html',
  styleUrls: ['./block-wrapper.component.css']
})
export class BlockWrapperComponent implements OnInit {

  form: FormGroup;
  config;
  data = {
    'author': [
      {
        'family': 'Ailyn',
        'given': 'Febles Estrada',
        'uri': 'https://orcid.org/0000-0001-5095-8389',
        'affiliation':
          [
            {
              'name': 'Central University of Las Villas',
              'uri': 'https://affiliation.org/0000-0001-6666-8389'
            }
          ]
      },
      {
        'family': 'Yaimí',
        'given': 'Trujillo Casañola',
        'uri': 'https://www.linkedin.com/in/a37154a0/',
        'affiliation':
          [
            {
              'name': 'University of Informatics Sciences',
              'uri': 'https://affiliation.org/0000-0001-6547-8389'
            }
          ]
      }
    ],
    'title': [
      'Modelo para Valorar las Organizaciones Desarrolladoras de Software al Iniciar la Mejora de Procesos'
    ],
    'language': 'en',
    'issued': {'date-parts': [[2017, 10, 25]]},
    'type': 'journal-article',
    'subject': ['River', 'Lagoon'],
    'subject-id': [
      {
        'value': 'Ocean',
        'key': 'http://artemide.art.uniroma2.it:8081/agrovoc/c_39065',
        'key-asserted-by': 'AGROVOC'
      },
      {
        'value': 'Seaweed',
        'key': 'http://artemide.art.uniroma2.it:8081/agrovoc/c_39070',
        'key-asserted-by': 'AGROVOC'
      }
    ],
    'abstract': 'The management of the scientific-technical and academic information of the institutions is one ' +
    'of the challenges that the current society faces. The use of Institutional Repositories is one ' +
    'of the main solutions for this problem.',
    'ISSN': ['1073-449X', '1535-4970'],
    'issn-type': [
      {'value': '1073-449X', 'type': 'print'},
      {'value': '1535-4970', 'type': 'electronic'}
    ],


    'publisher': 'University of Informatics Sciences',
    'DOI': '10.1164\/rccm.201704-0797oc',
    'page': '873-881',
    'volume': '196',
    'container-title': ['American Journal of Respiratory and Critical Care Medicine'],
    'bitstreams': [
      {'id': 1, 'name': 'Modelo para valorar las (...) Capitulo 1.pdf'},
      {'id': 2, 'name': 'Modelo para valorar las (...) Capitulo 2.pdf'}
    ]
  };

  // Control var for only render the view went data is ready
  isReady = false;

  constructor(
    private fb: FormBuilder,
    private blockWrapperService: BlockWrapperService
  ) {
  }

  ngOnInit() {

    // Load input form form API
    this.blockWrapperService
      .getAll()
      .subscribe(config => {
        this.config = config;

        this.form = this.fb.group({});
        const obj = Object.assign(this.data, {});
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
