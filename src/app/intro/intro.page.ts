import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
  constructor(private router: Router, private storage: Storage) {}
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400,
  };

  slides = [
    {
      logoUrl: 'assets/images/logo-h.png',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum temporibus nostrum sit totam reiciendis, quia libero nisi nihil magni nemo laborum officiis iure in sed aut amet excepturi obcaecati!',
      iconName: 'camera',
    },
    {
      logoUrl: 'assets/images/logo-h.png',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum temporibus nostrum sit totam reiciendis, quia libero nisi nihil magni nemo laborum officiis iure in sed aut amet excepturi obcaecati!',
      iconName: 'airplane',
    },
    {
      logoUrl: 'assets/images/logo-h.png',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum temporibus nostrum sit totam reiciendis, quia libero nisi nihil magni nemo laborum officiis iure in sed aut amet excepturi obcaecati!',
      iconName: 'restaurant',
    },
  ];

  closeSlides() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/menu/home');
  }
}
