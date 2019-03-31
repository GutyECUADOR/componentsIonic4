import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss']
})
export class ActionSheetPage implements OnInit {
  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      backdropDismiss: false, // Evita el dissmiss fuera del action-sheet
      buttons: [{
        text: 'Elminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Abrir (abrir modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorito',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
