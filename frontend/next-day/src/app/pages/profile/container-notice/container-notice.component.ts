import { Component, Input, OnInit } from '@angular/core';

class Notice {
  tittle: string;
  subject:string;
  description:string
}

@Component({
  selector: 'nd-container-notice',
  templateUrl: './container-notice.component.html',
  styleUrls: ['./container-notice.component.scss']
})
export class ContainerNoticeComponent implements OnInit{
  notices: Notice[];

  ngOnInit(): void {
    this.notices = [
    {
      tittle: 'mek',
      subject: 'languaje',
      description: 'pues eso que estamos aquii'
    },
    {
      tittle: 'two',
      subject: 'math',
      description: 'pues eso que estamos aquii'
    },
    {
      tittle: 'three',
      subject: 'biology',
      description: 'pues eso que estamos aquii, pues te cuento mas para ver como se sale los matrgendes si se extiende soto demasiao'
    },
    {
      tittle: 'four',
      subject: 'music',
      description: 'pues eso que estamos aquii, habra qeyu poner un maximo de '
    },
    {
      tittle: 'five',
      subject: 'plactic',
      description: 'pues es'
    }

  ]
  }
}
