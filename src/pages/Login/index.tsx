import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {useAuth} from '@/store/useAuth';

const formSchema = z.object({
	email: z.string().email({message: 'Email inválido'}).min(3, {
		message: 'Email deve conter mais de 3 caracteres'
	}),
	password: z.string().min(5, {
		message: 'Senha deve conter mais de 5 caracteres'
	})
});

export default function Login() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	});

	const {login} = useAuth();

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);

		login({email: values.email, password: values.password});
	}
	return (
		<div className='w-full h-screen grid grid-cols-1 md:grid-cols-2 bg-black'>
			<div className='flex col w-full justify-center items-center'>
				<span className='text-muted-foreground text-4xl'>
					Bem vindo ao blog reformado
				</span>
			</div>
			<div className='flex col w-full justify-center items-center gap-3 bg-white'>
				<div className='flex flex-col  border border-gray-400 rounded-lg  p-4 w-[400px]  gap-4'>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='flex flex-col gap-4 '
						>
							<FormField
								control={form.control}
								name='email'
								render={({field}) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder='Digite seu email'
												{...field}
												className='w-full rounded-md border-zinc-600 ring-0 outline-none focus-ring-0 focus:ring-offset-0 focus-outline-none focus-border-none'
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='password'
								render={({field}) => (
									<FormItem>
										<FormLabel>Senha</FormLabel>
										<FormControl>
											<Input
												placeholder='Digite suas senha'
												{...field}
												className='w-full rounded-md border-zinc-600 ring-0 outline-none focus-ring-0 focus:ring-offset-0 focus-outline-none focus-border-none'
												type='password'
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type='submit' className='w-full'>
								Acessar
							</Button>
						</form>
					</Form>
				</div>
			</div>
		</div>
	);
}
