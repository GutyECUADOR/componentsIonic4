import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss']
})
export class AlertPage implements OnInit {
  constructor(private alertController: AlertController) {}
  @Input() pageTitle: string;

  ngOnInit() {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Atencion',
      subHeader: 'Informacion',
      message:
        // tslint:disable-next-line:max-line-length
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus obcaecati aliquid minus assumenda incidunt commodi iste amet! Doloribus voluptas officia praesentium expedita mollitia repellat? Saepe, eum. Molestiae doloribus placeat velit?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel: blah', blah);
          }
        },
        {
          text: 'Listo',
          handler: values => {
            console.log(values);
            this.pageTitle = values['txtModalWindowName'];
          }
        }
      ],
      inputs: [
        {
          name: 'txtModalWindowName',
          type: 'text',
          placeholder: 'Nombre de la ventana...'
        }
      ]
    });

    await alert.present();
  }

  async showAlertInputs() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
