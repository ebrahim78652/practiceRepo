
import Authentication from "../../Authentication.page"
import Database from "../../Database.page"
import Storage from "../../Storage.page"
import Hosting from "../../Hosting.page"
import Functions from "../../Functions.page"
import MachineLearning from "../../MachineLearning.page"


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


