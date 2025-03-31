import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {
  isDarkMode: boolean = false;
  ngOnInit(): void {

    const animation = document.querySelectorAll('.list')
    animation.forEach(function (anima) {
      anima.addEventListener("click", function () {
        const contentIsOpen = document.querySelectorAll(".active")
        contentIsOpen.forEach(function (isContent) {
          isContent.classList.remove("active")
        })
        anima.classList.add("active")
      })
    })

    const hamburgerMenu = document.querySelector('.hamburger-icon');
    const sideMenu = document.querySelector('.menu-link');
    const ovelay = document.querySelector('.over-lay') as HTMLElement;
    const sidebarLinks = document.querySelectorAll('.menu-link a');

    hamburgerMenu?.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');
      sideMenu?.classList.toggle('active');
      if (sideMenu?.classList.contains('active')) {
        document.body.style.overflow = "hidden";
        ovelay.style.display = "block"
      } else {
        document.body.style.overflow = "auto";
        ovelay.style.display = "none";
      }

    })

    // close sidebar when clicking link

    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        sideMenu?.classList.remove('active');
        hamburgerMenu?.classList.remove('active');
        ovelay.style.display = "none";
        document.body.style.overflow = "auto";
      });
    });

    function handleResize() {
      if (window.innerWidth >= 780) {
        sideMenu?.classList.remove('active');
        document.body.style.overflow = "auto";
        hamburgerMenu?.classList.remove('active');
        ovelay.style.display = "none";
      }
    }
    window.addEventListener('resize', handleResize);

    // header scrolled

    document.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 0) {
        header?.classList?.add('scrolled');
      } else {
        header?.classList?.remove('scrolled');
      }
    })
  }
  onClick() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document?.body?.classList.add('dark-active');
      document?.body?.classList.remove('white-active');
    } else {

      document?.body?.classList.remove('dark-active');
      document?.body?.classList.add('white-active');
    }
  }
}
