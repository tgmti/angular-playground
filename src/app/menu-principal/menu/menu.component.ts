import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public readonly tituloBarra = 'Angular Playground';
  public readonly tituloMenu = 'Menu';

  public readonly itensMenu = [
    { caminho: '/', descricao: 'Home'  },
    { caminho: '/endereco', descricao: 'Endereço'  },
    { caminho: '/arvore', descricao: 'Árvore'  },
    { caminho: '/outros', descricao: 'Outros'  },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
