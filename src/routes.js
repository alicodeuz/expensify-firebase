import { FaUserPlus, FaUsers } from 'react-icons/all';
import AddClients from './containers/Clients/Add';
import EditClients from './containers/Clients/Edit';
import Clients from './containers/Clients';
import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';
import Profile from './containers/Profile/Profile';

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
    {
      key: 'profile',
      path: '/profile',
      component: Profile,
      exact: true,
      icon: <FaUserPlus />
    },
  ],
  public: [
    {
      key: 'sign-in',
      path: '/sign-in',
      component: SignIn,
      exact: true,
      icon: <FaUserPlus />
    },
    {
      key: 'sign-up',
      path: '/sign-up',
      component: SignUp,
      exact: true,
      icon: <FaUserPlus />
    },
  ],
}

export default routes;