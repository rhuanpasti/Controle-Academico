/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';
import { TurmasComponent } from './turmas/turmas.component';



/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: TurmasComponent,
        data: {
            title: 'Academico',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AcademicoRoutingModule {}
