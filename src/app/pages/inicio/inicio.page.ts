import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.page.html",
  styleUrls: ["./inicio.page.scss"]
})
export class InicioPage implements OnInit {
  public listcomponents: IComponente[] = [
    {
      icon: "home",
      name: "Alerts",
      path: "/alert"
    },
    {
      icon: "appstore",
      name: "Action Sheet",
      path: "/action-sheet"
    },
    {
      icon: "beaker",
      name: "ion-avatar",
      path: "/avatar"
    },
    {
      icon: "radio-button-on",
      name: "ion-buttons",
      path: "/botones"
    }
  ];

  constructor() {}

  ngOnInit() {}
}

 interface IComponente {
  icon: string;
  name: string;
  path: string;
}

