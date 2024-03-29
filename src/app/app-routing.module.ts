import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";




// Components WIP
import { MaterialComponent } from './components/wip/material/material.component';
import { ProdPerformComponent } from './components/wip/prod-perform/prod-perform.component';
import { ProdPerformSaComponent } from './components/wip/prod-perform-sa/prod-perform-sa.component';
import { InwardComponent } from './components/wip/inward/inward.component';
import { InprocessComponent } from './components/wip/inprocess/inprocess.component';
import { Inward2Component } from './components/wip/inward2/inward2.component';
import { TrendsComponent } from './components/wip/trends/trends.component';
import { OrderDisturbComponent } from './components/wip/order-disturb/order-disturb.component';
import { InprocessRejectComponent } from './components/wip/inprocess-reject/inprocess-reject.component';
import { EcrComponent } from './components/wip/ecr/ecr.component';


// Components Planning
import { ProdPlanComponent } from './components/planning/prod-plan/prod-plan.component';
import { ProdMachinewiseComponent } from './components/planning/prod-machinewise/prod-machinewise.component';
import { ProdShopfloorwiseComponent } from './components/planning/prod-shopfloorwise/prod-shopfloorwise.component';
import { AlertReportComponent } from './components/breakdown/alert-report/alert-report.component';
import { ShopfloorwiseComponent } from './components/breakdown/shopfloorwise/shopfloorwise.component';
import { CategorywiseComponent } from './components/breakdown/categorywise/categorywise.component';
import { AlertComponent } from './components/breakdown/alert/alert.component';
import { AssemblylineAnalysisComponent } from './components/breakdown/assemblyline-analysis/assemblyline-analysis.component';
import { MachinewiseAnalysisComponent } from './components/breakdown/machinewise-analysis/machinewise-analysis.component';
import { CallHelpComponent } from './components/breakdown/call-help/call-help.component';
import { ShiftSkillComponent } from './components/resource/shift-skill/shift-skill.component';
import { EmployeeMasterComponent } from './components/resource/employee-master/employee-master.component';
import { ShiftStrengthComponent } from './components/resource/shift-strength/shift-strength.component';
import { MonthlyReportComponent } from './components/resource/monthly-report/monthly-report.component';
import { EvacuationComponent } from './components/resource/evacuation/evacuation.component';
import { DailyReportComponent } from './components/resource/daily-report/daily-report.component';
import { QualityManagementComponent } from './components/quality/quality-management/quality-management.component';
import { OeeComponent } from './components/report/oee/oee.component';
import { TodoComponent } from './components/report/todo/todo.component';
import { ConfigurationComponent } from './components/config/configuration/configuration.component';
import { QualityDashboardComponent } from './components/quality/quality-dashboard/quality-dashboard.component';
import { ProdPlantwiseComponent } from './components/planning/prod-plantwise/prod-plantwise.component';
import { ProdAssemblylinewiseComponent } from './components/planning/prod-assemblylinewise/prod-assemblylinewise.component';
import { OeeReportComponent } from './components/report/oee-report/oee-report.component';

// Components Config
import { CompanyComponent } from './components/config/company/company.component';
import { LocationComponent } from './components/config/location/location.component';
import { ShopfloorComponent } from './components/config/shopfloor/shopfloor.component';
import { AssemblylineComponent } from './components/config/assemblyline/assemblyline.component';
import { ProdPlanReportComponent } from './components/report/productionreport/prod-plan-report/prod-plan-report.component';
import { ProdLineConfigComponent } from './components/report/productionreport/prod-line-config/prod-line-config.component';
import { ProdAndonReportComponent } from './components/report/productionreport/prod-andon-report/prod-andon-report.component';
import { DailyInfoComponent } from './components/report/resourcereport/daily-info/daily-info.component';
import { MonthlyInfoComponent } from './components/report/resourcereport/monthly-info/monthly-info.component';
import { QualityManagementReportComponent } from './components/report/qualityreport/quality-management-report/quality-management-report.component';
import { MachineidComponent } from './components/config/machineid/machineid.component';
import { ProductidComponent } from './components/config/productid/productid.component';
import { BreakdownComponent } from './components/config/breakdown/breakdown.component';
import { SubBreakdownComponent } from './components/config/sub-breakdown/sub-breakdown.component';
import { ProdInfoComponent } from './components/planning/prod-info/prod-info.component';
import { SubAssemblylineComponent } from './components/config/sub-assemblyline/sub-assemblyline.component';
import { ProductRecipeComponent } from './components/config/product-recipe/product-recipe.component';
import { DepartmentComponent } from './components/config/department/department.component';
import { DesignationComponent } from './components/config/designation/designation.component';
import { ShiftConfigComponent } from './components/config/shift-config/shift-config.component';
import { SkillMatrixComponent } from './components/config/skill-matrix/skill-matrix.component';
import { BatchComponent } from './components/config/batch/batch.component';
import { PoNoComponent } from './components/config/po-no/po-no.component';
import { MachineDetailsComponent } from './components/production/machine-details/machine-details.component';
import { QcCheckTypeComponent } from './components/config/qc-check-type/qc-check-type.component';
import { FoodPriceComponent } from './components/canteen/food-price/food-price.component';
import { SoloAssemblylineComponent } from './components/production/solo-assemblyline/solo-assemblyline.component';
import { QcDefectTypeComponent } from './components/config/qc-defect-type/qc-defect-type.component';
import { QualityInspectionComponent } from './components/quality/quality-inspection/quality-inspection.component';
import { SpellAssemblylineComponent } from './components/production/spell-assemblyline/spell-assemblyline.component';
import { MachineDetailQualityComponent } from './components/quality/machine-detail-quality/machine-detail-quality.component';
import { DigitalQualityInspectionComponent } from './components/quality/digital-quality-inspection/digital-quality-inspection.component';
import { MachineDetailQuality2Component } from './components/quality/machine-detail-quality2/machine-detail-quality2.component';
import { SoloPlantComponent } from './components/production/solo-plant/solo-plant.component';
import { SoloShopfloorComponent } from './components/production/solo-shopfloor/solo-shopfloor.component';
import { DailyTargetComponent } from './components/report2/daily-target/daily-target.component';
import { WeeklyTargetComponent } from './components/report2/weekly-target/weekly-target.component';
import { MonthlyTargetComponent } from './components/report2/monthly-target/monthly-target.component';
import { ApiUrlComponent } from './components/config/api-url/api-url.component';
import { LineDashboardComponent } from './components/dashboard/line-dashboard/line-dashboard.component';
import { PlantDashboardComponent } from './components/dashboard/plant-dashboard/plant-dashboard.component';
import { MachineDashboardComponent } from './components/dashboard/machine-dashboard/machine-dashboard.component';




@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },

                    // Components Planning
                    { path: 'prod_plan', component: ProdPlanComponent },
                    { path: 'lmc', loadChildren: () => import('./components/planning/lmc/lmc.module').then(m => m.LmcModule) },


                    // Components Production
                    { path: 'machinewise', component: ProdMachinewiseComponent },
                    { path: 'shopfloorwise', component: ProdShopfloorwiseComponent },
                    { path: 'assemblylinewise', component: ProdAssemblylinewiseComponent },
                    { path: 'plantwise', component: ProdPlantwiseComponent },
                    { path: 'machine_details', component: MachineDetailsComponent },

                    // Solo Components
                    { path: 'solo_assemblyline', component: SoloAssemblylineComponent },
                    { path: 'solo_plant', component: SoloPlantComponent },
                    { path: 'solo_shopfloor', component: SoloShopfloorComponent },

                    // Spell Assemblyline
                    { path: 'spell_assemblyline', component: SpellAssemblylineComponent },

                    // Components Breakdown
                    { path: 'alert_report', component: AlertReportComponent },
                    { path: 'shopfloorwise_breakdown', component: ShopfloorwiseComponent },
                    { path: 'categorywise_breakdown', component: CategorywiseComponent },
                    { path: 'alert', component: AlertComponent },
                    { path: 'assemblyline_analysis', component: AssemblylineAnalysisComponent },
                    { path: 'machinewise_analysis', component: MachinewiseAnalysisComponent },
                    { path: 'call_help', component: CallHelpComponent },

                    // Components Report
                    { path: 'oee', component: OeeComponent },
                    { path: 'todo', component: TodoComponent },
                    { path: 'oee_report', component: OeeReportComponent },

                    // Components Production Report
                    { path: 'prod_plan_report', component: ProdPlanReportComponent },
                    { path: 'prod_line_config_report', component: ProdLineConfigComponent },
                    { path: 'prod_andon_report', component: ProdAndonReportComponent },
                    { path: 'prod_info', component: ProdInfoComponent },

                    // Components Resource Report
                    { path: 'daily_report', component: DailyInfoComponent },
                    { path: 'monthly_report', component: MonthlyInfoComponent },

                    // Components Quality Report
                    { path: 'quality_report', component: QualityManagementReportComponent },

                    // Components Configuration
                    { path: 'config', component: ConfigurationComponent },

                    // Components Resource
                    { path: 'shift_skill', component: ShiftSkillComponent },
                    { path: 'employee_details', component: EmployeeMasterComponent },
                    { path: 'shift_strength', component: ShiftStrengthComponent },
                    { path: 'monthly_in_out', component: MonthlyReportComponent },
                    { path: 'evacuation', component: EvacuationComponent },
                    { path: 'daily_info', component: DailyReportComponent },

                    // Components Quality
                    { path: 'quality_dashboard', component: QualityDashboardComponent },
                    { path: 'quality_management', component: QualityManagementComponent },
                    { path: 'quality_inspection', component: QualityInspectionComponent },
                    { path: 'machine_quality', component: MachineDetailQualityComponent },
                    { path: 'machine_quality2', component: MachineDetailQuality2Component },
                    { path: 'digital_inspection', component: DigitalQualityInspectionComponent },


                    // Components WIP
                    { path: 'material', component: MaterialComponent },
                    { path: 'production_performance', component: ProdPerformComponent },
                    { path: 'production_performance_SA', component:ProdPerformSaComponent },
                    { path: 'inward', component:InwardComponent },
                    { path: 'inprocess', component:InprocessComponent },
                    { path: 'inward_2', component:Inward2Component },
                    { path: 'trends', component:TrendsComponent },
                    { path: 'order_disturb', component:OrderDisturbComponent },
                    { path: 'inprocess_reject', component:InprocessRejectComponent },
                    { path: 'ecr', component:EcrComponent },




                    // Canteen
                    { path: 'canteen', component: FoodPriceComponent },




                    // Components Config
                    { path: 'company', component: CompanyComponent },
                    { path: 'location', component: LocationComponent },
                    { path: 'shopfloor', component: ShopfloorComponent },
                    { path: 'assemblyline', component: AssemblylineComponent },
                    { path: 'sub_assemblyline', component: SubAssemblylineComponent },
                    { path: 'machineid', component: MachineidComponent },
                    { path: 'productid', component: ProductidComponent },
                    { path: 'product_receipe', component: ProductRecipeComponent },
                    { path: 'breakdown_category', component: BreakdownComponent },
                    { path: 'sub_breakdown_category', component: SubBreakdownComponent },
                    { path: 'department', component: DepartmentComponent },
                    { path: 'designation', component: DesignationComponent },
                    { path: 'shift', component: ShiftConfigComponent },
                    { path: 'skill_matrix', component: SkillMatrixComponent },
                    { path: 'batch', component: BatchComponent },
                    { path: 'po_no', component: PoNoComponent },
                    { path: 'QC_check_types', component: QcCheckTypeComponent },
                    { path: 'QC_defect_type', component: QcDefectTypeComponent},

                    // Reports 2
                    { path: 'daily_target', component: DailyTargetComponent },
                    { path: 'weekly_target', component: WeeklyTargetComponent },
                    { path: 'monthly_target', component: MonthlyTargetComponent },

                    // API URL
                    { path: 'api_url', component: ApiUrlComponent },

                    // Dashboards
                    { path: 'line_dash', component: LineDashboardComponent },
                    { path: 'plant_dash', component: PlantDashboardComponent },
                    { path: 'machine_dash', component: MachineDashboardComponent },
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },


        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule  {

}
