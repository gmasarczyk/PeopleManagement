# PeopleManagement

How to run?
Open solution ASP\PeopleManagement.sln and run it.

How to run Angular SPA application:
1. npm install
2. ng serve
More info: https://angular.io/guide/quickstart

How to bulild entire solution?
1. build angular SPA app -> ng build
2. copy the conntent of the Angular\dist directory to ASP\PeopleManagement\wwwroot\dist
3. launch PeopleManagement.sln (F5)
4. publish PeopleManagement to File System
5. run application in PublishOutput directory -> dotnet PeopleManagement.dll
6. In browser http://localhost:5000


Architecture:
https://www.microsoft.com/net/learn/get-started/windows
https://angular.io/guide/quickstart

SPA application built in Angular hosted in ASP.NET Core web application.
Data stored in file database (SqLite)
