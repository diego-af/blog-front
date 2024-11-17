import {Avatar, AvatarFallback, AvatarImage} from '@radix-ui/react-avatar';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger
} from './ui/menubar';
import {ArrowRightToLine, Bell} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import {useAuthStore} from '@/store/store';
import {Suspense} from 'react';
import ListHeader from '@/pages/components/ListHeader';

export const Header = () => {
	const navigate = useNavigate();

	const {user, logout} = useAuthStore((state) => state);

	const handleLogout = () => {
		logout();
		navigate('/login');
	};
	return (
		<div className=' w-full bg-zinc-50  p-4 flex justify-center items-center border border-b-zinc-200'>
			<div className='w-full md:max-w-[1200px] flex justify-between items-center'>
				<ListHeader />
				<div className='flex justify-end items-end'>
					<div className='flex gap-4 items-center justify-center w-fit '>
						<Suspense fallback={<span>Carregando...</span>}>
							<Menubar className=' border-none bg-transparent shadow-none'>
								<MenubarMenu>
									<MenubarTrigger className='focus:bg-zinc-50 select-none   data-[state=open]:bg-neutral-50 data-[state=open]:text-neutral-900'>
										<Avatar className=' '>
											<AvatarImage
												src='https://github.com/diego-af.png'
												className='w-[30px] h-[30px]  rounded  border-zinc-700'
												alt='icon'
											/>
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</MenubarTrigger>
									<MenubarContent className=''>
										<MenubarItem>
											Bem vindo(a){' '}
											<strong className='ml-2'>{user?.name}</strong>
										</MenubarItem>
										<MenubarItem className='flex justify-between'>
											<span>Notificações</span>
											<Bell size={18} />
										</MenubarItem>
										<MenubarItem
											className='flex justify-between'
											onClick={handleLogout}
										>
											<span>Sair do sitema</span>
											<ArrowRightToLine />
										</MenubarItem>
									</MenubarContent>
								</MenubarMenu>
							</Menubar>
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
};
