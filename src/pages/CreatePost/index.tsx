import TextEditor from '@/components/TextEditor';
import {DEFAULT} from '@/components/TextEditor/config';
import {Button} from '@/components/ui/button';
import {useState} from 'react';
import {locale} from 'reactjs-tiptap-editor';
locale.setLang('pt_BR');
import axios from 'axios';

export const CreatePost = () => {
	const [content, setCOntent] = useState(DEFAULT);

	const sendPOst = async () => {
		console.log(content);
		if (!content) {
			alert('Prencha o campo');
			return;
		}
		const response = await axios.post('http://localhost:3000/post-create', {
			content: content
		});

		console.log(response);
	};

	return (
		<div className='w-full h-full px-14 mt-10 flex flex-col gap-4'>
			<TextEditor content={content} setContent={setCOntent} />

			<Button onClick={sendPOst}>Enviar</Button>
		</div>
	);
};
