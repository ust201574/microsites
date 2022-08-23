import { Component, OnInit } from '@angular/core';
import { MatOptionSelectionChange } from '@angular/material/core';
import { data } from './data';
;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  detailsForm: any = data;
  ngOnInit(): void {
    this.detailsForm.forEach((elmt: any)=>{
      elmt["databuildertype"] = elmt["data-buildertype"];
      delete elmt["data-buildertype"];
      if (elmt["databuildertype"] === "checkbox") {
        let regex = /"/g;
        let options = elmt["options"].replace(regex, " ");
        let regex1 = /'/g
         options = elmt["options"].replace(regex1, " ");

        const chars = options.split(',');
elmt["options"] = chars;
        if (options.includes("\"[")) {
        }
      }
    })
  }
}
