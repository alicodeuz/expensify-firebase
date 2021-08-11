import { FaUserPlus, FaUsers } from 'react-icons/all';
import AddClients from './containers/Clients/Add';
import EditClients from './containers/Clients/Edit';
import Clients from './containers/Clients';

const routes = {
  authenticated: [
    {
      key: 'clients',
      path: '/clients',
      component: Clients,
      exact: true,
      icon: <FaUsers />
    },
    {
      key: 'new-client',
      path: '/clients/add',
      component: AddClients,
      exact: true,
      icon: <FaUserPlus />
    },
    {
      key: 'edit-client',
      path: '/clients/:id/edit',
      component: EditClients,
      exact: true,
      icon: <FaUserPlus />
    },
  ],
  public: [],
}

export default routes;