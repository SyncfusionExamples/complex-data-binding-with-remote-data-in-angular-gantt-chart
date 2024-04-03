import { Component } from '@angular/core';
import { DataManager, Query, UrlAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  template: `
  <ejs-gantt [dataSource]='data' [query]="query" [treeColumnIndex]='1' height='400' [taskFields]="taskSettings" [splitterSettings] = "splitterSettings"  >
                <e-columns>
                  <e-column field='TaskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                  <e-column field='TaskName' headerText='Task Name' width='100'></e-column>
                  <e-column field='Duration' headerText='Duration' width='80' textAlign='Right'></e-column>
                  <e-column field='Tasks.Name' headerText='Name' width='100' textAlign='Right'></e-column>
                  </e-columns>
               </ejs-gantt>
 `,

})
export class AppComponent {
  public data?: DataManager;
  public taskSettings?: object;
  public splitterSettings?: object;
  public ngOnInit(): void {
    this.data = new DataManager({
      adaptor: new UrlAdaptor,
      url: "Home/Datasource",
  });
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      child: 'subtasks',
      parentID: 'ParentValue',
      hasChildMapping: 'isParent'
    };
    this.splitterSettings = {
      position: '75%'
    };
  }
  public query?: Query = new Query().expand('Tasks');
  
}
