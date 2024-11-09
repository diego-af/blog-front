import {Avatar, AvatarFallback, AvatarImage} from '@radix-ui/react-avatar';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger
} from './ui/menubar';
import {ArrowRightToLine} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import {useAuthStore} from '@/store/store';
import {useDetails} from '@/services/hooks/userDetails/useDetails';
import {Suspense} from 'react';

export const Header = () => {
	const navigate = useNavigate();

	const {isLoading} = useDetails();

	const {user} = useAuthStore((state) => state);

	const handleLogout = () => {
		localStorage.clear();
		navigate('/login');
	};
	return (
		<div className=' w-full bg-sidebar h-fi p-4 flex justify-between items-center'>
			<div className='container flex justify-end items-end'>
				<div className='flex gap-4 items-center justify-center w-fit '>
					<span className='text-zinc-700 text-lg '>
						Bem vindo(a) {user?.name}{' '}
					</span>

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
									<MenubarItem>Notificações</MenubarItem>
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
	);
};
