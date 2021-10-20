import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { ListaComponent } from "./lista/lista.component";
import { DetalleComponent } from "./detalle/detalle.component";
import { PreciosComponent } from "./precios/precios.component";

const appRoutes: Routes = [
    { path: '', component: ListaComponent },
    { path: 'detalle/:clave', component: DetalleComponent },
    { path: 'precios/:clave', component: PreciosComponent },
    { path:  '**', component: ListaComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);