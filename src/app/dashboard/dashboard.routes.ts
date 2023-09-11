import {Routes} from "@angular/router";
import {EstadisticaComponent} from "../ingreso-egreso/estadistica/estadistica.component";
import {IngresoEgresoComponent} from "../ingreso-egreso/ingreso-egreso.component";
import {DetalleComponent} from "../ingreso-egreso/detalle/detalle.component";

//cuando se crea las rutas hijas no necesuita ser un modulo solo un arreglo de tipo routes
export const dashboardRoutes: Routes = [
  {
    path: '',
    component: EstadisticaComponent
  },
  {
    path: 'ingreso-egreso',
    component: IngresoEgresoComponent
  },
  {
    path: 'detalle',
    component: DetalleComponent
  }
];
