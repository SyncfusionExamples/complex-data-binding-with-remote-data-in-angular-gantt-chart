# Complex Data Binding with Remote Data in Angular Gantt Chart

Repository description: Syncfusion Angular Gantt demo showing remote data binding in ASP.NET MVC.

This sample uses Syncfusion EJ2 Angular Gantt with remote JSON task data served from an ASP.NET MVC backend. The Angular front end uses `DataManager` and `UrlAdaptor` to request data from `Home/Datasource`, and the server handles paging, sorting, filtering, and searching.

## Features

- Syncfusion EJ2 Angular Gantt integration
- Remote binding with `DataManager` and `UrlAdaptor`
- Server-side Syncfusion request handling
- Paging, sorting, filtering, searching
- Parent/child task mapping with nested details

## Prerequisites

- Visual Studio 2022 or later
- .NET MVC-compatible framework
- Node.js and npm

## Run

1. Open `SyncfusionAngularASPNETMVC.sln` in Visual Studio.
2. Rebuild to restore NuGet packages.
3. In `ClientApp`, run:

```bash
npm install
```

4. Start the app in Visual Studio and open the home page.

## Remote endpoint

The Angular component loads data from `Home/Datasource`. The backend returns JSON and manages Syncfusion operations.
