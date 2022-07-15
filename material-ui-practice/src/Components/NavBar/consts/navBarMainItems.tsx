
import Authentication from "../../Pages/Authentication.page"
import Database from "../../Pages/Database.page"
import Storage from "../../Pages/Storage.page"
import Hosting from "../../Pages/Hosting.page"
import Functions from "../../Pages/Functions.page"
import MachineLearning from "../../Pages/MachineLearning.page"


export const mainItems = [{
    id: 0,
    /* icon: <PeopleIcon />, */
    label: 'Authentication',
    route: '/authentication',
    component: <Authentication/>, 
},
{
    id: 1,
    /* icon: <DnsIcon />, */
    label: 'Database',
    route: '/database',
    component: <Database/>,
},
{
    id: 2,
/*     icon: <ImageIcon />, */
    label: 'Storage',
    route: '/storage',
    component: <Storage/>,

},
{
    id: 3,
  /*   icon: <PublicIcon />, */
    label: 'Hosting',
    route: '/hosting',
    component: <Hosting/>,

},
{
    id: 4,
    /* icon: <SettingsEthernetIcon />, */
    label: 'Functions',
    route: '/functions',
    component: <Functions/>,

},
{
    id: 5,
    /* icon: <SettingsInputComponentIcon />, */
    label: 'Machine learning',
    route: '/machine-learning',
    component: <MachineLearning/>,

},]


