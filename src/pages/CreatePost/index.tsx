import TextEditor from '@/components/TextEditor';
import {DEFAULT} from '@/components/TextEditor/config';
import {Button} from '@/components/ui/button';
import {useState} from 'react';
import {locale} from 'reactjs-tiptap-editor';
locale.setLang('pt_BR');
import axios from 'axios';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {Textarea} from '@/components/ui/textarea';
import {formSchema} from "@/pages/CreatePost/schema.ts";


export const CreatePost = () => {
	const [content, setCOntent] = useState(DEFAULT);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			description: '',
			imageUrl: ''
		}
	});

	function onSubmit() {
		sendPOst();
	}
	const sendPOst = async () => {
		if (!content) {
			alert('Prencha o campo');
			return;
		}

		try{

	 	await axios.post('http://localhost:3000/post-create', {
			content: content,
			title: form.getValues('title'),
			description: form.getValues('description'),
			imageUrl: form.getValues('imageUrl'),
			authorId: 1
		});

		form.reset()

		}catch(error: unknown){
				console.log(error);
		}finally {
			console.log(content);
			setCOntent(DEFAULT);
		}


	};

	return (
		<div className='w-full h-screen flex flex-col items-center mt-6'>
			<div className='w-full flex flex-col gap-4  justify-center  md:max-w-[800px] lg:max-w-[800px]'>
				<TextEditor content={content} setContent={setCOntent} />
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col gap-4 '
					>
						<FormField
							control={form.control}
							name='title'
							render={({field}) => (
								<FormItem>
									<FormLabel>Titulo que aparecerá no post</FormLabel>
									<FormControl>
										<Input
											placeholder='Digite o titulo'
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
							name='description'
							render={({field}) => (
								<FormItem>
									<FormLabel>Digite a descrição</FormLabel>
									<FormControl>
										<Textarea
											placeholder='Digite a descrição'
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
							name='imageUrl'
							render={({field}) => (
								<FormItem>
									<FormLabel>
										Coloque aqui o link da image que aparece no post
									</FormLabel>
									<FormControl>
										<Input
											placeholder='Ex: https://image.com.br'
											{...field}
											className='w-full rounded-md border-zinc-600 ring-0 outline-none focus-ring-0 focus:ring-offset-0 focus-outline-none focus-border-none'
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit'>Enviar</Button>
					</form>
				</Form>
			</div>
		</div>
	);
};
