import NavLink from "@/components/NavLink";
import Link from "next/link";

const sideBars = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/dashboard/add-product',
        title: 'Add Product'
    },
    {
        path: '/dashboard/manage-product',
        title: 'Manage Product'
    },
]

const Sidebar = () => {
    return (
        <aside className="mr-10">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <ul>
                {
                    sideBars.map(({ path, title }) =>
                        <li className="my-2 font-semibold" key={path}>
                            <NavLink exact activeClassName='text-blue-500' href={path}>{title}</NavLink>
                        </li>)
                }
            </ul>
        </aside>
    );
};

export default Sidebar;