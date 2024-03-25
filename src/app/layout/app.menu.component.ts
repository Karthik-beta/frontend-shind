import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] }
                ]
            },

            //planning
            {
                label: 'Production Management',
                items: [
                    { label: 'Production Planning', icon: 'fa-solid fa-calendar', routerLink: ['/prod_plan'] },
                    { label: 'Production Planning Control', icon: 'fa-solid fa-cog', routerLink: ['/lmc/view_lmc'] },
                ]
            },

            //production
            {
                label: 'Resource Management',
                items: [
                    {
                        label: 'Resource Management', icon: 'fa-solid fa-user',
                        items: [
                            {
                                label: 'Dashboard', icon: 'fa-solid fa-tachometer',
                                items: [
                                    { label: 'Shift Strength V/S Skill Matrix', icon: 'fa-solid fa-scale-balanced', routerLink: ['/shift_skill'] },
                                    { label: 'Shift Strength', icon: 'fa-solid fa-users', routerLink: ['/shift_strength'] },
                                    { label: 'Evacuation', icon: 'fa-solid fa-right-from-bracket', routerLink: ['/evacuation']},
                                ]
                            },
                            { label: 'Onboarding', icon: 'fa-solid fa-user-plus', routerLink: ['/employee_details'] },
                            {
                                label: 'Resource Allocation', icon: 'fa-solid fa-sliders',
                                items: [
                                    { label: 'Shift management', icon: 'fa-solid fa-list-check', routerLink: ['/shift_skill'] },
                                    { label: 'Reserve Skill Matrix Employee', icon: 'fa-solid fa-people-roof', routerLink: ['/shift_strength'] },
                                ]
                            },
                            {
                                label: 'Attendance Regularization', icon: 'fa-solid fa-people-roof',
                                items: [
                                    { label: 'Missed Punch Management', icon: 'fa-solid fa-fingerprint' },
                                    { label: 'Leave Management', icon: 'fa-solid fa-calendar-days' },
                                    { label: 'Compensatory Off Management', icon: 'fa-solid fa-calendar-plus' },
                                    { label: 'On Duty Management', icon: 'fa-solid fa-calendar-minus' },
                                    { label: 'Gate Pass Management', icon: 'fa-solid fa-address-card' },
                                    { label: 'Holiday Management', icon: 'fa-solid fa-calendar-check' },
                                ]
                            },
                            { label: 'Daily Attendance Info', icon: 'fa-solid fa-calendar-days', routerLink: ['/daily_info'] },
                            {
                                label: 'Monthly Info', icon: 'fa-solid fa-calendar',
                                items: [
                                    { label: 'Monthly In - Out', icon: 'fa-solid fa-clock', routerLink: ['/monthly_in_out'] },
                                    { label: 'Monthly In – Out Register', icon: 'fa-solid fa-calendar-days' },
                                    { label: 'Monthly Muster Roll Register', icon: 'fa-solid fa-calendar-plus' },
                                    { label: 'Payroll Output Register', icon: 'fa-solid fa-calendar-plus' },
                                ]
                            }
                        ]
                    },
                ]
            },

            {
                label: 'Production Andon',
                items: [
                        {
                            label: 'Production Andon', icon: 'fa-solid fa-cogs',
                            items: [
                                { label: 'Plant', icon: 'fa-solid fa-industry', routerLink: ['/plantwise'] },
                                { label: 'Shopfloor', icon: 'fa-solid fa-building', routerLink: ['/shopfloorwise'] },
                                { label: 'Assemblyline', icon: 'fa-solid fa-cogs', routerLink: ['/assemblylinewise'] },
                                { label: 'Spell Assemblyline', icon: 'fa-solid fa-cogs', routerLink: ['/spell_assemblyline'] },
                                { label: 'Machine', icon: 'fa-solid fa-cog', routerLink: ['/machine_details'] },
                                { label: 'Production Info', icon: 'fa-solid fa-table', routerLink: ['/prod_info'] }
                            ]
                        },
                ],
            },


            //Breakdown
            {
                label: 'Breakdown Andon',
                items: [
                    {
                        label: 'Andon Breakdown', icon: 'fa-solid fa-tools',
                        items: [
                            {
                                label: 'Dashboard', icon: 'fa-solid fa-tachometer',
                                items: [
                                    { label: 'Plant Breakdown', icon: 'fa-solid fa-industry', routerLink: ['/alert_report'] },
                                    { label: 'Shopfloor Breakdown', icon: 'fa-solid fa-wrench', routerLink: ['/shopfloorwise_breakdown'] },
                                    { label: 'Category Breakdown', icon: 'fa-solid fa-list-alt', routerLink: ['/categorywise_breakdown'] },
                                    { label: 'Alerts', icon: 'fa-solid fa-exclamation-circle', routerLink: ['/alert'] },
                                ]
                            },
                            { label: 'Andon Call Help', icon: 'fa-solid fa-phone', routerLink: ['/call_help'] },
                            { label: 'Alerts Info', icon: 'fa-solid fa-exclamation-circle', routerLink: ['/alert_report'] },
                            {
                                label: 'Andon Breakdown Analysis', icon: 'fa-solid fa-chart-bar',
                                items: [
                                    { label: 'Assemblyline Analysis', icon: 'fa-solid fa-chart-bar', routerLink: ['/assemblyline_analysis'] },
                                    { label: 'Machinewise Analysis', icon: 'fa-solid fa-chart-bar', routerLink: ['/machinewise_analysis'] },
                                ]
                            },
                        ]
                    },
                ]
            },

            //Quality
            {
                label: 'Quality Management',
                items: [
                    { label: 'Quality Management', icon: 'fa-solid fa-check-to-slot', routerLink: ['/quality_dashboard'] },
                    { label: 'Digital Quality Inspection', icon: 'fa-solid fa-search-plus', routerLink: ['/machine_quality'] },
                ],
            },

            {
                items: [
                    {
                        label: 'Visual Quality Inspection', icon: 'fa-solid fa-binoculars',
                        items: [
                            { label: '90 Degree Inspection', icon: 'fa-solid fa-magnifying-glass', routerLink: ['/machine_quality2'] },
                        ]
                    },
                ]
            },

            {
                label: 'Work in Progress',
                items: [
                    {
                        label: 'Assemblyline', icon: 'fa-solid fa-cogs',
                        items: [
                            {
                                label: 'Line 1', icon: 'fa-solid fa-industry',
                                items: [
                                    {
                                        label: 'Production Performance', icon: 'fa-solid fa-tachometer-alt',
                                        items: [
                                            { label: 'Daily Shift Target', icon: 'fa-solid fa-bullseye', routerLink: ['/daily_target'] },
                                            { label: 'Weekly Targets', icon: 'fa-solid fa-bullseye', routerLink: ['/weekly_target'] },
                                            { label: 'Month Targets', icon: 'fa-solid fa-bullseye', routerLink: ['/monthly_target'] },
                                        ]
                                    },
                                    {
                                        label: 'Quality Inspection', icon: 'fa-solid fa-binoculars',
                                        items: [
                                            { label: 'Breakage Total Quality', icon: 'fa-solid fa-balance-scale', routerLink: ['/quality_inspection'] },
                                            { label: 'Module Defects & Low Power Rejection', icon: 'fa-solid fa-exclamation-triangle', routerLink: ['/quality_inspection'] },
                                        ]
                                    },
                                    {
                                        label: 'Shift Incharge', icon: 'fa-solid fa-user-tie',
                                        items: [
                                            { label: 'Performance', icon: 'fa-solid fa-tachometer-alt', routerLink: ['/quality_inspection'] },
                                            { label: 'Performance - Cell Breakage %', icon: 'fa-solid fa-chart-bar', routerLink: ['/quality_inspection'] },
                                            { label: 'Output - Rework Laminates', icon: 'fa-solid fa-sync-alt', routerLink: ['/quality_inspection'] },
                                            { label: 'Output - Performance at Layup', icon: 'fa-solid fa-chart-line', routerLink: ['/quality_inspection'] },
                                        ]
                                    },
                                ]
                            },
                        ]
                }
                ]
            },

            //OEE
            {
                items: [
                    { label: 'OEE', icon: 'fa-solid fa-chart-line', routerLink: ['/oee_report'] }
                ]
            },

            {
                label: 'Utility Management',
                items: [
                    {
                        label: 'Utility Management', icon: 'fa-solid fa-cogs',
                        items: [
                            { label: 'Tool Management', icon: 'fa-solid fa-toolbox'},
                            { label: 'Calibration Management', icon: 'fa-solid fa-ruler-combined' },
                            { label: 'Energy Management', icon: 'fa-solid fa-bolt' },
                            { label: 'Store Management', icon: 'fa-solid fa-store' },
                        ]
                    }
                ]
            },

            //ToDo
            {
                items: [
                    { label: 'TO-DO', icon:'fa-solid fa-list-check', routerLink: ['/todo'] }
                ]
            },

            //Reports
            {
                label: 'Reports',
                items: [
                    {
                        label: 'Reports', icon: 'fa-solid fa-file',
                        items: [
                            {
                                label: 'Production info', icon: 'fa-solid fa-chart-bar',
                                items: [
                                    { label: 'Production Planning', icon: 'fa-solid fa-chart-bar', routerLink: ['/prod_plan_report'] },
                                    { label: 'Production Line Config', icon: 'fa-solid fa-chart-bar', routerLink: ['/prod_line_config_report'] },
                                    { label: 'Production Andon', icon: 'fa-solid fa-chart-bar', routerLink: ['/prod_andon_report'] },
                                ]
                            },
                            {
                                label: 'Breakdown info', icon: 'fa-solid fa-chart-bar',
                                items: [
                                    { label: 'Alerts info', icon: 'fa-solid fa-bell', routerLink: ['/alert_report'] },
                                    { label: 'Alerts Machinewise', icon: 'fa-solid fa-exclamation-circle', routerLink: ['/oee'] },
                                ]
                            },
                            {
                                label: 'Resource Management', icon: 'fa-solid fa-chart-bar',
                                items: [
                                    { label: 'Daily Info', icon: 'fa-solid fa-bell', routerLink: ['/daily_report'] },
                                    { label: 'Monthly Info', icon: 'fa-solid fa-exclamation-circle', routerLink: ['/monthly_report'] },
                                ]
                            },
                            {
                                label: 'Quality info', icon: 'fa-solid fa-chart-bar',
                                items: [
                                    { label: 'Quality Management', icon: 'fa-solid fa-bell', routerLink: ['/quality_report'] },
                                    // { label: 'Quality Andon', icon: 'fa-solid fa-exclamation-circle' },
                                ]
                            },
                            {
                                label: 'OEE Anlaysis', icon: 'fa-solid fa-chart-bar', routerLink: ['/oee_report']
                            }
                        ]
                    },
                ]
            },


            //WIP
            {
                label: 'Production Performance',
                items: [
                    { label: 'Material Transactions', icon: 'fa-solid fa-arrow-right-arrow-left', routerLink: ['/material'] },
                    {
                        label: 'Production', icon: 'fa-solid fa-industry',
                        items: [
                            { label: 'Production Performance', icon: 'fa-solid fa-gauge-high', routerLink: ['/production_performance'] },
                            { label: 'Production Performance-SA', icon: 'fa-solid fa-chart-simple', routerLink: ['/production_performance_SA'] },
                        ]
                    },
                    {
                        label: 'Quality Performance', icon: 'fa-solid fa-check-to-slot',
                        items: [
                            { label: 'Inward or Final Quality', icon: 'fa-solid fa-square-check', routerLink: ['/inward'] },
                            { label: 'Inprocesses or Line Quality', icon: 'fa-solid fa-list-check', routerLink: ['/inprocess'] },
                        ]
                    },
                    {
                        label: 'Overall MIS', icon: 'fa-solid fa-server', routerLink: ['/inward_2']

                    },
                    {
                        label: 'Trends', icon: 'fa-solid fa-check-to-slot',
                        items: [
                            { label: 'Order Trends', icon: 'fa-solid fa-square-check', routerLink: ['/trends'] },
                            { label: 'Order Distribution/Delivery Efficiency', icon: 'fa-solid fa-list-check', routerLink: ['/order_disturb'] },
                            { label: 'Rejection', icon: 'fa-solid fa-x', routerLink: ['/inprocess_reject'] },
                            { label: 'ECP/NDP', icon: 'fa-solid fa-list-check', routerLink: ['/ecr'] },

                        ]
                    },

                    // { separator: true },

                    // { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    // { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    // { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    // { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
                    // { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    // { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    // { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    // { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    // { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    // { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    // { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
                    // { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    // { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    // { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    // { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            },

            // { separator: true },


            // Settings
            {
                label: 'Settings',
                items: [
                    {
                        label: 'Settings', icon: 'fa-solid fa-gear',
                        items: [
                            { label: 'Configuration', icon: 'fa-solid fa-cogs', routerLink: ['/config'] },
                        ]
                    }
                ]
            }


            // {
            //     label: 'Prime Blocks',
            //     items: [
            //         { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
            //         { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
            //     ]
            // },
            // {
            //     label: 'Utilities',
            //     items: [
            //         { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
            //         { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
            //     ]
            // },
        //     {
        //         label: 'Pages',
        //         icon: 'pi pi-fw pi-briefcase',
        //         items: [
        //             {
        //                 label: 'Landing',
        //                 icon: 'pi pi-fw pi-globe',
        //                 routerLink: ['/landing']
        //             },
        //             {
        //                 label: 'Auth',
        //                 icon: 'pi pi-fw pi-user',
        //                 items: [
        //                     {
        //                         label: 'Login',
        //                         icon: 'pi pi-fw pi-sign-in',
        //                         routerLink: ['/auth/login']
        //                     },
        //                     {
        //                         label: 'Error',
        //                         icon: 'pi pi-fw pi-times-circle',
        //                         routerLink: ['/auth/error']
        //                     },
        //                     {
        //                         label: 'Access Denied',
        //                         icon: 'pi pi-fw pi-lock',
        //                         routerLink: ['/auth/access']
        //                     }
        //                 ]
        //             },
        //             {
        //                 label: 'Crud',
        //                 icon: 'pi pi-fw pi-pencil',
        //                 routerLink: ['/pages/crud']
        //             },
        //             {
        //                 label: 'Timeline',
        //                 icon: 'pi pi-fw pi-calendar',
        //                 routerLink: ['/pages/timeline']
        //             },
        //             {
        //                 label: 'Not Found',
        //                 icon: 'pi pi-fw pi-exclamation-circle',
        //                 routerLink: ['/notfound']
        //             },
        //             {
        //                 label: 'Empty',
        //                 icon: 'pi pi-fw pi-circle-off',
        //                 routerLink: ['/pages/empty']
        //             },
        //         ]
        //     },
        //     {
        //         label: 'Hierarchy',
        //         items: [
        //             {
        //                 label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
        //                 items: [
        //                     {
        //                         label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                     {
        //                         label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
        //                         ]
        //                     },
        //                 ]
        //             },
        //             {
        //                 label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
        //                 items: [
        //                     {
        //                         label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                     {
        //                         label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                 ]
        //             }
        //         ]
        //     },
        //     {
        //         label: 'Get Started',
        //         items: [
        //             {
        //                 label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
        //             },
        //             {
        //                 label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
        //             }
        //         ]
        //     }
        ];
    }
}
