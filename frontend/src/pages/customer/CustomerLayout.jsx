import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import CustomerSidebar from '../../components/dashboard/CustomerSidebar';
import './CustomerLayout.css';

const DEFAULT_USER = {
  fullName: 'Customer',
  email: 'user@example.com',
  avatar: null,
};

export default function CustomerLayout() {
  const user = useSelector(state => state.auth.user) || DEFAULT_USER;
  return (
    <div className="customer-layout">
      <CustomerSidebar user={user} />
      <main className="customer-main">
        <Outlet />
      </main>
    </div>
  );
}
