import {Calendar, Home, Search, Settings, PencilIcon} from 'lucide-react';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger
} from '@/components/ui/sidebar';
import {useState} from 'react';
import {Link} from 'react-router-dom';

// Menu items.
const items = [
	{
		title: 'Home',
		url: '/home',
		icon: Home
	},
	{
		title: 'Criar Post',
		url: '/create-post',
		icon: PencilIcon
	},
	{
		title: 'Calendar',
		url: '#',
		icon: Calendar
	},
	{
		title: 'Search',
		url: '#',
		icon: Search
	},
	{
		title: 'Settings',
		url: '#',
		icon: Settings
	}
];

export function SidebarPage() {
	const [actve, setActive] = useState('Home');

	return (
		<Sidebar collapsible='icon'>
			<SidebarContent className='bg-zinc-800 border-zinc-500 relative'>
				<SidebarGroup className='flex flex-col gap-4 '>
					<SidebarGroupLabel className='text-lg text-white'>
						Blog Reformado
					</SidebarGroupLabel>
					<SidebarGroupContent className='mt-3'>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem
									key={item.title}
									className={
										actve === item.title
											? ' hover:text-zinc-700 text-zinc-700 bg-white rounded-sm'
											: ' hover:text-white text-zinc-400 hover:bg-zinc-700 rounded-sm'
									}
									onClick={() => setActive(item.title)}
								>
									<SidebarMenuButton asChild>
										<Link to={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
						<SidebarTrigger className='absolute top-1 right-2  text-white ' />
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
